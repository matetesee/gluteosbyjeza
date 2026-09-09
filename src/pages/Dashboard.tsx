import { useMemo, useState } from "react";
import type { OnboardingData } from "../types";
import { getDictionary } from "../i18n";
import { buildPlan } from "../data/plan";
import Entrenar from "./tabs/Entrenar";
import Nutricion from "./tabs/Nutricion";
import Progreso from "./tabs/Progreso";
import Coach from "./tabs/Coach";
import Ajustes from "./tabs/Ajustes";

export default function Dashboard({
  data,
  onUpdateProfile,
  onReset,
}: {
  data: OnboardingData;
  onUpdateProfile: (partial: Partial<OnboardingData>) => void;
  onReset: () => void;
}) {
  const [tab, setTab] = useState("entrenar");
  const [completed, setCompleted] = useState(false);
  const [messageIdx, setMessageIdx] = useState(0);
  const t = getDictionary(data.language);
  const plan = useMemo(() => buildPlan(data.language), [data.language]);
  const today = plan[0];

  const displayName = data.name || t.onboarding.step6.defaultName;

  const NAV_ITEMS = [
    { key: "entrenar", label: t.nav.entrenar, icon: "🏋️" },
    { key: "nutricion", label: t.nav.nutricion, icon: "🥗" },
    { key: "progreso", label: t.nav.progreso, icon: "📈" },
    { key: "coach", label: t.nav.coach, icon: "🧑‍🏫" },
    { key: "ajustes", label: t.nav.ajustes, icon: "⚙️" },
  ];

  return (
    <div className="mx-auto min-h-screen w-full max-w-md pb-24">
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-black/5 bg-white px-5 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-600 text-base">
            🍑
          </div>
          <div>
            <p className="font-display text-sm font-bold leading-none">
              {t.brand.name}
            </p>
            <p className="text-[9px] font-semibold uppercase tracking-wide text-ink/40">
              {t.brand.tagline}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-ink/60">
          <span className="rounded-full bg-pink-50 px-3 py-1 text-pink-700">
            {displayName}
          </span>
          <button onClick={() => setTab("ajustes")} aria-label={t.nav.ajustes}>
            ⚙️
          </button>
        </div>
      </header>

      <main className="px-5 py-5">
        {tab === "entrenar" && (
          <Entrenar
            data={data}
            t={t}
            plan={plan}
            today={today}
            completed={completed}
            onComplete={() => setCompleted(true)}
            messageIdx={messageIdx}
            onNextMessage={() =>
              setMessageIdx((i) => (i + 1) % t.entrenar.messages.length)
            }
          />
        )}
        {tab === "nutricion" && <Nutricion t={t} />}
        {tab === "progreso" && (
          <Progreso
            t={t}
            streak={completed ? 1 : 0}
            totalWorkouts={completed ? 1 : 0}
            totalMinutes={completed ? 25 : 0}
          />
        )}
        {tab === "coach" && <Coach t={t} />}
        {tab === "ajustes" && (
          <Ajustes data={data} t={t} onUpdateProfile={onUpdateProfile} onReset={onReset} />
        )}
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
