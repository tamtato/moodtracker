import { moodSelectionList } from "./constants";

export const getMoodNameIcon = (mood: string) => {
  return moodSelectionList.find((item) => item.name === mood);
};
