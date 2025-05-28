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

export const UCProjectBox: React.FC<UCProjectCardProps> = ({ title, org, date, desc, color, borderColor }) => {
  return (
    <div
      className={`w-full h-[360px] sm:h-[400px] flex flex-col p-6 rounded-lg shadow-lg mx-auto transform transition-transform duration-300`}
      style={{
        background: `linear-gradient(${hexToRgba(color, 0.5)}, ${color})`,
        border: `3px solid ${borderColor}`,
      }}
    >
      <div className="flex-grow">
        <h1 style={cardStyles.title}>{title}</h1>
        <p style={cardStyles.org}>{org}</p>
        <p style={cardStyles.desc}>{desc}</p>
      </div>
      <div className="mt-auto">
        <p style={cardStyles.date}>{date}</p>
      </div>
    </div>
  );
};

const cardStyles = {
  container: {
    borderRadius: "12px",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    maxWidth: "250px",
    margin: "16px auto",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
    letterSpacing: "0.5px",
  },
  org: {
    fontSize: "18px",
    color: "#333",
    marginBottom: "8px",
  },
  date: {
    fontSize: "16px",
    color: "#333",
    marginTop: "8px",
    fontWeight: "bold",
    marginBottom: "12px",
  },
  desc: {
    fontSize: "16px",
    color: "#333",
    lineHeight: "1.5",
  },
};
