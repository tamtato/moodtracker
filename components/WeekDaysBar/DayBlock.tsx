import { moodSelectionList } from "@/helpers/constants";
import { faFaceMehBlank } from "@fortawesome/free-regular-svg-icons";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDate } from "date-fns";

type DayBlockProps = {
  dayName: string;
  mood: string | null | undefined;
  isSelectedDay: boolean | null;
};

const DayBlock = ({ dayName, mood, isSelectedDay }: DayBlockProps) => {
  const isCurrentDay = formatDate(new Date(), "eee") === dayName;
  const moodIcon = moodSelectionList.find((item) => item.name === mood)?.icon;
  return (
    <div className="grow flex flex-col items-center text-primary-text">
      <h5
        className={`${
          isSelectedDay && isCurrentDay
            ? "text-green-text"
            : isSelectedDay
            ? "text-blue-text"
            : "opacity-20"
        }`}
      >
        {dayName}
      </h5>
      <div className="mt-2">
        {mood ? (
          <button className="cursor-pointer">
            <FontAwesomeIcon icon={moodIcon || faFaceMehBlank} size="2x" />
          </button>
        ) : (
          <button
            className={`w-[40px] h-[40px] bg-gray-200 border-gray-300 
            outline-dashed outline rounded-full flex items-center justify-center ${
              isCurrentDay
                ? "border-green-text outline-green-text text-green-text cursor-pointer"
                : "opacity-20 cursor-default pointer-events-none"
            }`}
          >
            {isCurrentDay && <FontAwesomeIcon icon={faAdd} size="xl" />}
          </button>
        )}
      </div>
    </div>
  );
};
export default DayBlock;
