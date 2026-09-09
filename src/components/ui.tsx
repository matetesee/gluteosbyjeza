import type { ButtonHTMLAttributes, ReactNode } from "react";

export function PrimaryButton({
  children,
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <button
      className={
        "flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-600 to-pink-700 px-6 py-4 font-display text-base font-extrabold text-white shadow-lg shadow-pink-600/30 transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 " +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
}

export function GhostButton({
  children,
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <button
      className={
        "flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-ink transition active:scale-[0.98] " +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
}

export function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-black/10">
      <div
        className="h-full rounded-full bg-gradient-to-r from-pink-600 to-pink-700 transition-all duration-500"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export function StepBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-pink-50 px-4 py-1 text-xs font-bold tracking-wide text-pink-700">
      {children}
    </span>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "rounded-3xl border border-black/5 bg-white p-5 shadow-sm " +
        className
      }
    >
      {children}
    </div>
  );
}

export function SelectCard({
  title,
  description,
  icon,
  selected,
  onClick,
}: {
  title: string;
  description: string;
  icon?: ReactNode;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={
        "flex w-full items-center gap-4 rounded-2xl border-2 bg-white p-4 text-left transition " +
        (selected
          ? "border-pink-600 ring-2 ring-pink-200"
          : "border-black/5 hover:border-pink-200")
      }
    >
      {icon && (
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pink-50 text-lg text-pink-700">
          {icon}
        </span>
      )}
      <span className="flex-1">
        <span className="block font-display text-base font-extrabold text-ink">
          {title}
        </span>
        <span className="block text-sm text-ink/60">{description}</span>
      </span>
      <span
        className={
          "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 " +
          (selected ? "border-pink-600 bg-pink-600" : "border-black/15")
        }
      >
        {selected && (
          <svg viewBox="0 0 20 20" fill="white" className="h-3 w-3">
            <path d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.9 3.9 6.7-6.7a1 1 0 011.4 0z" />
          </svg>
        )}
      </span>
    </button>
  );
}
