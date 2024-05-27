import { selectedDayVar, userMoodsVar } from "@/store/user/moods";
import { Mood } from "@/types/user-types";
import { useReactiveVar } from "@apollo/client";
import DayBlock from "./DayBlock";
import { weekDatesVar } from "@/store/weekDates";
import { formatDate } from "date-fns";

const WeekDaysBar = () => {
  const weekDates: Date[] = useReactiveVar(weekDatesVar);
  const userMoods: Mood[] = useReactiveVar(userMoodsVar);
  const selectedDay: Mood | null = useReactiveVar(selectedDayVar);
  console.log(selectedDay);
  return (
    <div className="w-full bg-gray-100 rounded-lg p-6 my-6 flex">
      {weekDates.map((day: Date) => {
        const mood: Mood | undefined = userMoods.find(
          (m) =>
            formatDate(m.date, "yyyy-MM-dd") === formatDate(day, "yyyy-MM-dd")
        );
        return (
          <DayBlock
            key={day.toString()}
            mood={mood?.mood}
            dayName={formatDate(day, "eee")}
            isSelectedDay={
              selectedDay &&
              formatDate(selectedDay.date, "yyyy-MM-dd") ===
                formatDate(day, "yyyy-MM-dd")
            }
          />
        );
      })}
    </div>
  );
};
export default WeekDaysBar;
