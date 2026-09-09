import type { Dictionary } from "../../i18n";
import { Card } from "../../components/ui";

export default function Coach({ t }: { t: Dictionary }) {
  const ct = t.coach;
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-600 to-pink-700 text-2xl text-white">
            🍑
          </div>
          <div>
            <span className="inline-block rounded-full bg-mint-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-mint-600">
              {ct.verifiedBadge}
            </span>
            <h2 className="mt-1 font-display text-lg font-bold">{ct.coachName}</h2>
            <p className="text-xs text-ink/50">{ct.coachSpecialty}</p>
          </div>
        </div>
        <div className="mt-4 rounded-xl bg-pink-50 p-3 text-sm italic text-ink/70">
          {ct.coachQuote}
        </div>
      </Card>

      <Card className="bg-gradient-to-br from-pink-600 to-pink-700 text-white">
        <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wide">
          {ct.challengeBadge}
        </span>
        <h3 className="mt-2 font-display text-lg font-bold">{ct.challengeTitle}</h3>
        <p className="mt-1 text-sm text-white/85">{ct.challengeDesc}</p>
        <div className="mt-3 flex gap-4 text-xs font-semibold">
          <span>{ct.noEquipment}</span>
          <span>{ct.daysToChange}</span>
        </div>
      </Card>

      <Card>
        <h3 className="mb-3 font-display text-base font-bold">{ct.modulesTitle}</h3>
        <div className="flex flex-col gap-3">
          {ct.modules.map((m) => (
            <div key={m.title} className="rounded-xl border border-black/5 p-3">
              <div className="flex items-start gap-3">
                <span className="text-xl">{m.icon}</span>
                <div className="flex-1">
                  <span className="mb-1 inline-block rounded-full bg-mint-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-mint-600">
                    {ct.includedBadge}
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
        <h3 className="mb-3 font-display text-base font-bold">{ct.bonusesTitle}</h3>
        <div className="flex flex-col gap-3">
          {ct.bonuses.map((b) => (
            <div key={b.title} className="flex items-start gap-3 rounded-xl bg-mint-50 p-3">
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
          {ct.testimonialsTitle}
        </h3>
        <p className="mb-3 text-xs text-ink/50">{ct.testimonialsSubtitle}</p>
        <div className="flex flex-col gap-3">
          {ct.testimonials.map((tm, i) => (
            <div key={i} className="rounded-xl border border-black/5 p-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-600 text-xs font-bold text-white">
                  {tm.initial}
                </div>
                <div>
                  <p className="text-xs font-bold">{tm.name}</p>
                  <p className="text-[10px] text-ink/40">★★★★★ · {tm.days}</p>
                </div>
              </div>
              <p className="mt-2 text-sm italic text-ink/70">"{tm.quote}"</p>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="mb-3 font-display text-base font-bold">{ct.connectTitle}</h3>
        <div className="flex flex-col gap-2 text-sm">
          <a className="flex items-center gap-2 rounded-xl bg-black/[0.03] px-3 py-2" href="#">
            {ct.instagram}
          </a>
          <a className="flex items-center gap-2 rounded-xl bg-black/[0.03] px-3 py-2" href="#">
            {ct.youtube}
          </a>
          <a className="flex items-center gap-2 rounded-xl bg-black/[0.03] px-3 py-2" href="#">
            {ct.email}
          </a>
        </div>
      </Card>
    </div>
  );
}
