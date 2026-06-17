import { MongoClient } from "mongodb";

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  throw new Error("Please define the MONGO_URI environment variable in .env.local");
}
const uri: string = mongoUri;

let client: MongoClient;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

function getClientPromise() {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }

  return global._mongoClientPromise;
}

const clientPromise = {
  then: (...args: Parameters<Promise<MongoClient>["then"]>) =>
    getClientPromise().then(...args),
  catch: (...args: Parameters<Promise<MongoClient>["catch"]>) =>
    getClientPromise().catch(...args),
  finally: (...args: Parameters<Promise<MongoClient>["finally"]>) =>
    getClientPromise().finally(...args),
  [Symbol.toStringTag]: "Promise",
} as Promise<MongoClient>;

export default clientPromise;
