import puppeteer from "puppeteer";
import { createWorker } from "tesseract.js";
import moment, { Moment } from "moment";
import { days, nthDayOfMonth } from "./nthDayOfMonth";
import {
  findCostcoStore,
  findHomplusStore,
  findEmartDayOff,
  prisma,
} from "../../libs";
import { emartAllStoresUpdate, emartDayOffProcess } from "../";

async function main() {
  try {
    // await emartAllStoresUpdate(prisma);
    await emartDayOffProcess(prisma);
    prisma.$disconnect();
  } catch {
    prisma.$disconnect();
  }
}

main();

// console.log({
//   firstSaturdayThisMonth: nthDayOfMonth(moment(), days.Sat, 1),
//   firstSundayThisMonth: nthDayOfMonth(moment(), days.Sun, 1),
//   firstMondayThisMonth: nthDayOfMonth(moment(), days.Mon, 1),
//   firstTuesdayThisMonth: nthDayOfMonth(moment(), days.Tue, 1),
//   firstWednesdayThisMonth: nthDayOfMonth(moment(), days.Wed, 1),
//   firstThursdayThisMonth: nthDayOfMonth(moment(), days.Thu, 1),
//   firstFridayThisMonth: nthDayOfMonth(moment(), days.Fri, 1),
//   secondSaturdayThisMonth: nthDayOfMonth(moment(), days.Sat, 2),
//   secondSundayThisMonth: nthDayOfMonth(moment(), days.Sun, 2),
//   secondMondayThisMonth: nthDayOfMonth(moment(), days.Mon, 2),
//   secondTuesdayThisMonth: nthDayOfMonth(moment(), days.Tue, 2),
//   secondWednesdayThisMonth: nthDayOfMonth(moment(), days.Wed, 2),
//   secondThursdayThisMonth: nthDayOfMonth(moment(), days.Thu, 2),
//   secondFridayThisMonth: nthDayOfMonth(moment(), days.Fri, 2),
//   secondTuedayMarch2020: nthDayOfMonth(moment("2020-03-15"), days.Tue, 2),
//   thirdFridayDecember1986: nthDayOfMonth(moment("1986-12-04"), days.Fri, 3),
//   fourthSundayThisMonth: nthDayOfMonth(moment(), days.Sun, 4),
// });
// findCostcoStore();
// findHomplusStore();

// findEmartDayOff();

// const worker = createWorker();

// async function main() {
//   const browser = await puppeteer.launch({ headless: true });
//   const page = await browser.newPage();
//   await page.setCacheEnabled(false);
//   await page.setUserAgent(
//     "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
//   );
//   const costcoBaseUrl = "https://www.costco.co.kr";
//   await page.goto(`${costcoBaseUrl}/closedSchedule`);
//   const imgUrl = await page.$eval(
//     "#globalMessages > .yCmsComponent > .content > .content > .wrapper > img",
//     (el) => el.getAttribute("src")
//   );
//   console.log(imgUrl);
//   await browser.close();
//   await worker.load();
//   await worker.loadLanguage("kor");
//   await worker.initialize("kor");
//   const {
//     data: { text },
//   } = await worker.recognize(`${costcoBaseUrl}${imgUrl}`);
//   console.log(text.replace(/\s/g, ""));
//   await worker.terminate();
// }

// main();
