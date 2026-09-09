import { useState } from "react";
import { Card, PrimaryButton } from "../../components/ui";

type Biotype = "ecto" | "meso" | "endo";
type Goal = "hipertrofia" | "definir" | "tonificar";

const ACTIVITY_LEVELS = [
  { value: 1.2, label: "Sedentaria / poco movimiento" },
  { value: 1.375, label: "Entreno leve 1-2x por semana" },
  { value: 1.55, label: "Desafío 28D moderado 3-4x/sem" },
  { value: 1.725, label: "Entreno intenso 5-6x por semana" },
  { value: 1.9, label: "Atleta / doble turno" },
];

const BIOTYPES: { value: Biotype; title: string; desc: string; fatPerKg: number }[] = [
  { value: "ecto", title: "Ectomorfo", desc: "Metabolismo rápido", fatPerKg: 0.8 },
  { value: "meso", title: "Mesomorfo", desc: "Equilibrio muscular", fatPerKg: 1.0 },
  { value: "endo", title: "Endomorfo", desc: "Sensible a carbohidratos", fatPerKg: 1.2 },
];

const GOALS: { value: Goal; title: string; desc: string; delta: number }[] = [
  { value: "hipertrofia", title: "Hipertrofia Glútea", desc: "+300 kcal superávit", delta: 300 },
  { value: "definir", title: "Secar y Definir", desc: "-300 kcal, preservando músculo", delta: -300 },
  { value: "tonificar", title: "Tonificar / Recomposición", desc: "Mantenimiento", delta: 0 },
];

interface Result {
  bmr: number;
  tdee: number;
  kcal: number;
  protein: number;
  fat: number;
  carbs: number;
  water: number;
  fiber: number;
}

export default function Nutricion() {
  const [weight, setWeight] = useState(60);
  const [height, setHeight] = useState(163);
  const [age, setAge] = useState(28);
  const [biotype, setBiotype] = useState<Biotype>("meso");
  const [activity, setActivity] = useState(1.55);
  const [goal, setGoal] = useState<Goal>("hipertrofia");
  const [meals, setMeals] = useState(4);
  const [result, setResult] = useState<Result | null>(null);

  function calculate() {
    const bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    const tdee = bmr * activity;
    const goalDelta = GOALS.find((g) => g.value === goal)?.delta ?? 0;
    const kcal = Math.round(tdee + goalDelta);

    const protein = Math.round(weight * 2.2);
    const fatPerKg = BIOTYPES.find((b) => b.value === biotype)?.fatPerKg ?? 1;
    const fat = Math.round(weight * fatPerKg);
    const remaining = kcal - protein * 4 - fat * 9;
    const carbs = Math.max(0, Math.round(remaining / 4));

    const water = Math.round(weight * 0.04 * 10) / 10;
    const fiber = Math.round((kcal / 1000) * 14);

    setResult({ bmr: Math.round(bmr), tdee: Math.round(tdee), kcal, protein, fat, carbs, water, fiber });
  }

  const proteinKcal = result ? result.protein * 4 : 0;
  const carbsKcal = result ? result.carbs * 4 : 0;
  const fatKcal = result ? result.fat * 9 : 0;
  const totalMacroKcal = proteinKcal + carbsKcal + fatKcal || 1;

  return (
    <div className="flex flex-col gap-4">
      <Card>
        <span className="inline-block rounded-full bg-pink-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-pink-700">
          Nutrición de Alta Performance
        </span>
        <h2 className="mt-2 font-display text-xl font-bold">
          Calculadora de Macros
        </h2>
        <p className="mt-1 text-sm text-ink/60">
          Calculá tus macronutrientes exactos para maximizar el crecimiento
          glúteo de tu desafío de 28 días.
        </p>
      </Card>

      <Card>
        <h3 className="mb-3 font-display text-sm font-bold uppercase tracking-wide text-ink/50">
          Parámetros
        </h3>
        <div className="mb-3 grid grid-cols-3 gap-2">
          <NumberField label="Peso (kg)" value={weight} onChange={setWeight} />
          <NumberField label="Altura (cm)" value={height} onChange={setHeight} />
          <NumberField label="Edad" value={age} onChange={setAge} />
        </div>

        <p className="mb-1.5 text-xs font-bold uppercase tracking-wide text-ink/50">
          Biotipo corporal
        </p>
        <div className="mb-3 grid grid-cols-3 gap-2">
          {BIOTYPES.map((b) => (
            <button
              key={b.value}
              onClick={() => setBiotype(b.value)}
              className={
                "rounded-xl border-2 p-2 text-center text-[11px] font-semibold transition " +
                (biotype === b.value
                  ? "border-pink-600 bg-pink-50 text-pink-700"
                  : "border-black/10 text-ink/60")
              }
            >
              {b.title}
              <span className="mt-0.5 block text-[9px] font-normal text-ink/40">
                {b.desc}
              </span>
            </button>
          ))}
        </div>

        <p className="mb-1.5 text-xs font-bold uppercase tracking-wide text-ink/50">
          Nivel de actividad
        </p>
        <select
          value={activity}
          onChange={(e) => setActivity(Number(e.target.value))}
          className="mb-3 w-full rounded-xl border border-black/10 bg-white px-3 py-2.5 text-sm"
        >
          {ACTIVITY_LEVELS.map((a) => (
            <option key={a.value} value={a.value}>
              {a.label}
            </option>
          ))}
        </select>

        <p className="mb-1.5 text-xs font-bold uppercase tracking-wide text-ink/50">
          Objetivo principal
        </p>
        <div className="mb-3 flex flex-col gap-2">
          {GOALS.map((g) => (
            <button
              key={g.value}
              onClick={() => setGoal(g.value)}
              className={
                "rounded-xl border-2 px-3 py-2 text-left text-sm font-semibold transition " +
                (goal === g.value
                  ? "border-pink-600 bg-pink-50 text-pink-700"
                  : "border-black/10 text-ink/70")
              }
            >
              {g.title}
              <span className="block text-xs font-normal text-ink/40">
                {g.desc}
              </span>
            </button>
          ))}
        </div>

        <p className="mb-1.5 text-xs font-bold uppercase tracking-wide text-ink/50">
          Comidas por día
        </p>
        <select
          value={meals}
          onChange={(e) => setMeals(Number(e.target.value))}
          className="mb-4 w-full rounded-xl border border-black/10 bg-white px-3 py-2.5 text-sm"
        >
          {[3, 4, 5, 6].map((m) => (
            <option key={m} value={m}>
              {m} comidas
            </option>
          ))}
        </select>

        <PrimaryButton onClick={calculate}>
          ⚡ Calcular Macronutrientes
        </PrimaryButton>
      </Card>

      {result && (
        <>
          <Card className="bg-gradient-to-br from-pink-600 to-pink-700 text-white">
            <p className="text-[10px] font-bold uppercase tracking-wide text-white/70">
              Meta Calórica Diaria
            </p>
            <p className="font-display text-3xl font-extrabold">
              {result.kcal} kcal/día
            </p>
            <p className="mt-1 text-xs text-white/80">
              TMB: {result.bmr} kcal · Gasto diario: {result.tdee} kcal
            </p>
            <div className="mt-4 flex h-3 overflow-hidden rounded-full bg-white/20">
              <div
                className="bg-white"
                style={{ width: `${(proteinKcal / totalMacroKcal) * 100}%` }}
              />
              <div
                className="bg-mint-600"
                style={{ width: `${(carbsKcal / totalMacroKcal) * 100}%` }}
              />
              <div
                className="bg-yellow-300"
                style={{ width: `${(fatKcal / totalMacroKcal) * 100}%` }}
              />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[11px] font-semibold">
              <span>Prot {Math.round((proteinKcal / totalMacroKcal) * 100)}%</span>
              <span>Carb {Math.round((carbsKcal / totalMacroKcal) * 100)}%</span>
              <span>Grasa {Math.round((fatKcal / totalMacroKcal) * 100)}%</span>
            </div>
          </Card>

          <Card>
            <div className="grid grid-cols-2 gap-3">
              <MacroStat icon="💪" label="Proteínas" value={`${result.protein}g`} sub={`${(result.protein / weight).toFixed(1)}g / kg`} />
              <MacroStat icon="🌾" label="Carbohidratos" value={`${result.carbs}g`} sub={`${(result.carbs / weight).toFixed(1)}g / kg`} />
              <MacroStat icon="🥑" label="Grasas Buenas" value={`${result.fat}g`} sub={`${(result.fat / weight).toFixed(1)}g / kg`} />
              <MacroStat icon="💧" label="Agua Diaria" value={`${result.water} L`} sub={`Fibra: ${result.fiber}g/día`} />
            </div>
            <div className="mt-4 rounded-xl bg-mint-50 p-3 text-xs text-ink/70">
              <span className="font-bold text-mint-600">
                🧠 Regla de oro:{" "}
              </span>
              Repartí entre 25 y 35g de proteína en cada comida y priorizá
              carbohidratos antes y después de entrenar para maximizar la
              activación glútea.
            </div>
          </Card>

          <Card>
            <h3 className="mb-3 font-display text-base font-bold">
              🍽️ Distribución por Comida ({meals}x al día)
            </h3>
            <div className="flex flex-col gap-2">
              {Array.from({ length: meals }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-xl bg-black/[0.03] px-3 py-2 text-xs"
                >
                  <span className="font-semibold">Comida {i + 1}</span>
                  <span className="text-ink/50">
                    ~{Math.round(result.kcal / meals)} kcal · P{" "}
                    {Math.round(result.protein / meals)}g · C{" "}
                    {Math.round(result.carbs / meals)}g · G{" "}
                    {Math.round(result.fat / meals)}g
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </>
      )}

      <Card>
        <h3 className="mb-3 font-display text-base font-bold">
          Alimentos Recomendados
        </h3>
        <FoodGroup icon="💪" title="Proteínas nobles" items={[
          "Pechuga de pollo grillada",
          "Huevos enteros",
          "Filet de merluza / salmón",
          "Carne magra picada",
          "Yogur griego natural",
          "Whey protein",
        ]} />
        <FoodGroup icon="🌾" title="Carbohidratos complejos" items={[
          "Batata / camote",
          "Avena en hojuelas",
          "Arroz integral",
          "Banana con canela (pre-entreno)",
          "Frutos rojos",
        ]} />
        <FoodGroup icon="🥑" title="Grasas hormonales" items={[
          "Aceite de oliva extra virgen",
          "Palta / aguacate",
          "Almendras y nueces",
          "Semillas de chía / lino",
        ]} />
      </Card>
    </div>
  );
}

function NumberField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-[10px] font-bold uppercase tracking-wide text-ink/40">
        {label}
      </span>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full rounded-xl border border-black/10 bg-white px-2 py-2 text-center text-sm outline-none focus:border-pink-600"
      />
    </label>
  );
}

function MacroStat({
  icon,
  label,
  value,
  sub,
}: {
  icon: string;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-xl bg-pink-50 p-3">
      <p className="text-lg">{icon}</p>
      <p className="text-[10px] font-bold uppercase tracking-wide text-ink/40">
        {label}
      </p>
      <p className="font-display text-lg font-extrabold text-pink-700">
        {value}
      </p>
      <p className="text-[10px] text-ink/40">{sub}</p>
    </div>
  );
}

function FoodGroup({
  icon,
  title,
  items,
}: {
  icon: string;
  title: string;
  items: string[];
}) {
  return (
    <div className="mb-3 last:mb-0">
      <p className="mb-1.5 text-xs font-bold text-ink/60">
        {icon} {title}
      </p>
      <div className="flex flex-col gap-1">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2 text-sm text-ink/70">
            <span className="text-mint-600">✓</span> {item}
          </div>
        ))}
      </div>
    </div>
  );
}
