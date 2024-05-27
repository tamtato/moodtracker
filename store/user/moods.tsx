import { getWeekNumberDates } from "@/helpers/dates";
import { Mood } from "@/types/user-types";
import { makeVar } from "@apollo/client";
import { formatDate, isSameDay } from "date-fns";
import { is } from "date-fns/locale";

export const userMoodsVar = makeVar<Mood[]>([]);
export const selectedDayVar = makeVar<Mood | null>(null);
//Typically, on app load we would look for some auth token in cookies
//If the token is not present, we would redirect the user to the login page
//If the token is present, we would fetch the user data and pass the token to the endpoint

export const getUserMoods = async () => {
  if (typeof window !== "undefined") {
    let moodData: Mood[] = [];
    const storedMoodData = localStorage.getItem("userMoods");
    if (storedMoodData) {
      moodData = JSON.parse(storedMoodData);
    }
    // Check if the current day is in the local storage
    const today = new Date();
    const todaysMood = moodData.find((mood: Mood) =>
      isSameDay(new Date(mood.date), today)
    );
    // If the current day is not in the local storage, rebuild the local storage
    if (!todaysMood) {
      const adjustedWeekDates = getWeekNumberDates().map((date) => {
        const timezoneOffset = date.getTimezoneOffset() * 60 * 1000;
        return new Date(date.getTime() - timezoneOffset);
      });
      const initialMoodData: Mood[] = adjustedWeekDates.map((date) => ({
        mood: null,
        date,
        comment: null,
        weather: null,
      }));
      localStorage.setItem("userMoods", JSON.stringify(initialMoodData));
      moodData = initialMoodData;
    }
    userMoodsVar(moodData);
    // Set the selected day to today on app load
    if (!selectedDayVar()) {
      selectedDayVar(todaysMood || undefined);
    }
  }
};

export const updateUserMoods = (mood: Mood) => {
  // const res = await fetch(`https://api.example.com/user-data`);
  // return res.json();
  if (typeof window !== "undefined") {
    const storedMoodData = localStorage.getItem("userMoods");
    if (storedMoodData) {
      const userMoods = JSON.parse(storedMoodData) as Mood[];
      const updatedUserMoods = userMoods.map((m) =>
        m.date === mood.date ? mood : m
      );
      localStorage.setItem("userMoods", JSON.stringify(updatedUserMoods));
      userMoodsVar(updatedUserMoods);
      selectedDayVar(mood);
    }
  }
};
