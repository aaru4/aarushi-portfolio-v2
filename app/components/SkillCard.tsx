interface SkillCardProps {
  title: string;
  color: string;
}

export const SkillBox: React.FC<SkillCardProps> = ({ title, color }) => {
  return (
    <div
      className="w-full sm:w-[150px] md:w-[150px] lg:w-[200px] xl:w-[150px] mx-auto mb-4"
      style={{ ...cardStyles.container, backgroundColor: color }}
    >
      <h1 style={cardStyles.title}>{title}</h1>
    </div>
  );
};

const cardStyles = {
  container: {
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "12px",
    margin: "8px",
    textAlign: "center" as const,
  },
  title: {
    fontSize: "16px",
    color: "black",
  },
};
