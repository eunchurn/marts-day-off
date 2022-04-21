import axios from "axios";
import { getRandom } from "random-useragent";
import { CostcoStoreData, EmartStoreList, EmartStoreDayOffList } from "./types";

class AxiosInstance {
  costcoBaseUrl = "https://www.costco.co.kr";
  costcoClient = axios.create({
    baseURL: this.costcoBaseUrl,
    headers: { "user-agent": getRandom() },
  });
  emartBaseUrl = "https://store.emart.com";
  emartDayOffUrl = "/branch/holidayList.do";
  emartAllStores = "/branch/searchList.do";
  emartClient = axios.create({
    baseURL: this.emartBaseUrl,
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "user-agent": getRandom(),
    },
  });
  async fetchEmartAllStores() {
    const form = new URLSearchParams({
      srchMode: "jijum",
      areaId: "",
      sHanSort: "",
      eHanSort: "",
      year: "2022",
      month: "01",
      jMode: "true",
      strConfirmYN: "N",
      strName: "이마트 경산점",
      strName1: "이마트 성서점",
      strName2: "이마트 월배점",
      keyword: "",
      searchType: "",
      searchOption: "",
    });
    const data = await this.emartClient.post<EmartStoreList>(
      this.emartAllStores,
      form,
    );
    return data;
  }
  async fetchEmartDayOffData() {
    const form = new URLSearchParams({
      // areaCd: "A",
      year: "2022",
      month: "02",
    });
    const data = await this.emartClient.post<EmartStoreDayOffList>(
      this.emartDayOffUrl,
      form,
    );
    return data;
  }
  async fetchCostcoStores() {
    const data = await this.costcoClient.get<CostcoStoreData>(
      "/store-finder/search",
      {
        params: {
          q: "Korea%2C+Republic+of",
          page: 0,
        },
      },
    );
    return data;
  }
}

export const axiosInstance = new AxiosInstance();
