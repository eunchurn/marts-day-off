import { queryField, arg, nonNull } from "nexus";
import { Mart } from "nexus-prisma";
import { MartWhereUniqueInput } from "./inputType";

export const queryMart = queryField("mart", {
  type: Mart.$name,
  args: {
    where: arg({ type: nonNull(MartWhereUniqueInput) }),
  },
  async resolve(_, { where }, { prisma }) {
    const mart = await prisma.mart.findUnique({ where });
    return mart;
  },
});
