import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { startOfWeek, endOfWeek, format } from "date-fns";

const WeekChangerBar = () => {
  //TODO ADD CHANGE WEEK FUNCTIONALITY
  //currentWeekNumber
  //SET CURRENT WEEK VAR NUMBER - ON LEFT CHEVRON CLICK GET PREVIOUS WEEK NUMBER START AND END DATE
  //SET USER MOODS VAR TO DISPLAY ONLY MOODS FROM CURRENT WEEK
  const now: Date = new Date();
  const start: Date = startOfWeek(now, { weekStartsOn: 1 });
  const end: Date = endOfWeek(now, { weekStartsOn: 1 });

  return (
    <div className="w-full flex ">
      <FontAwesomeIcon icon={faChevronLeft} className="opacity-20" />
      <div className="grow text-center text-primary-text opacity-70">
        {format(start, "do MMMM yyyy")} - {format(end, "do MMMM yyyy")}
      </div>
      <FontAwesomeIcon icon={faChevronRight} className="opacity-20" />
    </div>
  );
};
export default WeekChangerBar;
