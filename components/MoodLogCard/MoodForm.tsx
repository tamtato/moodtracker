import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mood } from "@/types/user-types";
import { updateUserMoods } from "@/store/user/moods";
import { moodSelectionList } from "@/helpers/constants";

interface MoodFormProps {
  selectedDay: Mood;
}

const MoodForm = ({ selectedDay }: MoodFormProps) => {
  const [mood, setMood] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  const handleLogMood = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(selectedDay);
    const updatedMood = {
      ...selectedDay,
      mood,
      comment,
    };
    updateUserMoods(updatedMood);
  };

  return (
    <form onSubmit={handleLogMood}>
      <div className="flex">
        <div className="flex flex-col gap-2">
          {moodSelectionList.map((moodItem) => (
            <label
              key={moodItem.name}
              className={`${
                mood === moodItem.name
                  ? "text-blue-text"
                  : "text-primary-text opacity-80"
              } cursor-pointer`}
            >
              <input
                type="radio"
                name="mood"
                value={moodItem.name}
                checked={mood === moodItem.name}
                onChange={(e) => setMood(e.target.value)}
                className="hidden cursor-pointer"
              />
              <FontAwesomeIcon icon={moodItem.icon} size="2xl" />
              <span className="capitalize pl-2">{moodItem.name}</span>
            </label>
          ))}
        </div>
        <textarea
          style={{ resize: "none" }}
          className="rounded-md p-2 font-light"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-primary rounded-lg text-white p-2 bg-blue-text w-full mt-6"
      >
        Log Mood
      </button>
    </form>
  );
};
export default MoodForm;
