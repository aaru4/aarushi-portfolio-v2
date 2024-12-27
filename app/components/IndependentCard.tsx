interface IndCardProps {
    title: string;
    org: string;
    color: string;
  }
  
  function hexToRgba(hex: string, opacity: number) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  export const IndBox: React.FC<IndCardProps> = ({ title, org, color }) => {
    return (
      <div style={{ ...cardStyles.container,   background: `linear-gradient(${hexToRgba(color, 0.5)}, ${color})`, ...cardHoverStyles.container }}>
        <h1 style={cardStyles.title}>{title}</h1>
        <p style={cardStyles.org}>{org}</p>
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
  };
  
  const cardHoverStyles = {
    container: {
      transform: "translateY(-10px)", 
      boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.2)",
    },
  };
