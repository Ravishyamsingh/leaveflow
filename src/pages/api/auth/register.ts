import type { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcryptjs";
import clientPromise from "@/lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, password } = req.body;
    const normalizedEmail = String(email || "").trim().toLowerCase();

    // Validation
    if (!name || !normalizedEmail || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    const client = await clientPromise;
    const db = client.db();
    const users = db.collection("users");

    // Check if user already exists
    const existingUser = await users.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists with this email" });
    }

    // Hash password
    const passwordHash = await hash(password, 10);

    // Create user
    const result = await users.insertOne({
      name,
      email: normalizedEmail,
      passwordHash,
      role: "employee",
      createdAt: new Date(),
    });

    return res.status(201).json({ message: "User registered successfully", userId: result.insertedId });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({ message: "Registration failed" });
  }
}
