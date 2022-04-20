import { objectType } from "nexus";
import { MeasuredDayOff } from "nexus-prisma";

export const measuredDayOff = objectType({
  name: MeasuredDayOff.$name,
  description: MeasuredDayOff.$description,
  definition(t) {
    t.nonNull.id("id", MeasuredDayOff.id);
    t.nonNull.int("targetMonth", MeasuredDayOff.targetMonth);
    t.list.nullable.field("targetDay", MeasuredDayOff.targetDay);
    t.list.nullable.field("Mart", MeasuredDayOff.Mart);
  },
});
