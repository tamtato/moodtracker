import { getWeekNumberDates } from "@/helpers/dates";
import { makeVar } from "@apollo/client";
import { formatDate, getWeek } from "date-fns";
const now: Date = new Date();

// Get the current week number
const currentWeekNumber: number = getWeek(now);

export const weekNumberVar = makeVar<number>(currentWeekNumber);
export const weekDatesVar = makeVar<Date[]>(getWeekNumberDates());
