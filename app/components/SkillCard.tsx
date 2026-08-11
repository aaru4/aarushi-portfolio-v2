interface SkillCardProps {
  title: string;
  color: string;
  border?: string;
}

export const SkillBox: React.FC<SkillCardProps> = ({ title, color, border }) => {
  return (
    <div
      className="mx-auto mb-2 w-full rounded-lg px-3 py-2.5 text-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:w-[155px]"
      style={{ backgroundColor: color, border: `2px solid ${border ?? color}` }}
    >
      <h1 className="text-xs font-semibold text-[var(--ink)]">{title}</h1>
    </div>
  );
};
