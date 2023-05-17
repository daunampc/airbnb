"use client";

import { ICalendarProps } from "@/types/input";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
const Calendar: React.FC<ICalendarProps> = ({
  onChange,
  value,
  disabledDates,
}) => {
  return (
    <DateRange
      rangeColors={["#262626"]}
      ranges={[value]}
      date={new Date()}
      direction="vertical"
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={disabledDates}
      onChange={onChange}
    />
  );
};
export default Calendar;
