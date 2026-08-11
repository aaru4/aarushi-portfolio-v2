interface ECProjectCardProps {
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

export const ECProjectBox: React.FC<ECProjectCardProps> = ({ title, org, color, borderColor }) => {
  return (
    <div
      className="w-full rounded-2xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-7"
      style={{
        background: `linear-gradient(to bottom right, ${hexToRgba(color, 0.45)}, ${color})`,
        border: `2px solid ${borderColor ?? color}`,
      }}
    >
      <div className="text-left">
        <h1 className="mb-1 text-lg font-bold text-[var(--ink)]">{title}</h1>
        <p className="text-sm text-[var(--ink-soft)]">{org}</p>
      </div>
    </div>
  );
};
