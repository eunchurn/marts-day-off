import { objectType } from "nexus";
import { DayOffRule } from "nexus-prisma";

export const dayOffRule = objectType({
  name: DayOffRule.$name,
  description: DayOffRule.$description,
  definition(t) {
    t.nonNull.id("id", DayOffRule.id);
    t.nonNull.field("dayRule", DayOffRule.dayRule);
    t.nonNull.field("weekRule", DayOffRule.weekRule);
    t.nullable.list.nullable.field("Mart", DayOffRule.Mart);
    t.nullable.list.nullable.string("martId", DayOffRule.martId);
  },
});
