export interface Weather {
  conditions: string;
  temperature: string;
}

export interface Mood {
  mood: string;
  date: string;
  comment: string;
  weather: Weather;
}
