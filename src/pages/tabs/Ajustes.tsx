import { useState } from "react";
import type { Language, OnboardingData } from "../../types";
import { Card, PrimaryButton } from "../../components/ui";

const LANGUAGES: { code: Language; flag: string; label: string }[] = [
  { code: "es", flag: "🇪🇸", label: "Español" },
  { code: "en", flag: "🇺🇸", label: "English" },
  { code: "pt", flag: "🇧🇷", label: "Português" },
];

export default function Ajustes({
  data,
  onUpdateProfile,
  onReset,
}: {
  data: OnboardingData;
  onUpdateProfile: (partial: Partial<OnboardingData>) => void;
  onReset: () => void;
}) {
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [saved, setSaved] = useState(false);
  const [notifStatus, setNotifStatus] = useState<string>("No solicitado");

  function saveProfile() {
    onUpdateProfile({ name, email });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  async function testNotification() {
    if (!("Notification" in window)) {
      setNotifStatus("No soportado en este navegador");
      return;
    }
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      new Notification("Glúteos by Jeza 🍑", {
        body: "¡Es hora de tu entrenamiento de glúteos!",
      });
      setNotifStatus("Permitido ✓");
    } else {
      setNotifStatus("Bloqueado por el navegador");
    }
  }

  function handleReset() {
    if (confirm("¿Reiniciar el desafío? Se perderá tu progreso actual.")) {
      onReset();
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <Card>
        <h3 className="mb-3 font-display text-base font-bold">
          Idioma / Language
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              onClick={() => onUpdateProfile({ language: l.code })}
              className={
                "flex flex-col items-center gap-1 rounded-xl border-2 py-3 text-xs font-semibold transition " +
                (data.language === l.code
                  ? "border-pink-600 bg-pink-50 text-pink-700"
                  : "border-black/10 text-ink/60")
              }
            >
              <span className="text-lg">{l.flag}</span>
              {l.label}
            </button>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="mb-3 font-display text-base font-bold">
          🔔 Notificaciones Push
        </h3>
        <p className="mb-3 text-xs text-ink/50">
          Exactamente 2 recordatorios diarios
        </p>
        <div className="mb-3 flex flex-col gap-2">
          <div className="flex items-center justify-between rounded-xl bg-black/[0.03] px-3 py-2 text-sm">
            <div>
              <p className="font-semibold">09:00 · Entrenamiento</p>
              <p className="text-xs text-ink/50">Entrenamiento de glúteos mañanero 🍑</p>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-xl bg-black/[0.03] px-3 py-2 text-sm">
            <div>
              <p className="font-semibold">19:00 · Check-in</p>
              <p className="text-xs text-ink/50">Chequeo nocturno y nutrición 🥗</p>
            </div>
          </div>
        </div>
        <p className="mb-2 text-xs text-ink/40">Estado: {notifStatus}</p>
        <button
          onClick={testNotification}
          className="w-full rounded-xl bg-black/5 py-2.5 text-sm font-bold text-ink"
        >
          📨 Probar Notificación Ahora
        </button>
      </Card>

      <Card className="bg-mint-50">
        <p className="text-xs font-semibold text-mint-600">
          🔒 App individual 100% privada. Tus datos, metas y fotos de
          progreso se guardan de forma aislada en tu dispositivo.
        </p>
      </Card>

      <Card>
        <h3 className="mb-3 font-display text-base font-bold">
          Cuenta y Perfil
        </h3>
        <div className="flex flex-col gap-3">
          <label className="block">
            <span className="mb-1 block text-[10px] font-bold uppercase tracking-wide text-ink/40">
              Nombre de perfil
            </span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-black/10 px-3 py-2.5 text-sm outline-none focus:border-pink-600"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-[10px] font-bold uppercase tracking-wide text-ink/40">
              Email registrado
            </span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-black/10 px-3 py-2.5 text-sm outline-none focus:border-pink-600"
            />
          </label>
          <PrimaryButton onClick={saveProfile}>
            {saved ? "✓ Guardado" : "Guardar Cambios"}
          </PrimaryButton>
        </div>
      </Card>

      <Card>
        <h3 className="mb-2 font-display text-base font-bold">
          🔊 Efectos de Sonido
        </h3>
        <p className="text-xs text-ink/50">
          Bips de cuenta regresiva y transición entre series durante el
          entrenamiento activo.
        </p>
      </Card>

      <Card>
        <button
          onClick={handleReset}
          className="w-full rounded-xl border-2 border-red-200 bg-red-50 py-3 text-sm font-bold text-red-600"
        >
          ↺ Reiniciar Desafío
        </button>
      </Card>
    </div>
  );
}
