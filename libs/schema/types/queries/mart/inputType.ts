import { inputObjectType } from "nexus";

export const MartWhereUniqueInput = inputObjectType({
  name: "MartWhereUniqueInput",
  definition(t) {
    t.id("id");
  },
});
