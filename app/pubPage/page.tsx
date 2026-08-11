import PageHeader from '../components/PageHeader';
import { IndBox } from '../components/IndependentCard';

const PubPage = () => {
  return (
    <div>
      <PageHeader title="Publications" />

      <section className="mx-auto flex w-full max-w-4xl flex-col gap-5 px-4 py-6 sm:px-8">
        <a
          href="https://chi2026.acm.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full"
        >
          <IndBox
            title="Counterfactual Explanations for Agentic Workflows"
            org="Workshop on Human-Centered Explainable AI (HCXAI) at CHI, 2026"
            color="#fbceb1"
            borderColor="#e0b594"
          />
        </a>
        <a
          href="https://ai-summit.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full"
        >
          <IndBox
            title="Histology-Based Deep Learning Stratifies Progression-Free Survival in Trastuzumab Deruxtecan–Treated HER2-Negative Breast Cancer"
            org="Mayo Clinic AI Research Summit"
            color="#b1ddc9"
            borderColor="#86b0a0"
          />
        </a>
        <a
          href="https://talaria.org/papers"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full"
        >
          <IndBox
            title="Machine Learning Model for Predicting Climate Change-Induced Suicides in the United States"
            org="Talaria International Journal — Top 10% of 850 selected."
            color="#6cd0d0"
            borderColor="#519e9e"
          />
        </a>
      </section>
    </div>
  );
};

export default PubPage;
