export interface Weather {
  conditions: string;
  temperature: string;
}

export interface Mood {
  mood: string | null;
  date: Date;
  comment: string | null;
  weather: Weather | null;
}
