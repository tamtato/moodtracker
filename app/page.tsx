"use client";
import MoodLogCard from "@/components/MoodLogCard";
import WeekChangerBar from "@/components/WeekChangerBar";
import WeekDaysCard from "@/components/WeekDaysCard";
import { getUserMoods } from "@/store/user/moods";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    getUserMoods();
  }, []);

  return (
    <main>
      <WeekChangerBar />
      <WeekDaysCard />
      <MoodLogCard />
    </main>
  );
}
