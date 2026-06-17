import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import clientPromise from "@/lib/mongodb";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const session = await getServerSession(req, res, authOptions);
      if (!session || !session.user) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const client = await clientPromise;
      const db = client.db();
      const leaves = db.collection("leaves");

      // Check if user is admin
      const users = db.collection("users");
      const user = await users.findOne({ email: session.user.email });

      let query: any = {};

      // If not admin, only show user's own leaves
      if (user?.role !== "admin") {
        query.employeeEmail = session.user.email;
      }

      const leaveRequests = await leaves
        .find(query)
        .sort({ createdAt: -1 })
        .toArray();

      return res.status(200).json(leaveRequests);
    } catch (error) {
      console.error("Error fetching leaves:", error);
      return res.status(500).json({ message: "Failed to fetch leaves" });
    }
  }

  if (req.method === "POST") {
    try {
      const session = await getServerSession(req, res, authOptions);
      if (!session || !session.user) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const { type, from, to, days, reason } = req.body;

      // Validation
      if (!type || !from || !to || !days) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const client = await clientPromise;
      const db = client.db();
      const leaves = db.collection("leaves");

      const leaveRequest = {
        employeeEmail: session.user.email,
        employeeName: session.user.name || "Employee",
        type,
        from: new Date(from),
        to: new Date(to),
        days: parseInt(days),
        reason: reason || "",
        status: "PENDING",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const result = await leaves.insertOne(leaveRequest);

      return res.status(201).json({ message: "Leave request created", id: result.insertedId });
    } catch (error) {
      console.error("Error creating leave:", error);
      return res.status(500).json({ message: "Failed to create leave request" });
    }
  }

  res.setHeader("Allow", "GET, POST");
  res.status(405).end("Method Not Allowed");
}
