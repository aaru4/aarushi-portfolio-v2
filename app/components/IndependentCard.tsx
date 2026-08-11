import { ArrowUpRight } from 'lucide-react';

interface IndCardProps {
  title: string;
  org: string;
  color: string;
  borderColor?: string;
}

function hexToRgba(hex: string, opacity: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export const IndBox: React.FC<IndCardProps> = ({ title, org, color, borderColor }) => {
  return (
    <div
      className="relative mx-auto flex w-full transform flex-col rounded-2xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{
        background: `linear-gradient(160deg, ${hexToRgba(color, 0.4)}, ${color})`,
        border: `2px solid ${borderColor ?? color}`,
      }}
    >
      <ArrowUpRight
        size={18}
        className="absolute right-4 top-4 text-[var(--ink)]/50"
        aria-hidden
      />
      <h1 className="mb-2 pr-6 text-base font-bold tracking-tight text-[var(--ink)]">{title}</h1>
      <p className="text-[12.5px] leading-relaxed text-[var(--ink)]/85">{org}</p>
    </div>
  );
};
