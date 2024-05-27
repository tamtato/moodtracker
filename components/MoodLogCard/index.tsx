import { selectedDayVar, userMoodsVar } from "@/store/user/moods";
import { Mood } from "@/types/user-types";
import { useReactiveVar } from "@apollo/client";
import { formatDate } from "date-fns";
import MoodForm from "./MoodForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getMoodNameIcon } from "@/helpers/moods";
import { faFaceMehBlank } from "@fortawesome/free-regular-svg-icons";

const MoodLogCard = () => {
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
          <div className="flex gap-2 items-center mt-4">
            <FontAwesomeIcon
              icon={getMoodNameIcon(selectedDay.mood)?.icon || faFaceMehBlank}
              size="2x"
            />
            <p>{selectedDay.mood}</p>
          </div>
        ) : (
          <MoodForm selectedDay={selectedDay} />
        ))}
    </div>
  );
};
export default MoodLogCard;
