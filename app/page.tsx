"use client";
import WeekSelectionBar from "@/components/WeekSelectionBar";
import { getUserMoods, userMoodsVar } from "@/store/user/moods";
import { Mood } from "@/types/user-types";
import { useReactiveVar } from "@apollo/client";
import { useEffect } from "react";

export default function Home() {
  const userMoods = useReactiveVar(userMoodsVar);

  useEffect(() => {
    getUserMoods();
  }, []);

  console.log(userMoods);

  return (
    <main>
      <WeekSelectionBar />
    </main>
  );
}
