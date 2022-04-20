import { inputObjectType, enumType } from "nexus";

export const MartWhereUniqueInput = inputObjectType({
  name: "MartWhereUniqueInput",
  definition(t) {
    t.id("id");
  },
});

export const MartWhereInput = inputObjectType({
  name: "MartWhereInput",
  definition(t) {
    t.id("id");
    t.field("name", { type: StringFilter });
    t.field("brand", { type: "MartBrand" });
    t.field("address", { type: StringFilter });
  },
});

export const MartOrderByInput = inputObjectType({
  name: "MartOrderByInput",
  definition(t) {
    t.field("name", {
      type: SortOrder,
    });
  },
});

const SortOrder = enumType({
  name: "SortOrder",
  members: ["asc", "desc"],
});
export const StringFilter = inputObjectType({
  name: "StringFilter",
  definition(t) {
    t.string("contains");
    t.string("endsWith");
    t.string("equals");
    t.string("gt");
    t.string("gte");
    t.list.nonNull.string("in");
    t.string("lt");
    t.string("lte");
    t.list.nonNull.string("notIn");
    t.string("startsWith");
  },
});
