import { useState } from "react";
import type { OnboardingData } from "../../types";
import type { Dictionary } from "../../i18n";
import { Card, PrimaryButton } from "../../components/ui";

export default function Ajustes({
  data,
  t,
  onUpdateProfile,
  onReset,
}: {
  data: OnboardingData;
  t: Dictionary;
  onUpdateProfile: (partial: Partial<OnboardingData>) => void;
  onReset: () => void;
}) {
  const at = t.ajustes;
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [saved, setSaved] = useState(false);
  const [notifStatusKey, setNotifStatusKey] =
    useState<keyof typeof at.statusValues>("none");
  const notifStatus = at.statusValues[notifStatusKey];

  function saveProfile() {
    onUpdateProfile({ name, email });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  async function testNotification() {
    if (!("Notification" in window)) {
      setNotifStatusKey("unsupported");
      return;
    }
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      new Notification(at.notificationTitle, {
        body: at.notificationBody,
      });
      setNotifStatusKey("granted");
    } else {
      setNotifStatusKey("blocked");
    }
  }

  function handleReset() {
    if (confirm(at.resetConfirm)) {
      onReset();
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <Card>
        <h3 className="mb-3 font-display text-base font-bold">{at.languageTitle}</h3>
        <div className="grid grid-cols-3 gap-2">
          {at.languages.map((l) => (
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
          {at.notificationsTitle}
        </h3>
        <p className="mb-3 text-xs text-ink/50">{at.notificationsSubtitle}</p>
        <div className="mb-3 flex flex-col gap-2">
          <div className="flex items-center justify-between rounded-xl bg-black/[0.03] px-3 py-2 text-sm">
            <div>
              <p className="font-semibold">{at.reminder1.title}</p>
              <p className="text-xs text-ink/50">{at.reminder1.desc}</p>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-xl bg-black/[0.03] px-3 py-2 text-sm">
            <div>
              <p className="font-semibold">{at.reminder2.title}</p>
              <p className="text-xs text-ink/50">{at.reminder2.desc}</p>
            </div>
          </div>
        </div>
        <p className="mb-2 text-xs text-ink/40">
          {at.statusLabel}: {notifStatus}
        </p>
        <button
          onClick={testNotification}
          className="w-full rounded-xl bg-black/5 py-2.5 text-sm font-bold text-ink"
        >
          {at.testNotificationBtn}
        </button>
      </Card>

      <Card className="bg-mint-50">
        <p className="text-xs font-semibold text-mint-600">{at.privacyNote}</p>
      </Card>

      <Card>
        <h3 className="mb-3 font-display text-base font-bold">{at.accountTitle}</h3>
        <div className="flex flex-col gap-3">
          <label className="block">
            <span className="mb-1 block text-[10px] font-bold uppercase tracking-wide text-ink/40">
              {at.nameLabel}
            </span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-black/10 px-3 py-2.5 text-sm outline-none focus:border-pink-600"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-[10px] font-bold uppercase tracking-wide text-ink/40">
              {at.emailLabel}
            </span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-black/10 px-3 py-2.5 text-sm outline-none focus:border-pink-600"
            />
          </label>
          <PrimaryButton onClick={saveProfile}>
            {saved ? at.savedBtn : at.saveBtn}
          </PrimaryButton>
        </div>
      </Card>

      <Card>
        <h3 className="mb-2 font-display text-base font-bold">{at.soundTitle}</h3>
        <p className="text-xs text-ink/50">{at.soundDesc}</p>
      </Card>

      <Card>
        <button
          onClick={handleReset}
          className="w-full rounded-xl border-2 border-red-200 bg-red-50 py-3 text-sm font-bold text-red-600"
        >
          {at.resetBtn}
        </button>
      </Card>
    </div>
  );
}
