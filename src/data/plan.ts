import type { DayPlan } from "../types";

const WEEKDAYS = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

const TITLES = [
  "Activación y Despertar del Glúteo",
  "Hipertrofia y Volumen Lateral",
  "Glúteo Máximo y Posterior Profundo",
  "Fuerza y Estabilidad de Cadera",
  "Volumen Total + Core",
  "Movilidad y Activación Ligera",
  "Descanso Activo",
];

const EXERCISES = [
  "Puente de Glúteo en el Suelo",
  "Abducción de Cadera Acostada",
  "Patada de Glúteo (Donkey Kick)",
  "Puente Frog Pump (Planta con Planta)",
  "Sentadilla Sumo con Peso Corporal",
  "Zancada Inversa",
  "Elevación de Cadera a Una Pierna",
  "Caminata con Banda Elástica",
];

export function buildPlan(): DayPlan[] {
  const days: DayPlan[] = [];
  for (let i = 0; i < 28; i++) {
    const day = i + 1;
    const week = Math.floor(i / 7) + 1;
    const weekday = WEEKDAYS[i % 7];
    const title = TITLES[i % TITLES.length];
    const intensity = i % 3 === 0 ? "Media" : i % 3 === 1 ? "Alta" : "Baja";
    const kcal = 90 + ((i * 7) % 60);
    const exercises = EXERCISES.slice(i % 4, (i % 4) + 4).map((name) => ({
      name,
    }));
    days.push({
      day,
      week,
      weekday,
      title,
      intensity,
      kcal,
      exercises,
      locked: day !== 1,
    });
  }
  return days;
}
