import { useMediaQuery } from 'react-responsive';

interface ProjectCardProps {
    title: string;
    org: string;
    desc: string;
    date: string;
    color: string;
  }
  
  const hexToRgba = (hex: string, alpha: number): string => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };
  export const ProjectBox: React.FC<ProjectCardProps> = ({ title, org, date, desc, color }) => {
    const prefersDarkMode = useMediaQuery({ query: '(prefers-color-scheme: dark)' });
    const alpha = prefersDarkMode ? parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--gradient-dark-alpha')) : parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--gradient-light-alpha'));
  
    return (
      <div
        className={`w-[250px] p-6 rounded-lg shadow-lg mx-auto text-center transform transition-transform duration-300 hover:scale-110`}
        style={{
          background: `linear-gradient(${hexToRgba(color, alpha)}, ${color})`,
        }}
      >
  
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
    date: {
      fontSize: "14px",
      color: "#555",
      marginBottom: "12px",
    },
    desc: {
      fontSize: "12px",
      color: "#444",
      lineHeight: "1.5",
    },
  };
