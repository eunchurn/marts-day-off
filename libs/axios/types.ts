export interface CostcoStoreData {
  success: boolean;
  message: string;
  pagePrefixTireSearch: string;
  total: number;
  data: {
    displayName: string;
    warehostCode: string;
    name: string;
    url: string;
    phone: string;
    formattedDistance: string;
    addressId: string;
    line1: string;
    line2: string;
    town: string;
    postalCode: string;
    email: string;
    latitude: string;
    longitude: string;
    storeContent: string;
    openings: CostcoOpenings;
    features: string[];
    image: string;
  }[];
}

interface CostcoOpenings {
  일: CostcoOpeningsIndividual;
  월: CostcoOpeningsIndividual;
  화: CostcoOpeningsIndividual;
  수: CostcoOpeningsIndividual;
  목: CostcoOpeningsIndividual;
  금: CostcoOpeningsIndividual;
  토: CostcoOpeningsIndividual;
}

interface CostcoOpeningsIndividual {
  individual: string;
}

// 'param', 'dateListMinus', 'dateListPlus', 'dateList'

export interface EmartStoreDayOffList {
  param: EmartStoresParam;
  dateListMinus: number;
  dateListPlus: number;
  dateList: EmartStoreDayOffData[];
}

export interface EmartStoreList {
  dataList: EmartStoreData[];
}

interface EmartStoresParam {
  yearPlus: string;
  yearMinus: string;
  month: string;
  year: string;
  areaCd: string | null;
  chkArea: string;
  monthMinus: string;
  keyword: string | null;
  monthPlus: string;
}

interface EmartStoreData {
  CULTURE_TEL: string;
  HOLIDAY_DAY2: string;
  HOLIDAY_DAY1: string;
  HOLIDAY_DAY3: string;
  AREA_CODE: string;
  RENEWAL_YN: string;
  STORE_E_YN: string;
  MODIFY_DATE: string;
  ELECTRIC_YN: string;
  STORE_M_YN: string;
  STORE_FD_YN: string;
  ID: string;
  SPEC: string;
  HOLIDAY_DAY1_YYYYMMDD: string;
  STORE_DL_YN: string;
  HOLIDAY_DAY3_DAY: string;
  FLOOR_START: string;
  HOLIDAY_DAY2_DAY: string;
  NAME: string;
  MODIFY_ADMIN_ID: string;
  HOLIDAY_DAY3_YYYYMMDD: string;
  COM_CODE: string;
  STORE_SHOPPING_TIME: string;
  STORE_TK_YN: string;
  PARKING_COUNT: string;
  OIL_YN: string;
  DISPLAY_YN: string;
  STORE_SS_YN: string;
  BOOKMARK_YN: string;
  STORE_TP: string;
  STORE_L_YN: string;
  HOLIDAY_DAY1_DAY: string;
  STORE_P_YN: string;
  START_DAY: string;
  STORE_SC_YN: string;
  STORE_BC_YN: string;
  REGIST_ADMIN_ID: string;
  MAP_INFO: string;
  REGIST_DATE: string;
  HOLIDAY_DAY2_YYYYMMDD: string;
  MAP_Y: string;
  MAP_X: string;
  STORE_DC_YN: string;
  CLOSE_SHOPPING_TIME: string;
  STORE_BT_YN: string;
  ADDRESS1: string;
  OPEN_SHOPPING_TIME: string;
  ADDRESS3: string;
  ADDRESS2: string;
  JIJUM_STATUS: string;
  INTRO: string;
  STORE_MC_YN: string;
  ZIPCODE: string;
  STORE_PK_YN: string;
  START_MONTH: string;
  CULTURE_ID: string;
  START_YEAR: string;
  RNUM: string;
  FLOOR_END: string;
  STORE_N_YN: string;
  TEL: string;
}

/**
 * @typedef {EmartStoreDayOffData} 
 * EmartStoreData is a type that has properties JIJUM_ID, HOLIDAY_DAY1_YOIL, HOLIDAY_DAY2,
HOLIDAY_DAY1, HOLIDAY_YEAR, HOLIDAY_DAY3, HOLIDAY_DAY2_YOIL, HOLIDAY_DAY1_YMD, NAME,
HOLIDAY_DAY3_YMD, CODE, AREA, TEL, HOLIDAY_MONTH, HOLIDAY_DAY2_YMD.
```
{
  JIJUM_ID: '4016',
  HOLIDAY_DAY1_YOIL: '(화)',
  HOLIDAY_DAY2: '23',
  HOLIDAY_DAY1: '01',
  HOLIDAY_YEAR: '2022',
  HOLIDAY_DAY3: '',
  HOLIDAY_DAY2_YOIL: '(수)',
  HOLIDAY_DAY1_YMD: '20220201',
  NAME: '노브랜드 남양주진접점',
  HOLIDAY_DAY3_YMD: '202202',
  CODE: 'I',
  AREA: '경기',
  TEL: '',
  HOLIDAY_MONTH: '02',
  HOLIDAY_DAY2_YMD: '20220223'
}
```
*/
interface EmartStoreDayOffData {
  /**
   * JISUM_ID: string
   */
  JIJUM_ID: string;
  HOLIDAY_DAY1_YOIL: string;
  HOLIDAY_DAY2: string;
  HOLIDAY_DAY1: string;
  HOLIDAY_YEAR: string;
  HOLIDAY_DAY3: string;
  HOLIDAY_DAY2_YOIL: string;
  HOLIDAY_DAY1_YMD: string;
  NAME: string;
  HOLIDAY_DAY3_YMD: string;
  CODE: string;
  AREA: string;
  TEL: string;
  HOLIDAY_MONTH: string;
  HOLIDAY_DAY2_YMD: string;
}

export enum LotteMartSidoCode {
  서울 = "BC0101",
  인천 = "BC0102",
  경기 = "BC0103",
  강원 = "BC0104",
  대전 = "BC0106",
  충북 = "BC0107",
  충남 = "BC0105",
  대구 = "BC0109",
  경북 = "BC0108",
  경남 = "BC0113",
  울산 = "BC0114",
  부산 = "BC0115",
  광주 = "BC0111",
  전북 = "BC0110",
  전남 = "BC0112",
  제주 = "BC0116",
}
