import { enumType } from "nexus";
import { MartBrand, Day, WeekNumber } from "nexus-prisma";

export const martBrand = enumType(MartBrand);
export const day = enumType(Day);
export const weekNumber = enumType(WeekNumber);
