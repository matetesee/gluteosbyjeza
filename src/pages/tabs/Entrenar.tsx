import { useState } from "react";
import type { DayPlan, OnboardingData } from "../../types";
import type { Dictionary } from "../../i18n";
import { Card, PrimaryButton } from "../../components/ui";

export default function Entrenar({
  data,
  t,
  plan,
  today,
  completed,
  onComplete,
  messageIdx,
  onNextMessage,
}: {
  data: OnboardingData;
  t: Dictionary;
  plan: DayPlan[];
  today: DayPlan;
  completed: boolean;
  onComplete: () => void;
  messageIdx: number;
  onNextMessage: () => void;
}) {
  const et = t.entrenar;
  const now = new Date();
  const displayName = data.name || t.onboarding.step6.defaultName;
  const [showAllDays, setShowAllDays] = useState(false);

  const intensityLabel = (i: string) =>
    (et.intensities as Record<string, string>)[i] ?? i;

  return (
    <div className="flex flex-col gap-4">
      <Card>
        <div className="mb-3 flex items-center justify-between text-xs text-ink/50">
          <span className="font-bold capitalize">
            {et.weekdays[now.getDay()]}
          </span>
          <span>
            {now.getDate()} {et.months[now.getMonth()]} {now.getFullYear()}
          </span>
        </div>
        <div className="mb-4 flex items-center justify-between text-xs text-ink/50">
          <span>{et.greeting(displayName)}</span>
        </div>
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wide text-ink/40">
              {et.coachMessageLabel}
            </p>
            <p className="mt-2 font-display text-sm font-bold leading-snug text-ink">
              "{et.messages[messageIdx % et.messages.length]}"
            </p>
          </div>
          <button
            onClick={onNextMessage}
            className="shrink-0 rounded-full bg-pink-50 p-2 text-pink-700"
            aria-label={et.tipLabel}
          >
            🔄
          </button>
        </div>
        <div className="mt-4 rounded-xl bg-mint-50 p-3 text-xs text-ink/70">
          <span className="font-bold text-mint-600">{et.tipLabel} </span>
          {et.tipText}
        </div>
      </Card>

      <Card className="bg-gradient-to-br from-pink-600 to-pink-700 text-white">
        <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wide">
          {et.challengeBadge}
        </span>
        <h2 className="mt-3 font-display text-xl font-bold">
          {et.hello(displayName)}
        </h2>
        <p className="mt-1 text-sm text-white/85">{et.challengeDesc}</p>
        <button className="mt-4 flex w-full items-center justify-between rounded-2xl bg-white/15 px-4 py-3 text-sm font-bold">
          <span>{et.libraryBtn}</span>
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
            <span className="font-display text-lg font-bold">
              {completed ? "100%" : "0%"}
            </span>
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold text-ink/40">{et.dayOf28(1)}</p>
            <h3 className="font-display text-base font-bold">
              {completed ? et.doneTitle : et.notDoneTitle}
            </h3>
            <p className="text-xs text-ink/60">{et.daysLeftDesc}</p>
          </div>
        </div>
      </Card>

      <Card>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-display text-base font-bold">
            {et.todayWorkoutTitle}
          </h3>
          <span className="rounded-full bg-pink-50 px-2 py-0.5 text-[10px] font-bold text-pink-700">
            {et.dayWeek(today.day, today.week)}
          </span>
        </div>
        <div className="mb-3 flex gap-2 text-[10px] font-bold text-ink/50">
          <span className="rounded-full bg-black/5 px-2 py-1">
            {intensityLabel(today.intensity)}
          </span>
          <span className="rounded-full bg-black/5 px-2 py-1">
            {et.kcalLabel(today.kcal)}
          </span>
        </div>
        <h4 className="font-display text-lg font-bold">{today.title}</h4>
        <p className="mb-3 text-xs text-ink/60">
          {et.exercisesCount(today.exercises.length)}
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
        <PrimaryButton onClick={onComplete}>
          {completed ? et.doneBtn : et.startBtn}
        </PrimaryButton>
      </Card>

      <Card>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-display text-base font-bold">
            {et.scheduleTitle}
          </h3>
          <button
            onClick={() => setShowAllDays((v) => !v)}
            className="flex items-center gap-1 rounded-full bg-black/5 px-3 py-1 text-[11px] font-bold"
          >
            {showAllDays ? et.seeLess : et.seeAll}
          </button>
        </div>
        <div className="flex max-h-96 flex-col gap-2 overflow-y-auto">
          {(showAllDays ? plan : plan.slice(0, 3)).map((d) => (
            <div
              key={d.day}
              className="flex items-center justify-between rounded-xl bg-black/[0.03] px-3 py-2"
            >
              <div>
                <p className="text-[10px] font-bold text-ink/40">
                  {et.weekdayDayWeek(d.weekday, d.day, d.week)}
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
            <h3 className="font-display text-base font-bold">
              {et.weekGoalTitle}
            </h3>
            <p className="text-xs text-ink/60">
              {et.weekGoalDesc(data.frequency, completed ? 1 : 0)}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
