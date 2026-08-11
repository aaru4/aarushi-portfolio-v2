interface ACProjectCardProps {
  title: string;
  org?: string;
}

export const ACProjectBox: React.FC<ACProjectCardProps> = ({ title, org }) => {
  return (
    <div className="w-full py-1">
      <h1 className="text-sm font-bold leading-snug text-[var(--ink)]">{title}</h1>
      {org && <p className="mt-0.5 text-xs text-[var(--ink-soft)]">{org}</p>}
    </div>
  );
};
