import {
  addWeeks,
  eachDayOfInterval,
  endOfWeek,
  getWeek,
  startOfWeek,
  startOfYear,
} from "date-fns";

export const getWeekNumberDates = (
  weekNumber: number = getWeek(new Date(), { weekStartsOn: 1 })
) => {
  const now = new Date();
  const startOfYearDate = startOfYear(now);
  const startOfWeekNumber = startOfWeek(
    addWeeks(startOfYearDate, weekNumber - 1),
    {
      weekStartsOn: 1,
    }
  );
  const endOfWeekNumber = endOfWeek(addWeeks(startOfYearDate, weekNumber - 1), {
    weekStartsOn: 1,
  });
  const weekDates = eachDayOfInterval({
    start: startOfWeekNumber,
    end: endOfWeekNumber,
  });

  return weekDates;
};
