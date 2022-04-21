import { Moment } from "moment";
/**
 * given a month moment, a day of the week, and a week number, return the date of the nth day of the
 * month.
 * @param {Moment} monthMoment - The moment object for the month.
 * @param {number} day - the day of the week (0-6)
 * @param {number} weekNumber - The week number of the month.
 * @returns The moment object representing the first day of the month.
 */
export function nthDayOfMonth(
  monthMoment: Moment,
  day: number,
  weekNumber: number,
) {
  const m = monthMoment.clone().startOf("month").day(day);
  if (m.month() !== monthMoment.month()) m.add(7, "d");
  return m.add(7 * (weekNumber - 1), "d");
}

export const days = {
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
  Sun: 7,
};
