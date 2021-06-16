import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advancedFormat);

class DateHelper {
  static toLocalTimezone = (d) =>
    dayjs(d).isValid()
      ? dayjs(d).tz(dayjs.tz.guess()).format("DD/MM/YYYY HH:mm")
      : null;

  static localDateRange = (s, e) => {
    const localStart = DateHelper.toLocalTimezone(s);
    const localEnd = DateHelper.toLocalTimezone(e);

    return `${localStart} ${
      localEnd ? `– ${localEnd} ${dayjs(e).format("z")}` : dayjs(s).format("z")
    }`;
  };
}

export default DateHelper;
