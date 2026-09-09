import { useState } from "react";
import type { Frequency, Goal, Language, Level, OnboardingData } from "../types";
import { initialOnboardingData } from "../types";
import {
  Card,
  GhostButton,
  PrimaryButton,
  ProgressBar,
  SelectCard,
  StepBadge,
} from "../components/ui";

const TOTAL_STEPS = 6;

const LANGUAGES: { code: Language; label: string; sub: string }[] = [
  { code: "es", label: "Español", sub: "Español (América Latina / España)" },
  { code: "en", label: "English", sub: "English (United States / Global)" },
  { code: "pt", label: "Português", sub: "Português (Brasil)" },
];

const GOALS: { code: Goal; icon: string; title: string; desc: string }[] = [
  {
    code: "volumen",
    icon: "↗",
    title: "Aumentar Volumen e Hipertrofia",
    desc: "Enfoque en hipertrofia del glúteo mayor y forma redondeada.",
  },
  {
    code: "definir",
    icon: "⚡",
    title: "Definir y Levantar",
    desc: "Trabajo de glúteo medio y elevación para un aspecto firme.",
  },
  {
    code: "grasa",
    icon: "\u{1F525}",
    title: "Reducir Grasa y Celulitis",
    desc: "Estímulo metabólico de alta densidad para quema calórica.",
  },
  {
    code: "postura",
    icon: "\u{1F9B4}",
    title: "Fortalecimiento y Postura",
    desc: "Activación biomecánica para protección lumbar y estabilidad.",
  },
];

const LEVELS: { code: Level; title: string; desc: string }[] = [
  {
    code: "principiante",
    title: "Principiante",
    desc: "Comenzando ahora o inactiva desde hace tiempo.",
  },
  {
    code: "intermedia",
    title: "Intermedia",
    desc: "Practico ejercicio de forma ocasional.",
  },
  {
    code: "avanzada",
    title: "Avanzada",
    desc: "Entreno regularmente y busco máxima intensidad.",
  },
];

const GOAL_LABEL: Record<Goal, string> = {
  volumen: "Volumen",
  definir: "Definición",
  grasa: "Grasa",
  postura: "Postura",
};

const LEVEL_LABEL: Record<Level, string> = {
  principiante: "Iniciante",
  intermedia: "Intermedia",
  avanzada: "Avanzada",
};

export default function Onboarding({
  onFinish,
}: {
  onFinish: (data: OnboardingData) => void;
}) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<OnboardingData>(initialOnboardingData);

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
            Mente &amp; Biomecánica
          </p>
          <h1 className="font-display text-lg font-bold leading-none">
            Glúteos by Jeza · Registro
          </h1>
        </div>
      </header>

      <ProgressBar value={(step / TOTAL_STEPS) * 100} />
      <p className="mb-6 mt-2 text-xs font-semibold text-ink/50">
        Paso {step} de {TOTAL_STEPS}
      </p>

      <div className="flex-1">
        {step === 1 && (
          <StepWrap
            badge="Idioma"
            title="Elige tu idioma"
            subtitle="Selecciona en qué idioma deseas ver la aplicación y tus entrenamientos."
          >
            <div className="flex flex-col gap-3">
              {LANGUAGES.map((l) => (
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
            badge="Registro"
            title="¡Bienvenida al Desafío!"
            subtitle="Para registrar tu perfil y personalizar tu progreso, ingresa tu nombre y correo."
          >
            <div className="flex flex-col gap-4">
              <Field label="Tu nombre">
                <input
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-pink-600"
                  placeholder="Ej: Jesica"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
              </Field>
              <Field label="Tu correo electrónico">
                <input
                  type="email"
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-pink-600"
                  placeholder="Ej: jesica@email.com"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </Field>
            </div>
          </StepWrap>
        )}

        {step === 3 && (
          <StepWrap
            badge="Objetivo"
            title="¿Qué es lo que más deseas lograr?"
            subtitle="Selecciona el enfoque principal de tu transformación en los próximos 28 días."
          >
            <div className="flex flex-col gap-3">
              {GOALS.map((g) => (
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
            badge="Nivel"
            title="¿Cuál es tu nivel de entrenamiento?"
            subtitle="Esto ayudará a calibrar los intervalos de tu entrenamiento."
          >
            <div className="flex flex-col gap-3">
              {LEVELS.map((l) => (
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
            badge="Frecuencia"
            title="¿Cuántas veces a la semana quieres entrenar?"
            subtitle="Define tu meta semanal de entrenamientos para seguir tu panel."
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
                  <span className="block text-2xl font-black">{f}x</span>
                  <span className="block text-xs font-semibold opacity-80">
                    por semana
                  </span>
                </button>
              ))}
            </div>
          </StepWrap>
        )}

        {step === 6 && (
          <StepWrap badge="¡Perfil Listo!" title={`¡Registro Confirmado, ${data.name || "Alumna"}!`}
            subtitle="Tu plan de 28 días ha sido configurado con éxito bajo tu guía personalizada.">
            <Card>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-600 font-display text-lg font-black text-white">
                  {(data.name || "A").charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-display font-extrabold">{data.name || "Alumna"}</p>
                  <p className="text-sm text-ink/50">{data.email}</p>
                  <span className="mt-1 inline-block rounded-full bg-mint-50 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wide text-mint-600">
                    Alumna Registrada
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-pink-50 p-3">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-ink/40">
                    Objetivo
                  </p>
                  <p className="font-display font-extrabold text-pink-700">
                    {data.goal ? GOAL_LABEL[data.goal] : "—"}
                  </p>
                </div>
                <div className="rounded-xl bg-pink-50 p-3">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-ink/40">
                    Nivel
                  </p>
                  <p className="font-display font-extrabold text-pink-700">
                    {data.level ? LEVEL_LABEL[data.level] : "—"}
                  </p>
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-mint-50 p-3 text-sm text-ink/70">
                💬 "El progreso vendrá de la consistencia diaria. Cada
                repetición activará tus fibras profundas."
              </div>
            </Card>
          </StepWrap>
        )}
      </div>

      <div className="mt-6 flex items-center gap-3">
        {step > 1 && (
          <GhostButton onClick={back}>
            <span>←</span> Volver
          </GhostButton>
        )}
        <PrimaryButton
          className="flex-1"
          disabled={!canContinue}
          onClick={() => (step === TOTAL_STEPS ? onFinish(data) : next())}
        >
          {step === TOTAL_STEPS ? "Acceder a mi panel 🚀" : "Continuar →"}
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
