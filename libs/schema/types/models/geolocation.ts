import { objectType } from "nexus";
import { GeoLocation } from "nexus-prisma";

export const geolocation = objectType({
  name: GeoLocation.$name,
  description: GeoLocation.$description,
  definition(t) {
    t.nonNull.id("id", GeoLocation.id);
    t.nonNull.float("latitude", GeoLocation.latitude);
    t.nonNull.float("longitude", GeoLocation.longitude);
    t.nullable.list.nullable.field("Mart", GeoLocation.Mart);
  },
});
