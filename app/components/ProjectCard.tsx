interface ProjectCardProps {
    title: string;
    org: string;
    color: string;
  }
  
  export const ProjectBox: React.FC<ProjectCardProps> = ({ title, org, color }) => {
    return (
      <div style={{...cardStyles.container, backgroundColor: color }}>
        <h1 style={cardStyles.title}>{title}</h1>
        <p style={cardStyles.org}>{org}</p>
      </div>
    );
  };
  
  const cardStyles = {
    container: {
      borderRadius: "8px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      padding: "16px",
      maxWidth: "400px",
      margin: "16px auto",
      textAlign: "center" as const,
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "8px",
      color: "#333",
    },
    org: {
      fontSize: "18px",
      color: "#666",
    },
  };
