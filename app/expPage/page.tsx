import PageHeader from '../components/PageHeader';
import { UCProjectBox } from '../components/UnclickableCard';

const ExpPage = () => {
  return (
    <div>
      <PageHeader
        title="Recent Experience"
        subtitle="Selected roles across AI research, healthcare, and industry engineering."
      />
      <section id="exp" className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:px-8">
        <div className="grid grid-cols-1 place-items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
          <UCProjectBox
            title="Software Development Engineer Intern"
            org="Amazon"
            date="JUNE 2026 - PRESENT"
            desc="Owning development of a production proxy service enabling migration of a notification platform serving 43M+ daily push notifications to 11M+ customers. Designing a multi-endpoint REST API (API Gateway + ECS Fargate) supporting localization, personalization, and real-time segmentation, cutting campaign launch time in half. Building end-to-end security across 3 layers: WAF, OAuth, and request validation, plus field-level hybrid encryption, holding sub-300ms p99 latency."
            color="#fbceb1"
            borderColor="#e0b594"
          />

          <UCProjectBox
            title="AI Engineering Intern"
            org="Mayo Clinic"
            date="OCT 2025 - JUNE 2026"
            desc="Accepted to 2026 Mayo Clinic AI Research Summit and 2026 Pathology Visions Conference. Built large-scale data pipeline processing 9,000+ DICOM medical imaging slides; optimized MIL (Multiple Instance Learning) system architecture for breast cancer biomarker prediction deployed at clinical scale. Engineered scalable inference pipeline for UNI foundation model generating survival outcome predictions with attention-based interpretability."
            color="#b1ddc9"
            borderColor="#86b0a0"
          />

          <UCProjectBox
            title="AI Research Intern"
            org="Georgia Tech — Entertainment Intelligence"
            date="JUNE 2025 - PRESENT"
            desc="“Counterfactual Explanations for Agentic Workflows” accepted to HCXAI @ CHI 2026 (Poster Spotlight). Designed interactive interface and LLM-based assistant to visualize execution traces, generate counterfactuals, and explain workflow behavior, improving interpretability of complex multi-step systems."
            color="#6cd0d0"
            borderColor="#519e9e"
          />

          <UCProjectBox
            title="AI Research Intern"
            org="Stanford Department of Anesthesiology"
            date="DEC 2024 - JAN 2026"
            desc="Built scalable data processing infrastructure on GCP/BigQuery for 4,100+ patient records with 50+ clinical covariates; secured $5,000 in research funding supporting a surgical risk prediction system. Designed and implemented a regression modeling pipeline using SQL, Python, and R for multi-dimensional clinical data analysis, enabling data-driven protocol improvements."
            color="#ffcbdb"
            borderColor="#fa98b6"
          />

          <UCProjectBox
            title="STEM@GTRI Research Intern"
            org="Georgia Tech Research Institute — Sensors & Electromagnetic Applications"
            date="JUNE - JULY 2025"
            desc="Designed and implemented a novel Python-based inversion adaptive noise cancellation system and GUI with a 48% SNR improvement (p = 9e-22) despite non-stationary noise. Developed a real-time digital signal processing pipeline leveraging RF lab equipment: signal generators, attenuators, noise amplifiers, and tunable band-pass filters."
            color="#fbceb1"
            borderColor="#e0b594"
          />

          <UCProjectBox
            title="Lead Software Development Intern"
            org="Oracle"
            date="AUG 2024 - MAY 2025"
            desc="Led a 4-person team building a full-stack debt management system using Oracle APEX, SQL, and Java with a modular, object-oriented architecture; optimized FIFO data structures, reducing average days-to-payment by 18%. Implemented per-account FIFO priority queues with modular components for delinquency payment processing; improved system transparency and scalability across billing operations."
            color="#b1ddc9"
            borderColor="#86b0a0"
          />

          <UCProjectBox
            title="Digital Strategy & Web Dev. Intern"
            org="United Nations World Assembly of Youth"
            date="JAN 2025 - DEC 2025"
            desc="Led end-to-end planning and moderation of the UN's largest global hackathon, attracting 1,700+ participants from 90+ countries, securing $10,000+ in prizes, and engaging UN Ambassadors and Directors."
            color="#6cd0d0"
            borderColor="#519e9e"
          />

          <UCProjectBox
            title="Lead Software Development Intern"
            org="Microsoft and Women of AT&T"
            date="JULY 2023 - JAN 2024"
            desc="Prototyped an iOS app and NFC wearable to securely transfer HIPAA-protected medical data in emergencies. Directed a 6-person cross-functional team in Scrum-based development, including daily stand-ups and UX design, to enable faster, safer care during critical incidents; pitched to Microsoft and AT&T executives."
            color="#ffcbdb"
            borderColor="#fa98b6"
          />

          <UCProjectBox
            title="AI Research Intern"
            org="Stanford Center for Artificial Intelligence in Medicine and Imaging"
            date="JUNE - JULY 2024"
            desc="Selected as 1 of 20 nationwide. Trained a ResNet-101 image classifier on weak labels extracted from radiology reports via rule-based NLP using SpaCy and RadGraph. Built a custom dataset with transformation pipelines to reduce label bias and eliminate overrepresentation. Achieved 89% classification accuracy on pulmonary ultrasound data and placed 2nd in the program challenge."
            color="#fbceb1"
            borderColor="#e0b594"
          />

          <UCProjectBox
            title="AI Research Intern"
            org="Midwestern University"
            date="AUG 2023 - APR 2024"
            desc="Engineered POCUS-Net, a novel transformer-based model to automate gastric ultrasound analysis. Classified gastric contents (liquid, solid, air) and segmented diameters to estimate operable volume. Achieved ~87% accuracy and integrated volume-based decision weighting to output aspiration risk."
            color="#b1ddc9"
            borderColor="#86b0a0"
          />

          <UCProjectBox
            title="AI Research Intern"
            org="TSI + Cornell University"
            date="JUNE - AUG 2023"
            desc="Selected as top 10% of ~1,000. Adapted a Brain Network Transformer using Python GNNs for multi-state neuroimaging recognition. Published findings in the Talaria Journal and presented at the Talaria 2023 International Conference."
            color="#ffcbdb"
            borderColor="#fa98b6"
          />
        </div>
      </section>
    </div>
  );
};

export default ExpPage;
