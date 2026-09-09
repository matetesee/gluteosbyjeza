import { Card } from "../../components/ui";

const MODULES = [
  {
    icon: "📱",
    title: "App Exclusiva del Desafío 28D",
    desc: "Entrenamientos guiados en video paso a paso con seguimiento de días y marcas.",
    cta: "Abrir Entrenamientos",
  },
  {
    icon: "🏋️‍♀️",
    title: "Rutinas de 8 a 10 min por día",
    desc: "Activación neuromuscular progresiva sin gimnasio, enfocada en volumen e hipertrofia.",
    cta: "Ver Rutinas",
  },
  {
    icon: "🥗",
    title: "Guía Nutricional de Apoyo",
    desc: "Plan práctico y recetas para sumar volumen, firmeza y definición.",
    cta: "Abrir Guía Nutricional",
  },
];

const BONUSES = [
  {
    icon: "⚡",
    title: "Bono 1 · Rutina Rápida de 15 Minutos",
    desc: "Circuito exprés de alta intensidad para los días con poco tiempo.",
  },
  {
    icon: "📅",
    title: "Bono 2 · Calendario Imprimible de Progreso",
    desc: "Planificador visual para marcar cada día completado y medir tu evolución.",
  },
  {
    icon: "🧘",
    title: "Bono 3 · Guía de Movilidad de Cadera",
    desc: "Calentamiento dinámico para preparar la articulación antes de entrenar.",
  },
];

const TESTIMONIALS = [
  {
    initial: "M",
    name: "Alumna verificada",
    days: "28/28 entrenamientos",
    quote:
      "No pensé que entrenar en casa iba a servir. La técnica bien hecha marcó la diferencia.",
  },
  {
    initial: "J",
    name: "Alumna verificada",
    days: "27/28 entrenamientos",
    quote:
      "El seguimiento diario me ayudó a sostener la constancia, que era lo que más me costaba.",
  },
  {
    initial: "C",
    name: "Alumna verificada",
    days: "28/28 entrenamientos",
    quote:
      "Los entrenamientos cortos pero intensos cambiaron mi rutina sin necesitar gimnasio.",
  },
];

export default function Coach() {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-600 to-pink-700 text-2xl text-white">
            🍑
          </div>
          <div>
            <span className="inline-block rounded-full bg-mint-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-mint-600">
              ✓ Coach Verificado
            </span>
            <h2 className="mt-1 font-display text-lg font-bold">
              Jeza · Glúteos by Jeza
            </h2>
            <p className="text-xs text-ink/50">
              Especialista en activación del glúteo mayor y medio
            </p>
          </div>
        </div>
        <div className="mt-4 rounded-xl bg-pink-50 p-3 text-sm italic text-ink/70">
          "El glúteo no es solo estética: es el motor de tu cuerpo."
        </div>
      </Card>

      <Card className="bg-gradient-to-br from-pink-600 to-pink-700 text-white">
        <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wide">
          Desafío Glúteos 28D
        </span>
        <h3 className="mt-2 font-display text-lg font-bold">
          Método completo + bonos incluidos
        </h3>
        <p className="mt-1 text-sm text-white/85">
          Acceso total a entrenamientos guiados, calculadora de nutrición y
          los 3 bonos gratuitos del desafío.
        </p>
        <div className="mt-3 flex gap-4 text-xs font-semibold">
          <span>⚡ 100% sin equipo</span>
          <span>📅 28 días para cambiar</span>
        </div>
      </Card>

      <Card>
        <h3 className="mb-3 font-display text-base font-bold">
          Módulos Principales
        </h3>
        <div className="flex flex-col gap-3">
          {MODULES.map((m) => (
            <div key={m.title} className="rounded-xl border border-black/5 p-3">
              <div className="flex items-start gap-3">
                <span className="text-xl">{m.icon}</span>
                <div className="flex-1">
                  <span className="mb-1 inline-block rounded-full bg-mint-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-mint-600">
                    Incluido
                  </span>
                  <p className="font-display text-sm font-bold">{m.title}</p>
                  <p className="text-xs text-ink/50">{m.desc}</p>
                </div>
              </div>
              <button className="mt-2 w-full rounded-lg bg-pink-50 py-2 text-xs font-bold text-pink-700">
                {m.cta}
              </button>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="mb-3 font-display text-base font-bold">
          🎁 Bonos Gratuitos
        </h3>
        <div className="flex flex-col gap-3">
          {BONUSES.map((b) => (
            <div
              key={b.title}
              className="flex items-start gap-3 rounded-xl bg-mint-50 p-3"
            >
              <span className="text-xl">{b.icon}</span>
              <div className="flex-1">
                <p className="font-display text-sm font-bold">{b.title}</p>
                <p className="text-xs text-ink/50">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="mb-1 font-display text-base font-bold">
          Historias de Éxito
        </h3>
        <p className="mb-3 text-xs text-ink/50">
          Resultados de alumnas del Desafío 28D
        </p>
        <div className="flex flex-col gap-3">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="rounded-xl border border-black/5 p-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-600 text-xs font-bold text-white">
                  {t.initial}
                </div>
                <div>
                  <p className="text-xs font-bold">{t.name}</p>
                  <p className="text-[10px] text-ink/40">
                    ★★★★★ · {t.days}
                  </p>
                </div>
              </div>
              <p className="mt-2 text-sm italic text-ink/70">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="mb-3 font-display text-base font-bold">
          Conectate con tu Coach
        </h3>
        <div className="flex flex-col gap-2 text-sm">
          <a className="flex items-center gap-2 rounded-xl bg-black/[0.03] px-3 py-2" href="#">
            📷 Instagram
          </a>
          <a className="flex items-center gap-2 rounded-xl bg-black/[0.03] px-3 py-2" href="#">
            ▶️ YouTube
          </a>
          <a className="flex items-center gap-2 rounded-xl bg-black/[0.03] px-3 py-2" href="#">
            ✉️ Email directo
          </a>
        </div>
      </Card>
    </div>
  );
}
