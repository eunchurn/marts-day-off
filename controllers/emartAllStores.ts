import { PrismaClient, MartBrand, Day, WeekNumber } from "@prisma/client";
import { isEmpty } from "lodash";
import moment from "moment";
import { findAllEmartStores } from "../libs";
export async function emartAllStoresUpdate(prisma: PrismaClient) {
  console.log("== fetching EMART stores");
  const storesList = await findAllEmartStores();
  console.log("== fetching done");
  console.log("== database upsert started");
  for await (const store of storesList) {
    // const storeListPrismaPromises = storesList.map((store) => {
    const {
      NAME,
      TEL,
      MAP_X,
      MAP_Y,
      ADDRESS1,
      OPEN_SHOPPING_TIME,
      CLOSE_SHOPPING_TIME,
      HOLIDAY_DAY1_DAY,
      HOLIDAY_DAY2_DAY,
    } = store;
    console.log(NAME);
    const upsertedStore = await prisma.mart.upsert({
      where: {
        unique_brand_with_storeName: { brand: MartBrand.E_MART, name: NAME },
      },
      update: {
        brand: MartBrand.E_MART,
        name: NAME,
        tel: TEL,
        address: ADDRESS1,
        openTime: moment(OPEN_SHOPPING_TIME, "HH:mm").toDate(),
        closeTime: moment(CLOSE_SHOPPING_TIME, "HH:mm").toDate(),
        geolocation: {
          connectOrCreate: {
            where: {
              unique_lat_lon: {
                latitude: parseFloat(MAP_X),
                longitude: parseFloat(MAP_Y),
              },
            },
            create: {
              latitude: parseFloat(MAP_X),
              longitude: parseFloat(MAP_Y),
              altitude: 0,
            },
          },
        },
        dayOffRule: {
          connectOrCreate: [
            {
              where: {
                dayRuleWithWeekRule: {
                  dayRule: dayParser(HOLIDAY_DAY1_DAY),
                  weekRule: WeekNumber.Second,
                },
              },
              create: {
                dayRule: dayParser(HOLIDAY_DAY1_DAY),
                weekRule: WeekNumber.Second,
              },
            },
            {
              where: {
                dayRuleWithWeekRule: {
                  dayRule: isEmpty(HOLIDAY_DAY2_DAY)
                    ? dayParser(HOLIDAY_DAY1_DAY)
                    : dayParser(HOLIDAY_DAY2_DAY),
                  weekRule: WeekNumber.Fourth,
                },
              },
              create: {
                dayRule: isEmpty(HOLIDAY_DAY2_DAY)
                  ? dayParser(HOLIDAY_DAY1_DAY)
                  : dayParser(HOLIDAY_DAY2_DAY),
                weekRule: WeekNumber.Fourth,
              },
            },
          ],
        },
      },
      create: {
        brand: MartBrand.E_MART,
        name: NAME,
        tel: TEL,
        address: ADDRESS1,
        openTime: moment(OPEN_SHOPPING_TIME, "HH:mm").toDate(),
        closeTime: moment(CLOSE_SHOPPING_TIME, "HH:mm").toDate(),
        geolocation: {
          connectOrCreate: {
            where: {
              unique_lat_lon: {
                latitude: parseFloat(MAP_X),
                longitude: parseFloat(MAP_Y),
              },
            },
            create: {
              latitude: parseFloat(MAP_X),
              longitude: parseFloat(MAP_Y),
              altitude: 0,
            },
          },
        },
        dayOffRule: {
          connectOrCreate: [
            {
              where: {
                dayRuleWithWeekRule: {
                  dayRule: dayParser(HOLIDAY_DAY1_DAY),
                  weekRule: WeekNumber.Second,
                },
              },
              create: {
                dayRule: dayParser(HOLIDAY_DAY1_DAY),
                weekRule: WeekNumber.Second,
              },
            },
            {
              where: {
                dayRuleWithWeekRule: {
                  dayRule: isEmpty(HOLIDAY_DAY2_DAY)
                    ? dayParser(HOLIDAY_DAY1_DAY)
                    : dayParser(HOLIDAY_DAY2_DAY),
                  weekRule: WeekNumber.Fourth,
                },
              },
              create: {
                dayRule: isEmpty(HOLIDAY_DAY2_DAY)
                  ? dayParser(HOLIDAY_DAY1_DAY)
                  : dayParser(HOLIDAY_DAY2_DAY),
                weekRule: WeekNumber.Fourth,
              },
            },
          ],
        },
      },
    });
    await sleep(100);
    // return upsertedStore;
    // });
  }
  // const result = await prisma.$transaction(storeListPrismaPromises);
  console.log("== database upsert done");
  // return result;
}

function dayParser(day: string) {
  switch (day) {
    case "Mon": {
      return Day.Monday;
    }
    case "Tue": {
      return Day.Tuesday;
    }
    case "Wed": {
      return Day.Wednesday;
    }
    case "Thu": {
      return Day.Thursday;
    }
    case "Fri": {
      return Day.Friday;
    }
    case "Sat": {
      return Day.Saturday;
    }
    case "Sun": {
      return Day.Sunday;
    }
    default: {
      return Day.Sunday;
    }
  }
}

/**
 * It returns a promise that resolves after a given number of milliseconds.
 * @param {number} ms - number milliseconds
 * @returns Nothing
 */
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
