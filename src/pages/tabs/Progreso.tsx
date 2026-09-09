import { useRef, useState } from "react";
import { Card } from "../../components/ui";

interface Checkpoint {
  key: string;
  icon: string;
  label: string;
}

const CHECKPOINTS: Checkpoint[] = [
  { key: "workout", icon: "🏋️", label: "Entrenamiento de glúteos completado" },
  { key: "protein", icon: "🍗", label: "Meta de proteína y calorías registrada" },
  { key: "water", icon: "💧", label: "Hidratación diaria cumplida (2.5L+)" },
  { key: "mobility", icon: "🧘", label: "5 min de movilidad y recuperación activa" },
  { key: "photo", icon: "📸", label: "Check-in semanal de fotos o medidas" },
];

export default function Progreso({
  streak,
  totalWorkouts,
  totalMinutes,
}: {
  streak: number;
  totalWorkouts: number;
  totalMinutes: number;
}) {
  const [done, setDone] = useState<Set<string>>(new Set());
  const [photos, setPhotos] = useState<{ start?: string; current?: string }>({});
  const [records, setRecords] = useState<Array<{ id: number; name: string; value: string }>>([]);
  const [showAddRecord, setShowAddRecord] = useState(false);
  const [recordName, setRecordName] = useState("");
  const [recordValue, setRecordValue] = useState("");

  const startInputRef = useRef<HTMLInputElement>(null);
  const currentInputRef = useRef<HTMLInputElement>(null);

  function toggleCheckpoint(key: string) {
    setDone((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  function handlePhoto(kind: "start" | "current", file: File | undefined) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setPhotos((p) => ({ ...p, [kind]: reader.result as string }));
    };
    reader.readAsDataURL(file);
  }

  function addRecord() {
    if (!recordName.trim() || !recordValue.trim()) return;
    setRecords((r) => [...r, { id: Date.now(), name: recordName, value: recordValue }]);
    setRecordName("");
    setRecordValue("");
    setShowAddRecord(false);
  }

  const weeks = [
    { label: "Sem 1", value: Math.min(4, totalWorkouts) },
    { label: "Sem 2", value: 0 },
    { label: "Sem 3", value: 0 },
    { label: "Sem 4", value: 0 },
  ];
  const maxWeek = Math.max(1, ...weeks.map((w) => w.value));

  return (
    <div className="flex flex-col gap-4">
      <Card className="bg-mint-50">
        <p className="text-xs font-semibold text-mint-600">
          🔒 App 100% privada · Tu progreso, fotos y checkpoints se guardan
          únicamente en tu dispositivo.
        </p>
      </Card>

      <Card>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-display text-base font-bold">
            ✅ Checkpoints de Hoy
          </h3>
          <span className="rounded-full bg-pink-50 px-2 py-0.5 text-[11px] font-bold text-pink-700">
            {done.size} / {CHECKPOINTS.length}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          {CHECKPOINTS.map((c) => (
            <button
              key={c.key}
              onClick={() => toggleCheckpoint(c.key)}
              className={
                "flex items-center gap-3 rounded-xl border-2 px-3 py-2.5 text-left text-sm font-medium transition " +
                (done.has(c.key)
                  ? "border-mint-600 bg-mint-50 text-ink"
                  : "border-black/10 text-ink/70")
              }
            >
              <span className="text-lg">{c.icon}</span>
              <span className="flex-1">{c.label}</span>
              <span
                className={
                  "flex h-5 w-5 items-center justify-center rounded-full border-2 text-[10px] text-white " +
                  (done.has(c.key) ? "border-mint-600 bg-mint-600" : "border-black/15")
                }
              >
                {done.has(c.key) && "✓"}
              </span>
            </button>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-3 gap-3">
        <StatBox icon="🔥" value={streak} label="días seguidos" />
        <StatBox icon="🏋️" value={totalWorkouts} label="entrenos totales" />
        <StatBox icon="⏱️" value={totalMinutes} label="minutos totales" />
      </div>

      <Card>
        <h3 className="mb-1 font-display text-base font-bold">
          Frecuencia Semanal
        </h3>
        <p className="mb-3 text-xs text-ink/50">Últimas 4 semanas</p>
        <div className="flex items-end justify-between gap-2" style={{ height: 90 }}>
          {weeks.map((w) => (
            <div key={w.label} className="flex flex-1 flex-col items-center gap-1">
              <div
                className="w-full rounded-t-lg bg-gradient-to-t from-pink-600 to-pink-200"
                style={{ height: `${(w.value / maxWeek) * 70 + 4}px` }}
              />
              <span className="text-[10px] font-semibold text-ink/40">{w.label}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="mb-3 font-display text-base font-bold">
          Antes y Después
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <PhotoSlot
            label="Inicio"
            src={photos.start}
            onClick={() => startInputRef.current?.click()}
          />
          <PhotoSlot
            label="Actual"
            src={photos.current}
            onClick={() => currentInputRef.current?.click()}
          />
        </div>
        <input
          ref={startInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handlePhoto("start", e.target.files?.[0])}
        />
        <input
          ref={currentInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handlePhoto("current", e.target.files?.[0])}
        />
        {photos.start && photos.current && (
          <div className="mt-3 rounded-xl bg-mint-50 p-3 text-xs text-ink/70">
            ✨ ¡Segui subiendo fotos cada semana para ver tu evolución
            comparada lado a lado!
          </div>
        )}
      </Card>

      <Card>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-display text-base font-bold">Mis Récords</h3>
          <button
            onClick={() => setShowAddRecord((v) => !v)}
            className="rounded-full bg-pink-50 px-3 py-1 text-[11px] font-bold text-pink-700"
          >
            + Nuevo Récord
          </button>
        </div>

        {showAddRecord && (
          <div className="mb-3 flex flex-col gap-2 rounded-xl border border-black/10 p-3">
            <input
              placeholder="Ej: Puente de glúteo"
              value={recordName}
              onChange={(e) => setRecordName(e.target.value)}
              className="rounded-lg border border-black/10 px-3 py-2 text-sm outline-none focus:border-pink-600"
            />
            <input
              placeholder="Ej: 20kg x 12 reps"
              value={recordValue}
              onChange={(e) => setRecordValue(e.target.value)}
              className="rounded-lg border border-black/10 px-3 py-2 text-sm outline-none focus:border-pink-600"
            />
            <button
              onClick={addRecord}
              className="rounded-lg bg-pink-600 py-2 text-sm font-bold text-white"
            >
              Guardar
            </button>
          </div>
        )}

        {records.length === 0 ? (
          <div className="rounded-xl bg-black/[0.03] p-4 text-center text-sm text-ink/50">
            🏆 Todavía no registraste ninguna marca.
            <br />
            ¡Tocá "+ Nuevo Récord" para registrar tu primera marca!
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {records.map((r) => (
              <div
                key={r.id}
                className="flex items-center justify-between rounded-xl bg-black/[0.03] px-3 py-2 text-sm"
              >
                <span className="font-semibold">{r.name}</span>
                <span className="text-ink/50">{r.value}</span>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}

function StatBox({ icon, value, label }: { icon: string; value: number; label: string }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-3 text-center shadow-sm">
      <p className="text-lg">{icon}</p>
      <p className="font-display text-xl font-extrabold text-pink-700">{value}</p>
      <p className="text-[10px] text-ink/40">{label}</p>
    </div>
  );
}

function PhotoSlot({
  label,
  src,
  onClick,
}: {
  label: string;
  src?: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex aspect-[3/4] flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border-2 border-dashed border-black/15 bg-black/[0.02] text-xs text-ink/40"
    >
      {src ? (
        <img src={src} alt={label} className="h-full w-full object-cover" />
      ) : (
        <>
          <span className="text-2xl">📷</span>
          <span className="font-semibold">{label}</span>
          <span className="px-2 text-center text-[10px]">Toca para añadir foto</span>
        </>
      )}
    </button>
  );
}
