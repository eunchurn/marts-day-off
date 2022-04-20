import { queryType, arg, nullable, intArg } from "nexus";
import { Mart } from "nexus-prisma";
import { MartWhereInput, MartOrderByInput } from "./inputTypes";

export const query = queryType({
  definition(t) {
    t.list.field("marts", {
      type: Mart.$name,
      args: {
        where: arg({ type: MartWhereInput }),
        take: nullable(intArg()),
        skip: nullable(intArg()),
        orderBy: arg({ type: MartOrderByInput }),
      },
      async resolve(_, { where, take, skip, orderBy }, { prisma }) {
        const marts = await prisma.mart.findMany({
          where,
          take,
          skip,
          orderBy,
        });
        return marts;
      },
    });
  },
});
