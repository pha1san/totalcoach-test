import dayjs from "dayjs";

const dataFormat = "DD MMM YYYY hh:mm A";

export const formatDateStartEnd = (startTime: string, startEnd: string) => {
  return `${dayjs(startTime).format(dataFormat)} - ${dayjs(startEnd).format(dataFormat)}`;
};
