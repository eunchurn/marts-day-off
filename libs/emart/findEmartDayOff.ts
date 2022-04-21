import { axiosInstance } from "..";

export async function findEmartDayOff() {
  const data = await axiosInstance.fetchEmartDayOffData();
  const {
    data: { dateListMinus, dateListPlus, dateList },
  } = data;
  return dateList;
}

export async function findAllEmartStores() {
  const data = await axiosInstance.fetchEmartAllStores();
  const {
    data: { dataList },
  } = data;
  return dataList;
}
