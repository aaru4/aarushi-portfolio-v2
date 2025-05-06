interface SkillCardProps {
  title: string;
  color: string;
}

export const SkillBox: React.FC<SkillCardProps> = ({ title, color }) => {
  return (
    <div
      className="w-full sm:w-[160px] md:w-[160px] lg:w-[160px] xl:w-[160px] mx-auto mb-4"
      style={{ ...cardStyles.container, backgroundColor: color }}
    >
      <h1 style={cardStyles.title}>{title}</h1>
    </div>
  );
};

const cardStyles = {
  container: {
    borderRadius: "12px",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    margin: "16px auto",
    textAlign: "center" as const,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
    letterSpacing: "0.5px",
  },
};
