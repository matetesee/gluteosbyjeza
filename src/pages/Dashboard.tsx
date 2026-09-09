import { useMemo, useState } from "react";
import type { OnboardingData } from "../types";
import { buildPlan } from "../data/plan";
import { Card, PrimaryButton } from "../components/ui";

const COACH_MESSAGES = [
  "La disciplina de hoy es el cuerpo firme y definido que verás en el espejo en pocos días.",
  "Cada repetición de hoy es una inversión en la mujer que quieres ver mañana.",
  "No esperes la motivación: empieza el entrenamiento y la motivación llegará con el movimiento.",
  "Tu constancia de hoy vale más que la intensidad de un solo día.",
];

const NAV_ITEMS = [
  { key: "entrenar", label: "Entrenar", icon: "🏋️" },
  { key: "nutricion", label: "Nutrición", icon: "🥗" },
  { key: "progreso", label: "Progreso", icon: "📈" },
  { key: "coach", label: "Coach", icon: "🧑‍🏫" },
  { key: "ajustes", label: "Ajustes", icon: "⚙️" },
];

const WEEKDAY_NAMES = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
];
const MONTH_NAMES = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

export default function Dashboard({ data }: { data: OnboardingData }) {
  const [tab, setTab] = useState("entrenar");
  const [completed, setCompleted] = useState(false);
  const [messageIdx, setMessageIdx] = useState(0);
  const plan = useMemo(() => buildPlan(), []);
  const today = plan[0];
  const now = new Date();

  const displayName = data.name || "Alumna";

  return (
    <div className="mx-auto min-h-screen w-full max-w-md pb-24">
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-black/5 bg-white px-5 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-600 text-base">
            🍑
          </div>
          <div>
            <p className="font-display text-sm font-black leading-none">
              Glúteos by Jeza
            </p>
            <p className="text-[9px] font-semibold uppercase tracking-wide text-ink/40">
              Método Glúteos &amp; Tren Inferior
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-ink/60">
          <span className="rounded-full bg-pink-50 px-3 py-1 text-pink-700">
            {displayName}
          </span>
          <span>⚙️</span>
        </div>
      </header>

      <main className="flex flex-col gap-4 px-5 py-5">
        <Card>
          <div className="mb-3 flex items-center justify-between text-xs text-ink/50">
            <span className="font-bold capitalize">
              {WEEKDAY_NAMES[now.getDay()]}
            </span>
            <span>
              {now.getDate()} de {MONTH_NAMES[now.getMonth()]} de{" "}
              {now.getFullYear()}
            </span>
          </div>
          <div className="mb-4 flex items-center justify-between text-xs text-ink/50">
            <span>
              Buenas, {displayName} · Seguimiento en tiempo real
            </span>
          </div>
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wide text-ink/40">
                Mensaje del Coach · Día 1
              </p>
              <p className="mt-2 font-display text-sm font-extrabold leading-snug text-ink">
                "{COACH_MESSAGES[messageIdx]}"
              </p>
            </div>
            <button
              onClick={() =>
                setMessageIdx((i) => (i + 1) % COACH_MESSAGES.length)
              }
              className="shrink-0 rounded-full bg-pink-50 p-2 text-pink-700"
              aria-label="Ver otra frase motivadora"
            >
              🔄
            </button>
          </div>
          <div className="mt-4 rounded-xl bg-mint-50 p-3 text-xs text-ink/70">
            <span className="font-bold text-mint-600">
              💡 Consejo biomecánico del día:{" "}
            </span>
            No esperes la motivación: empieza el entrenamiento y la
            motivación llegará con el movimiento.
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-pink-600 to-pink-700 text-white">
          <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wide">
            Desafío de Glúteos de 28 Días
          </span>
          <h2 className="mt-3 font-display text-xl font-black">
            Hola, {displayName}!
          </h2>
          <p className="mt-1 text-sm text-white/85">
            Tu entrenamiento de hoy se enfoca en la activación profunda de las
            fibras para un glúteo redondeado.
          </p>
          <button className="mt-4 flex w-full items-center justify-between rounded-2xl bg-white/15 px-4 py-3 text-sm font-bold">
            <span>🏋️ Biblioteca (16 Ejercicios)</span>
            <span>→</span>
          </button>
        </Card>

        <Card>
          <div className="flex items-center gap-4">
            <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-[6px] border-pink-100">
              <div
                className="absolute inset-0 rounded-full border-[6px] border-pink-600"
                style={{
                  clipPath: completed
                    ? undefined
                    : "polygon(50% 50%, 50% 0, 50% 0)",
                }}
              />
              <span className="font-display text-lg font-black">
                {completed ? "100%" : "0%"}
              </span>
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold text-ink/40">Día 1 de 28</p>
              <h3 className="font-display text-base font-extrabold">
                {completed ? "¡Entrenamiento completado!" : "¡Lo estás haciendo genial!"}
              </h3>
              <p className="text-xs text-ink/60">
                Solo quedan 28 días para tu transformación completa. El
                enfoque de hoy es activación y volumen.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-display text-base font-extrabold">
              🔥 Entrenamiento de Hoy
            </h3>
            <span className="rounded-full bg-pink-50 px-2 py-0.5 text-[10px] font-bold text-pink-700">
              Día {today.day} · Sem {today.week}
            </span>
          </div>
          <div className="mb-3 flex gap-2 text-[10px] font-bold text-ink/50">
            <span className="rounded-full bg-black/5 px-2 py-1">
              {today.intensity} Intensidad
            </span>
            <span className="rounded-full bg-black/5 px-2 py-1">
              ~{today.kcal} kcal
            </span>
          </div>
          <h4 className="font-display text-lg font-black">{today.title}</h4>
          <p className="mb-3 text-xs text-ink/60">
            {today.exercises.length} ejercicios enfocados en biomecánica en
            casa.
          </p>
          <ul className="mb-4 flex flex-col gap-2">
            {today.exercises.map((ex) => (
              <li
                key={ex.name}
                className="flex items-center gap-2 rounded-xl bg-black/[0.03] px-3 py-2 text-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-pink-600" />
                {ex.name}
              </li>
            ))}
          </ul>
          <PrimaryButton onClick={() => setCompleted(true)}>
            {completed ? "✓ Entreno Completado" : "▶ Iniciar Entreno"}
          </PrimaryButton>
        </Card>

        <Card>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-display text-base font-extrabold">
              Cronograma Semanal
            </h3>
            <button className="flex items-center gap-1 rounded-full bg-black/5 px-3 py-1 text-[11px] font-bold">
              📅 Ver los 28 Días
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {plan.slice(0, 3).map((d) => (
              <div
                key={d.day}
                className="flex items-center justify-between rounded-xl bg-black/[0.03] px-3 py-2"
              >
                <div>
                  <p className="text-[10px] font-bold text-ink/40">
                    {d.weekday} · Día {d.day}
                  </p>
                  <p className="text-sm font-semibold">{d.title}</p>
                </div>
                <span>{d.locked ? "🔒" : "▶️"}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-mint-50">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏆</span>
            <div>
              <h3 className="font-display text-base font-extrabold">
                Meta de la Semana
              </h3>
              <p className="text-xs text-ink/60">
                Completar {data.frequency} entrenamientos intensos. ¡Ya
                hiciste {completed ? 1 : 0}!
              </p>
            </div>
          </div>
        </Card>
      </main>

      <nav className="fixed bottom-0 left-1/2 z-20 w-full max-w-md -translate-x-1/2 border-t border-black/5 bg-white px-2 py-2">
        <div className="flex items-center justify-between">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              onClick={() => setTab(item.key)}
              className={
                "flex flex-1 flex-col items-center gap-1 rounded-xl py-2 text-[10px] font-bold " +
                (tab === item.key ? "text-pink-700" : "text-ink/40")
              }
            >
              <span
                className={
                  "flex h-9 w-9 items-center justify-center rounded-full text-base " +
                  (tab === item.key ? "bg-pink-600 text-white" : "bg-transparent")
                }
              >
                {item.icon}
              </span>
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
