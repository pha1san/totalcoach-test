import dayjs from "dayjs";

// Define the date format to be used for formatting dates
const dataFormat = "DD MMM YYYY hh:mm A";

/**
 * Function to format the start and end date/time into a readable string.
 * @param {string} startTime - The start time to be formatted.
 * @param {string} startEnd - The end time to be formatted.
 * @returns {string} - A string representing the formatted start and end times.
 */
export const formatDateStartEnd = (startTime: string, startEnd: string) => {
  return `${dayjs(startTime).format(dataFormat)} - ${dayjs(startEnd).format(dataFormat)}`;
};
