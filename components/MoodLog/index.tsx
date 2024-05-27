import { selectedDayVar, userMoodsVar } from "@/store/user/moods";
import { Mood } from "@/types/user-types";
import { useReactiveVar } from "@apollo/client";
import { formatDate } from "date-fns";
import MoodForm from "./MoodForm";

const MoodLog = () => {
  const selectedDay: Mood | null = useReactiveVar(selectedDayVar);

  return (
    <div className="w-full bg-gray-100 rounded-lg p-6 my-6">
      <div className="flex">
        <p className="flex-1 text-primary-text opacity-60 text-sm">
          {selectedDay && formatDate(selectedDay.date, "do MMMM yyyy")}
        </p>
      </div>
      {selectedDay &&
        (selectedDay.mood ? (
          <div>mood</div>
        ) : (
          <MoodForm selectedDay={selectedDay} />
        ))}
    </div>
  );
};
export default MoodLog;
