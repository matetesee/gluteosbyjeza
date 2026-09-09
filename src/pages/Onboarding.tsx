import { useState } from "react";
import type { Frequency, OnboardingData } from "../types";
import { initialOnboardingData } from "../types";
import { getDictionary } from "../i18n";
import {
  Card,
  GhostButton,
  PrimaryButton,
  ProgressBar,
  SelectCard,
  StepBadge,
} from "../components/ui";

const TOTAL_STEPS = 6;

export default function Onboarding({
  onFinish,
}: {
  onFinish: (data: OnboardingData) => void;
}) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<OnboardingData>(initialOnboardingData);
  const t = getDictionary(data.language);
  const ob = t.onboarding;

  const next = () => setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  const canContinue =
    (step === 1 && !!data.language) ||
    (step === 2 && data.name.trim().length > 1 && data.email.includes("@")) ||
    (step === 3 && !!data.goal) ||
    (step === 4 && !!data.level) ||
    step === 5 ||
    step === 6;

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-5 py-6">
      <header className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-600 text-xl">
          🍑
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-pink-700">
            {t.brand.badge}
          </p>
          <h1 className="font-display text-lg font-bold leading-none">
            {ob.headerTitle}
          </h1>
        </div>
      </header>

      <ProgressBar value={(step / TOTAL_STEPS) * 100} />
      <p className="mb-6 mt-2 text-xs font-semibold text-ink/50">
        {ob.stepOf(step, TOTAL_STEPS)}
      </p>

      <div className="flex-1">
        {step === 1 && (
          <StepWrap
            badge={ob.step1.badge}
            title={ob.step1.title}
            subtitle={ob.step1.subtitle}
          >
            <div className="flex flex-col gap-3">
              {ob.languages.map((l) => (
                <SelectCard
                  key={l.code}
                  title={l.label}
                  description={l.sub}
                  selected={data.language === l.code}
                  onClick={() => setData({ ...data, language: l.code })}
                />
              ))}
            </div>
          </StepWrap>
        )}

        {step === 2 && (
          <StepWrap
            badge={ob.step2.badge}
            title={ob.step2.title}
            subtitle={ob.step2.subtitle}
          >
            <div className="flex flex-col gap-4">
              <Field label={ob.step2.nameLabel}>
                <input
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-pink-600"
                  placeholder={ob.step2.namePlaceholder}
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
              </Field>
              <Field label={ob.step2.emailLabel}>
                <input
                  type="email"
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-pink-600"
                  placeholder={ob.step2.emailPlaceholder}
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </Field>
            </div>
          </StepWrap>
        )}

        {step === 3 && (
          <StepWrap
            badge={ob.step3.badge}
            title={ob.step3.title}
            subtitle={ob.step3.subtitle}
          >
            <div className="flex flex-col gap-3">
              {ob.step3.goals.map((g) => (
                <SelectCard
                  key={g.code}
                  icon={g.icon}
                  title={g.title}
                  description={g.desc}
                  selected={data.goal === g.code}
                  onClick={() => setData({ ...data, goal: g.code })}
                />
              ))}
            </div>
          </StepWrap>
        )}

        {step === 4 && (
          <StepWrap
            badge={ob.step4.badge}
            title={ob.step4.title}
            subtitle={ob.step4.subtitle}
          >
            <div className="flex flex-col gap-3">
              {ob.step4.levels.map((l) => (
                <SelectCard
                  key={l.code}
                  title={l.title}
                  description={l.desc}
                  selected={data.level === l.code}
                  onClick={() => setData({ ...data, level: l.code })}
                />
              ))}
            </div>
          </StepWrap>
        )}

        {step === 5 && (
          <StepWrap
            badge={ob.step5.badge}
            title={ob.step5.title}
            subtitle={ob.step5.subtitle}
          >
            <div className="flex gap-3">
              {[3, 4, 5].map((f) => (
                <button
                  key={f}
                  onClick={() => setData({ ...data, frequency: f as Frequency })}
                  className={
                    "flex-1 rounded-2xl border-2 py-6 text-center font-display transition " +
                    (data.frequency === f
                      ? "border-pink-600 bg-gradient-to-b from-pink-600 to-pink-700 text-white"
                      : "border-black/10 bg-white text-ink")
                  }
                >
                  <span className="block text-2xl font-bold">{f}x</span>
                  <span className="block text-xs font-semibold opacity-80">
                    {ob.step5.perWeek}
                  </span>
                </button>
              ))}
            </div>
          </StepWrap>
        )}

        {step === 6 && (
          <StepWrap
            badge={ob.step6.badge}
            title={`${ob.step6.titlePrefix}${data.name || ob.step6.defaultName}!`}
            subtitle={ob.step6.subtitle}
          >
            <Card>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-600 font-display text-lg font-bold text-white">
                  {(data.name || "A").charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-display font-bold">
                    {data.name || ob.step6.defaultName}
                  </p>
                  <p className="text-sm text-ink/50">{data.email}</p>
                  <span className="mt-1 inline-block rounded-full bg-mint-50 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wide text-mint-600">
                    {ob.step6.profileBadge}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-pink-50 p-3">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-ink/40">
                    {ob.step6.objetivoLabel}
                  </p>
                  <p className="font-display font-bold text-pink-700">
                    {data.goal ? ob.goalLabels[data.goal] : "—"}
                  </p>
                </div>
                <div className="rounded-xl bg-pink-50 p-3">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-ink/40">
                    {ob.step6.nivelLabel}
                  </p>
                  <p className="font-display font-bold text-pink-700">
                    {data.level ? ob.levelLabels[data.level] : "—"}
                  </p>
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-mint-50 p-3 text-sm text-ink/70">
                💬 {ob.step6.coachMessage}
              </div>
            </Card>
          </StepWrap>
        )}
      </div>

      <div className="mt-6 flex items-center gap-3">
        {step > 1 && (
          <GhostButton onClick={back}>
            <span>←</span> {ob.backBtn}
          </GhostButton>
        )}
        <PrimaryButton
          className="flex-1"
          disabled={!canContinue}
          onClick={() => (step === TOTAL_STEPS ? onFinish(data) : next())}
        >
          {step === TOTAL_STEPS ? ob.finishBtn : ob.continueBtn}
        </PrimaryButton>
      </div>
    </div>
  );
}

function StepWrap({
  badge,
  title,
  subtitle,
  children,
}: {
  badge: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-6 text-center">
        <StepBadge>{badge}</StepBadge>
        <h2 className="mt-3 text-2xl font-black leading-tight">{title}</h2>
        {subtitle && (
          <p className="mt-2 text-sm text-ink/60">{subtitle}</p>
        )}
      </div>
      {children}
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink/50">
        {label}
      </span>
      {children}
    </label>
  );
}
