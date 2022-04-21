import { PrismaClient, Mart, MartBrand } from "@prisma/client";
import moment from "moment";
import { findEmartDayOff } from "../libs";

export async function emartDayOffProcess(prisma: PrismaClient) {
  const storeList = await findEmartDayOff();
  console.log("== fetch all stores EMART");
  const multiUpsertStore = storeList.map((store) => {
    const { NAME, TEL, HOLIDAY_MONTH, HOLIDAY_DAY1_YMD, HOLIDAY_DAY2_YMD } =
      store;
    const upsertedStore = prisma.mart.update({
      where: {
        unique_brand_with_storeName: { brand: MartBrand.E_MART, name: NAME },
      },
      data: {
        measuredDayOff: {
          create: {
            targetMonth: parseInt(HOLIDAY_MONTH),
            targetDay: [
              moment(HOLIDAY_DAY1_YMD, "YYYYMMDD").toDate(),
              moment(HOLIDAY_DAY2_YMD, "YYYYMMDD").toDate(),
            ],
          },
        },
      },
      // create: {
      //   brand: MartBrand.E_MART,
      //   name: NAME,
      //   tel: TEL,
      //   address: "",
      //   geolocation: {
      //     create: { latitude: 23.12323, longitude: 127.12312, altitude: 10 },
      //   },
      //   dayOffRule: {
      //     connectOrCreate: {
      //       where: {
      //         dayRuleWithWeekRule: { dayRule: "Sunday", weekRule: "Second" },
      //       },
      //       create: {
      //         dayRule: "Sunday",
      //         weekRule: "Second",
      //       },
      //     },
      //   },
      //   measuredDayOff: {
      //     create: {
      //       targetMonth: parseInt(HOLIDAY_MONTH),
      //       targetDay: [
      //         moment(HOLIDAY_DAY1_YMD, "YYYYMMDD").toDate(),
      //         moment(HOLIDAY_DAY2_YMD, "YYYYMMDD").toDate(),
      //       ],
      //     },
      //   },
      // },
    });
    return upsertedStore;
  });
  console.log("== transaction started");
  console.time("transaction");
  const result = await Promise.all(multiUpsertStore);
  console.timeEnd("transaction");
  console.log("== done");
  return result;
}
