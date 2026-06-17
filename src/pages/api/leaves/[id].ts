import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "PATCH") {
    res.setHeader("Allow", "PATCH");
    return res.status(405).end("Method Not Allowed");
  }

  try {
    const session = await getServerSession(req, res, authOptions);
    if (!session || !session.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Check if user is admin
    const client = await clientPromise;
    const db = client.db();
    const users = db.collection("users");
    const user = await users.findOne({ email: session.user.email });

    if (user?.role !== "admin") {
      return res.status(403).json({ message: "Only admins can update leave status" });
    }

    const { status } = req.body;
    if (!["APPROVED", "REJECTED", "PENDING"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id;

    const leaves = db.collection("leaves");
    const result = await leaves.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          status,
          updatedAt: new Date(),
          approvedBy: session.user.email,
        },
      }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Leave request not found" });
    }

    return res.status(200).json({ message: `Leave ${status.toLowerCase()}`, id, status });
  } catch (error) {
    console.error("Error updating leave:", error);
    return res.status(500).json({ message: "Failed to update leave" });
  }
}
