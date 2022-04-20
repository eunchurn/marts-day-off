import { queryField, arg, intArg, nullable } from "nexus";
import { Mart } from "nexus-prisma";
import { MartWhereInput, MartOrderByInput } from "./inputType";

export const queryMarts = queryField("marts", {
  type: Mart.$name,
  // list: true,
  args: {
    where: arg({ type: MartWhereInput }),
    take: nullable(intArg()),
    skip: nullable(intArg()),
    orderBy: arg({ type: MartOrderByInput }),
  },
  async resolve(_, { where, take, skip, orderBy }, { prisma }) {
    const marts = await prisma.mart.findMany({ where, take, skip, orderBy });
    return marts;
  },
});
