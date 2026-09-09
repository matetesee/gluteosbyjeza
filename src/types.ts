export type Language = "es" | "en" | "pt";

export type Goal = "volumen" | "definir" | "grasa" | "postura";

export type Level = "principiante" | "intermedia" | "avanzada";

export type Frequency = 3 | 4 | 5;

export interface OnboardingData {
  language: Language;
  name: string;
  email: string;
  goal: Goal | null;
  level: Level | null;
  frequency: Frequency;
}

export const initialOnboardingData: OnboardingData = {
  language: "es",
  name: "",
  email: "",
  goal: null,
  level: null,
  frequency: 4,
};

export interface Exercise {
  name: string;
}

export interface DayPlan {
  day: number;
  week: number;
  weekday: string;
  title: string;
  intensity: "Baja" | "Media" | "Alta";
  kcal: number;
  exercises: Exercise[];
  locked: boolean;
}
