import dayjs from "dayjs";

export function formatDate(time?: dayjs.ConfigType, f: string = "YYYY-MM-DD") {
  return dayjs(time).format(f);
}
