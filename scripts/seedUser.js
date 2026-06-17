const { MongoClient } = require("mongodb");
const bcrypt = require("bcryptjs");
const { loadEnvConfig } = require("@next/env");

loadEnvConfig(process.cwd());

const adminEmail = "admin@leaveflow.local";
const adminPassword = "password";

async function seed() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error("Please define MONGO_URI in .env.local before seeding the admin user.");
  }

  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db();
    const users = db.collection("users");

    const passwordHash = await bcrypt.hash(adminPassword, 10);
    const result = await users.updateOne(
      { email: adminEmail },
      {
        $set: {
          name: "Admin",
          email: adminEmail,
          passwordHash,
          role: "admin",
        },
      },
      { upsert: true }
    );

    if (result.upsertedId) {
      console.log("Inserted admin user", adminEmail);
    } else {
      console.log("Updated admin user", adminEmail);
    }

    console.log("Admin password:", adminPassword);
  } finally {
    await client.close();
  }
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
