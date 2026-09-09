import { useState } from "react";
import type { Dictionary } from "../../i18n";
import { Card, PrimaryButton } from "../../components/ui";

type Biotype = "ecto" | "meso" | "endo";
type NutriGoal = "hipertrofia" | "definir" | "tonificar";

const GOAL_DELTA: Record<NutriGoal, number> = {
  hipertrofia: 300,
  definir: -300,
  tonificar: 0,
};

const BIOTYPE_FAT_PER_KG: Record<Biotype, number> = {
  ecto: 0.8,
  meso: 1.0,
  endo: 1.2,
};

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

export default function Nutricion({ t }: { t: Dictionary }) {
  const nt = t.nutricion;
  const [weight, setWeight] = useState(60);
  const [height, setHeight] = useState(163);
  const [age, setAge] = useState(28);
  const [biotype, setBiotype] = useState<Biotype>("meso");
  const [activity, setActivity] = useState(1.55);
  const [goal, setGoal] = useState<NutriGoal>("hipertrofia");
  const [meals, setMeals] = useState(4);
  const [result, setResult] = useState<Result | null>(null);

  function calculate() {
    const bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    const tdee = bmr * activity;
    const kcal = Math.round(tdee + GOAL_DELTA[goal]);

    const protein = Math.round(weight * 2.2);
    const fat = Math.round(weight * BIOTYPE_FAT_PER_KG[biotype]);
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
          {nt.headerBadge}
        </span>
        <h2 className="mt-2 font-display text-xl font-bold">{nt.title}</h2>
        <p className="mt-1 text-sm text-ink/60">{nt.subtitle}</p>
      </Card>

      <Card>
        <h3 className="mb-3 font-display text-sm font-bold uppercase tracking-wide text-ink/50">
          {nt.paramsTitle}
        </h3>
        <div className="mb-3 grid grid-cols-3 gap-2">
          <NumberField label={nt.weightLabel} value={weight} onChange={setWeight} />
          <NumberField label={nt.heightLabel} value={height} onChange={setHeight} />
          <NumberField label={nt.ageLabel} value={age} onChange={setAge} />
        </div>

        <p className="mb-1.5 text-xs font-bold uppercase tracking-wide text-ink/50">
          {nt.biotypeLabel}
        </p>
        <div className="mb-3 grid grid-cols-3 gap-2">
          {nt.biotypes.map((b) => (
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
          {nt.activityLabel}
        </p>
        <select
          value={activity}
          onChange={(e) => setActivity(Number(e.target.value))}
          className="mb-3 w-full rounded-xl border border-black/10 bg-white px-3 py-2.5 text-sm"
        >
          {nt.activityLevels.map((a) => (
            <option key={a.value} value={a.value}>
              {a.label}
            </option>
          ))}
        </select>

        <p className="mb-1.5 text-xs font-bold uppercase tracking-wide text-ink/50">
          {nt.goalLabel}
        </p>
        <div className="mb-3 flex flex-col gap-2">
          {nt.goals.map((g) => (
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
          {nt.mealsLabel}
        </p>
        <select
          value={meals}
          onChange={(e) => setMeals(Number(e.target.value))}
          className="mb-4 w-full rounded-xl border border-black/10 bg-white px-3 py-2.5 text-sm"
        >
          {[3, 4, 5, 6].map((m) => (
            <option key={m} value={m}>
              {nt.mealsOption(m)}
            </option>
          ))}
        </select>

        <PrimaryButton onClick={calculate}>{nt.calculateBtn}</PrimaryButton>
      </Card>

      {result && (
        <>
          <Card className="bg-gradient-to-br from-pink-600 to-pink-700 text-white">
            <p className="text-[10px] font-bold uppercase tracking-wide text-white/70">
              {nt.dailyGoalTitle}
            </p>
            <p className="font-display text-3xl font-bold">
              {nt.kcalPerDay(result.kcal)}
            </p>
            <p className="mt-1 text-xs text-white/80">
              {nt.bmrTdee(result.bmr, result.tdee)}
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
              <span>{nt.macroShort.prot} {Math.round((proteinKcal / totalMacroKcal) * 100)}%</span>
              <span>{nt.macroShort.carb} {Math.round((carbsKcal / totalMacroKcal) * 100)}%</span>
              <span>{nt.macroShort.grasa} {Math.round((fatKcal / totalMacroKcal) * 100)}%</span>
            </div>
          </Card>

          <Card>
            <div className="grid grid-cols-2 gap-3">
              <MacroStat icon="💪" label={nt.macroStats.proteinas} value={`${result.protein}g`} sub={`${(result.protein / weight).toFixed(1)}${nt.perKg}`} />
              <MacroStat icon="🌾" label={nt.macroStats.carbohidratos} value={`${result.carbs}g`} sub={`${(result.carbs / weight).toFixed(1)}${nt.perKg}`} />
              <MacroStat icon="🥑" label={nt.macroStats.grasas} value={`${result.fat}g`} sub={`${(result.fat / weight).toFixed(1)}${nt.perKg}`} />
              <MacroStat icon="💧" label={nt.macroStats.agua} value={`${result.water} L`} sub={nt.fiberPerDay(result.fiber)} />
            </div>
            <div className="mt-4 rounded-xl bg-mint-50 p-3 text-xs text-ink/70">
              <span className="font-bold text-mint-600">{nt.goldenRuleLabel} </span>
              {nt.goldenRuleText}
            </div>
          </Card>

          <Card>
            <h3 className="mb-3 font-display text-base font-bold">
              {nt.mealDistribution(meals)}
            </h3>
            <div className="flex flex-col gap-2">
              {Array.from({ length: meals }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-xl bg-black/[0.03] px-3 py-2 text-xs"
                >
                  <span className="font-semibold">{nt.mealLabel(i + 1)}</span>
                  <span className="text-ink/50">
                    {nt.mealMacro(
                      Math.round(result.kcal / meals),
                      Math.round(result.protein / meals),
                      Math.round(result.carbs / meals),
                      Math.round(result.fat / meals)
                    )}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </>
      )}

      <Card>
        <h3 className="mb-3 font-display text-base font-bold">{nt.foodsTitle}</h3>
        {nt.foodGroups.map((group) => (
          <FoodGroup key={group.title} icon={group.icon} title={group.title} items={group.items} />
        ))}
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
      <p className="font-display text-lg font-bold text-pink-700">
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
