interface ProjectCardProps {
    title: string;
    org: string;
    desc: string;
    date: string;
    color: string;
  }
  
  export const ProjectBox: React.FC<ProjectCardProps> = ({ title, org, date, desc, color }) => {
    return (
      <div style={{...cardStyles.container, backgroundColor: color }}>
        <h1 style={cardStyles.title}>{title}</h1>
        <p style={cardStyles.org}>{org}</p>
        <p style={cardStyles.date}>{date}</p>
        <p style={cardStyles.desc}>{desc}</p>
      </div>
    );
  };
  
  const cardStyles = {
    container: {
      borderRadius: "12px", // Rounded corners for a more modern look
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", // Slightly stronger shadow for depth
      padding: "20px", // More padding for breathing room
      maxWidth: "300px",
      margin: "16px auto",
      textAlign: "center" as const,
      background: "linear-gradient(145deg, #f2f2f2, #ffffff)", // Gradient background for a polished look
      transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition for hover effects
    },
    title: {
      fontSize: "20px", // Slightly larger title
      fontWeight: "bold", // Bold title for prominence
      marginBottom: "10px",
      color: "#333", // Darker color for better readability
      letterSpacing: "0.5px", // Subtle spacing for a clean look
    },
    org: {
      fontSize: "16px", // Slightly larger font size for better readability
      color: "#555", // Slightly lighter color for contrast
      marginBottom: "8px", // Spacing between org and date
    },
    date: {
      fontSize: "14px",
      color: "#888", // Lighter color for less emphasis
      marginBottom: "12px", // Adequate space from the description
    },
    desc: {
      fontSize: "12px", // Slightly larger description text for readability
      color: "#444", // Slightly darker description for emphasis
      lineHeight: "1.5", // Better spacing between lines
    },
  };
  
  const cardHoverStyles = {
    container: {
      transform: "translateY(-10px)", // Slightly lift the card on hover
      boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.2)", // Stronger shadow for the hover effect
    },
  };
