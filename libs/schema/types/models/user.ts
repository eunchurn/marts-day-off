import { objectType } from "nexus";
import { User } from "nexus-prisma";

export const user = objectType({
  name: User.$name,
  description: User.$description,
  definition(t) {
    t.nonNull.id("id", User.id);
    t.nonNull.string("email", User.email);
    t.nonNull.string("name", User.name);
    // t.nonNull.string("password", User.password);
  },
});
