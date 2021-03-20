import moment from "moment";

export const dateFormat = "DD-MM-YYYY HH:mm:ss";

export function isToday(date: string | undefined) {
  if (date) return moment(date, dateFormat).isSame(today(), "d");
  return false;
}

export function today() {
  return moment().format(dateFormat);
}
