import { Mood } from "@/types/user-types";
import { makeVar } from "@apollo/client";

export const userMoodsVar = makeVar<Mood[]>([]);

//Typically, on app load we would look for some auth token in cookies
//If the token is not present, we would redirect the user to the login page
//If the token is present, we would fetch the user data and pass the token to the endpoint

export const getUserMoods = () => {
  // const res = await fetch(`https://api.example.com/user-data`);
  // return res.json();
  if (typeof window !== "undefined") {
    const storedMoodData = localStorage.getItem("userMoods");
    if (storedMoodData) {
      const moodData: Mood[] = JSON.parse(storedMoodData);
      userMoodsVar(moodData);
    } else {
      localStorage.setItem("userMoods", JSON.stringify([]));
    }
  }
};

export const updateUserMoods = (mood: Mood) => {
  // const res = await fetch(`https://api.example.com/user-data`);
  // return res.json();
};
