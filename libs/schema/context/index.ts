import { PrismaClient } from "@prisma/client";
import { prisma } from "libs/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export type Context = {
  prisma: PrismaClient;
};

console.log("💫 initializing context");
export async function context(
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<Context> {
  return {
    prisma,
  };
}
