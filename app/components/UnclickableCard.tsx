interface UCProjectCardProps {
  title: string;
  org: string;
  desc: string;
  date: string;
  color: string;
  borderColor?: string;
}

function hexToRgba(hex: string, opacity: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export const UCProjectBox: React.FC<UCProjectCardProps> = ({
  title,
  org,
  date,
  desc,
  color,
  borderColor,
}) => {
  return (
    <div
      className="mx-auto flex w-full min-h-[280px] flex-col rounded-2xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-h-[360px]"
      style={{
        background: `linear-gradient(160deg, ${hexToRgba(color, 0.4)}, ${color})`,
        border: `2px solid ${borderColor ?? color}`,
      }}
    >
      <div className="flex-grow">
        <h1 className="mb-1 text-base font-bold tracking-tight text-[var(--ink)]">{title}</h1>
        <p className="mb-2 text-[13px] font-medium text-[var(--ink-soft)]">{org}</p>
        <p className="text-[12.5px] leading-relaxed text-[var(--ink)]/90">{desc}</p>
      </div>
      <div className="mt-4">
        <p
          className="inline-block rounded-full bg-white/50 px-2.5 py-1 text-[11px] font-bold tracking-wide text-[var(--ink)]"
          style={{ border: `1px solid ${borderColor ?? color}` }}
        >
          {date}
        </p>
      </div>
    </div>
  );
};
