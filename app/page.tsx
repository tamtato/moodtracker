"use client";
import MoodLog from "@/components/MoodLog";
import WeekChangerBar from "@/components/WeekChangerBar";
import WeekDaysBar from "@/components/WeekDaysBar";
import { getUserMoods } from "@/store/user/moods";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    getUserMoods();
  }, []);

  return (
    <main>
      <WeekChangerBar />
      <WeekDaysBar />
      <MoodLog />
    </main>
  );
}
