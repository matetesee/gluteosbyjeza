import type { DayPlan, Language } from "../types";
import { getDictionary } from "../i18n";

export function buildPlan(lang: Language): DayPlan[] {
  const t = getDictionary(lang);
  const weekdays = t.entrenar.weekdays;
  // Capitalized weekday for schedule display (dictionary stores lowercase for date-line usage)
  const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  const titles = t.plan.titles;
  const exercises = t.plan.exercises;

  const days: DayPlan[] = [];
  for (let i = 0; i < 28; i++) {
    const day = i + 1;
    const week = Math.floor(i / 7) + 1;
    const weekday = cap(weekdays[(i + 1) % 7]); // day 1 = Monday
    const title = titles[i % titles.length];
    const intensity = i % 3 === 0 ? "Media" : i % 3 === 1 ? "Alta" : "Baja";
    const kcal = 90 + ((i * 7) % 60);
    const dayExercises = exercises.slice(i % 4, (i % 4) + 4).map((name) => ({
      name,
    }));
    days.push({
      day,
      week,
      weekday,
      title,
      intensity,
      kcal,
      exercises: dayExercises,
      locked: day !== 1,
    });
  }
  return days;
}
