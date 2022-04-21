import { axiosInstance } from "../axios";
// import puppeteer from "puppeteer";

// const costcoBaseUrl = "https://www.costco.co.kr";
// const storeListUrl =
//   "/store-finder?itm_source=homepage&itm_medium=topheader&itm_campaign=Storefinder&itm_term=Storefinder&itm_content=InternalSystemStorefinder";

// export async function findCostcoStore() {
//   const browser = await puppeteer.launch({ headless: true });
//   const page = await browser.newPage();
//   await page.setCacheEnabled(false);
//   await page.setUserAgent(
//     "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
//   );
//   await page.goto(`${costcoBaseUrl}${storeListUrl}`);
//   const storeList = await page.$eval(
//     ".store-finder-navigation",
//     (el) => el.innerHTML
//   );
//   console.log(storeList);
//   await browser.close();
// }
export async function findCostcoStore() {
  const data = await axiosInstance.fetchCostcoStores();
  console.log(data.data.data[1]);
  // console.log(data.data.data[0].features);
  return data;
}
