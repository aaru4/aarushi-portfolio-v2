interface ProjectCardProps {
    title: string;
    org: string;
    desc: string;
    date: string;
    color: string;
  }
  
  export const ProjectBox: React.FC<ProjectCardProps> = ({ title, org, date, desc, color }) => {
    return (
      <div style={{ ...cardStyles.container, background: `linear-gradient(#ffffff, ${color})`, ...cardHoverStyles.container }}>
        <h1 style={cardStyles.title}>{title}</h1>
        <p style={cardStyles.org}>{org}</p>
        <p style={cardStyles.date}>{date}</p>
        <p style={cardStyles.desc}>{desc}</p>
      </div>
    );
  };
  
  const cardStyles = {
    container: {
      borderRadius: "12px", 
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", 
      padding: "20px", 
      maxWidth: "300px",
      margin: "16px auto",
      textAlign: "center" as const,
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    title: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "10px",
      color: "#333",
      letterSpacing: "0.5px",
    },
    org: {
      fontSize: "16px",
      color: "#555",
      marginBottom: "8px",
    },
    date: {
      fontSize: "14px",
      color: "#888", 
      marginBottom: "12px",
    },
    desc: {
      fontSize: "12px", 
      color: "#444", 
      lineHeight: "1.5", 
    },
  };
  
  const cardHoverStyles = {
    container: {
      transform: "translateY(-10px)", 
      boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.2)",
    },
  };
