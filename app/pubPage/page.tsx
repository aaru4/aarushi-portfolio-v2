import Navbar from '../components/header';

interface Publication {
  title: string;
  venue: string;
  link: string;
  note: string | null;
  color: string;
  borderColor: string;
}

const publications: Publication[] = [
  {
    title: "Counterfactual Explanations for Agentic Workflows",
    venue: "Workshop on Human-Centered Explainable AI (HCXAI) at CHI, 2026",
    link: "https://chi2026.acm.org/",
    note: null,
    color: "#fbceb1",
    borderColor: "#e0b594",
  },
  {
    title: "Histology-Based Deep Learning Stratifies Progression-Free Survival in Trastuzumab Deruxtecan–Treated HER2-Negative Breast Cancer",
    venue: "Mayo Clinic AI Research Summit",
    link: "https://ai-summit.com/",
    note: null,
    color: "#b1ddc9",
    borderColor: "#86b0a0",
  },
  {
    title: "Machine Learning Model for Predicting Climate Change-Induced Suicides in the United States",
    venue: "Talaria International Journal",
    link: "https://talaria.org/papers",
    note: "Top 10% of 850 selected.",
    color: "#ffcbdb",
    borderColor: "#fa98b6",
  },
];

function hexToRgba(hex: string, opacity: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

const PubPage = () => {
  return (
    <div>
      <div className="block mb-4 w-full">
        <Navbar />
      </div>

      <div className="flex items-center justify-center w-full">
        <div className="bg-white p-3 rounded-lg">
          <h1 className="text-2xl font-bold text-center underline text-black">
            Publications
          </h1>
        </div>
      </div>

      <div className="flex py-6 items-center justify-center w-full px-4">
        <div className="w-full max-w-3xl space-y-4">
          {publications.map((pub, i) => (
            <div
              key={i}
              className="w-full flex flex-col p-4 rounded-xl shadow-md"
              style={{
                background: `linear-gradient(to bottom right, ${hexToRgba(pub.color, 0.4)}, ${pub.color})`,
                border: `2px solid ${pub.borderColor}`,
              }}
            >
              <h2 style={{ fontSize: "15px", fontWeight: "bold", color: "#333", marginBottom: "4px" }}>
                {pub.title}
              </h2>
              <p style={{ fontSize: "12px", color: "#555", marginBottom: "4px" }}>{pub.venue}</p>
              {pub.note && (
                <p style={{ fontSize: "11px", color: "#555", marginBottom: "4px" }}>{pub.note}</p>
              )}
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "12px", color: "#1a6fa8", textDecoration: "underline", marginTop: "4px" }}
                >
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PubPage;