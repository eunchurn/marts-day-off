import { objectType } from "nexus";
import { Mart } from "nexus-prisma";

export const mart = objectType({
  name: Mart.$name,
  description: Mart.$description,
  definition(t) {
    t.nonNull.id("id", Mart.id);
    t.nonNull.field("brand", Mart.brand);
    t.nonNull.string("name", Mart.name);
    t.nonNull.string("tel", Mart.tel);
    t.nonNull.string("address", Mart.address);
    t.nullable.field("openTime", Mart.openTime);
    t.nullable.field("closeTime", Mart.closeTime);
    t.nullable.field("dayOffRule", Mart.dayOffRule);
    t.nullable.string("dayOffRuleId", Mart.dayOffRuleId);
    t.nullable.field("measuredDayOff", Mart.measuredDayOff);
    t.nullable.string("measuredDayOffId", Mart.measuredDayOffId);
    t.nonNull.field("geolocation", Mart.geolocation);
    t.nonNull.string("geolocationId", Mart.geoLocationId);
  },
});
