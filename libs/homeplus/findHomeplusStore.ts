import puppeteer from "puppeteer";
import { getRandom } from "random-useragent";

const homeplusBaseUrl =
  "https://corporate.homeplus.co.kr/store/hypermarket.aspx";
const storeListUrl = "/store/hypermarket.aspx";

export async function findHomplusStore() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const userAgent = getRandom();
  console.log(`== user agent: ${userAgent}`);
  await page.setCacheEnabled(false);
  await page.setUserAgent(userAgent);
  await page.goto(`${homeplusBaseUrl}${storeListUrl}`);
  await page.click(".input-group > .btn-srch");
  console.log("== clicked search button");
  console.log("== waiting page load");
  const result = await page.waitForNavigation({
    waitUntil: "networkidle2",
  });
  if (result === null) {
    console.log("=== page load failed");
  } else {
    console.log("=== page loaded");
  }
  const list = await page.$$(".result_list > .clearfix");
  const storesList = [];
  for await (const item of list) {
    const storeLinkEl = await item.$(".col-lg-4 > .type > .name > a");
    const storeNameLink = await (async () => {
      if (!storeLinkEl) return { storeName: null, storeLink: null };
      const storeName = (await storeLinkEl.getProperty("textContent"))
        .toString()
        .replace("JSHandle:", "")
        .trim();
      const storeLink = (await storeLinkEl.getProperty("href"))
        .toString()
        .replace("JSHandle:", "")
        .trim();
      return { storeName, storeLink };
    })();
    const storeTimeEL = await item.$(".time > span:first-child");
    const storeTime = storeTimeEL
      ? (await storeTimeEL.getProperty("textContent"))
          .toString()
          .replace("JSHandle:", "")
          .trim()
      : null;
    const storeTelEl = await item.$(".time > em");
    const storeTel = storeTelEl
      ? (await storeTelEl.getProperty("textContent"))
          .toString()
          .replace("JSHandle:", "")
          .trim()
      : null;
    const storeDayOffEl = await item.$(".time > .off");
    const storeDayOff = storeDayOffEl
      ? (await storeDayOffEl.getProperty("textContent"))
          .toString()
          .replace("JSHandle:", "")
          .trim()
      : null;
    storesList.push({ ...storeNameLink, storeTime, storeDayOff, storeTel });
  }
  console.log(storesList);

  // const itemList = await page.$$(
  //   ".result_list > .clearfix > .col-lg-4 > .type > .name"
  // );
  // const storeList = [];
  // for await (const item of itemList) {
  //   const storeName = (await item.getProperty("textContent"))
  //     .toString()
  //     .replace("JSHandle:\n\t\t\t\t\t\t\t", "")
  //     .trim();
  //   const linkEl = await item.$("a");
  //   if (linkEl) {
  //     const link = (await linkEl.getProperty("href"))
  //       .toString()
  //       .replace("JSHandle:", "")
  //       .trim();
  //     storeList.push({ storeName, link });
  //   } else {
  //     storeList.push({ storeName, link: null });
  //   }
  // }
  // console.log(storeList);

  // console.log(await Promise.all(storeList));
  // const storeList = await page.$eval(".result_list", (el) => el);
  // console.log(storeList);
  // el.children[0].getElementsByClassName("name")[0].textContent;
  // console.log(itemList);
  await browser.close();
}
