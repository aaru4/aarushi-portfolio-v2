import Navbar from '../components/header';
import { IndBox } from '../components/IndependentCard';

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

      <div className="w-screen columns-1 sm:columns-1 md:columns-2 lg:columns-3 gap-6 px-6">
        <a
          href="https://chi2026.acm.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 break-inside-avoid"
        >
          <IndBox
            title="Counterfactual Explanations for Agentic Workflows"
            org="Workshop on Human-Centered Explainable AI (HCXAI) at CHI, 2026"
            color="#ffcbdb"
            borderColor="#fa98b6"
          />
          </a>
        <a
          href="https://ai-summit.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 break-inside-avoid"
        >
          <IndBox
            title="Histology-Based Deep Learning Stratifies Progression-Free Survival in Trastuzumab Deruxtecan–Treated HER2-Negative Breast Cancer"
            org="Mayo Clinic AI Research Summit"
            color="#fbceb1"
            borderColor="#e0b594"
          />
          </a>
        <a
          href="https://talaria.org/papers"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 break-inside-avoid"
        >
          <IndBox
            title="Machine Learning Model for Predicting Climate Change-Induced Suicides in the United States"
            org="Talaria International Journal — Top 10% of 850 selected."
            color="#b1ddc9"
            borderColor="#86b0a0"
          />
        </a>
      </div>
    </div>
  );
};

export default PubPage;