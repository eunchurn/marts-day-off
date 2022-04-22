import { NextApiRequest, NextApiResponse } from "next";
import { tester } from "controllers/jobs/tester";
import { prisma } from "libs/prisma";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }
  try {
    const { authorization } = req.headers;
    if (authorization !== `Bearer ${process.env.API_SECRET_KEY}`) {
      return res.status(401).json({ success: false });
    }
    const result = await tester();
    await prisma.lastUpdate.upsert({
      where: { indicator: 0 },
      update: { updatedAt: new Date() },
      create: { updatedAt: new Date() },
    });
    return res.status(200).json({ success: result });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}
