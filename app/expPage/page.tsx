import Navbar from '../components/header';
import { UCProjectBox } from '../components/UnclickableCard';

const ExpPage = () => {
  return (
    <div>
      <div className="block mb-4 w-full">
        <Navbar></Navbar>
      </div>
      <section id="exp">
        <div className="flex items-center justify-center w-full">
  <div className="bg-white p-3 rounded-lg">
    <h1 className="text-4xl font-bold text-center bg-clip-text underline text-black bg-gradient-to-r from-[#ffcbdb] to-[#fbceb1]">
      Recent Experience
    </h1>
  </div>
</div>  
<div className="w-screen grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center gap-6 pt-6 pb-10 xl:p-10 px-6">

<UCProjectBox
  title="Computational Pathology and AI Intern"
  org="Mayo Clinic"
  date="SEPT 2025 - PRESENT"
  desc="Details coming soon."
  color="#fbceb1"         // orange
  borderColor="#e0b594"   // darker orange
/>
  
<UCProjectBox
  title="NASA L'SPACE Intern"
  org="NASA"
  date="SEPT 2025 - PRESENT"
  desc="Details coming soon."
  color="#b1ddc9"         // green
  borderColor="#86b0a0"   // darker green
/>

<UCProjectBox
  title="AI Development Intern"
  org="Georgia Institute of Technology"
  date="JUNE 2025"
  desc="Built modular LLM pipelines using Python and the DSPy framework to improve reasoning transparency and support ethical, introspective AI development. Integrated visualization tools to trace LLM I/O and inspect intermediate reasoning steps for model explainability and debugging. Explored 3+ use cases in legal document review, AI-powered game generation, and IDE-assisted debugging by combining LLM introspection with user-guided workflows."
 color="#6cd0d0"         // blue
  borderColor="#519e9e"   // darker blue
/>

<UCProjectBox
  title="STEM@GTRI Intern"
  org="Georgia Tech Research Institute"
  date="JUNE - JULY 2025"
  desc="Selected as the top 5% of 1200+. Designed and implemented an inversion-based adaptive noise cancellation system using signal generators, spectrum analyzers, and tunable band-pass filters. Developed a real-time digital signal processing (DSP) pipeline with a statistically significant 48% average SNR improvement. Integrated the system into a custom-built RF transceiver for performance validation under realistic conditions."
  color="#ffcbdb"         // pink
  borderColor="#fa98b6"   // darker pink
/>

<UCProjectBox
  title="Digital Strategy & Web Development Intern"
  org="United Nations WAY"
  date="JAN 2025 - PRESENT"
  desc="Selected as 1 of 1500+. Organized, judged, and moderated the largest UN hackathon to date with 1,700+ participants, $10,000 in prizes, and attendance from UN Ambassadors and Directors. Revamped the WAY website for enhanced UX, accessibility, and mobile responsiveness across 50+ pages. Launched a global youth policy map with scraped data and custom fact sheets from 190+ countries. Streamlined onboarding for 1,300+ volunteers and restructured the content architecture for 250+ resources."
 color="#fbceb1"         // orange
  borderColor="#e0b594"   // darker orange
/>

<UCProjectBox
  title="AI Research Intern"
  org="Stanford Department of Anesthesiology"
  date="JAN 2025 - PRESENT"
  desc="Secured $5,000 in research funding. Extracted structured and unstructured EHR data (labs, flowsheets, medications, ICD10, vitals) to derive frailty scores, comorbidities, medication classes, and physiological predictors using SQL, Python, and BigQuery. Visualized variable distributions, performed imputation strategies, and constructed Table 1 stratified by blood pressure categories with standardized mean differences. Deployed and statistically interpreted logistic regression across 4,100+ patients."
  color="#b1ddc9"         // green
  borderColor="#86b0a0"   // darker green
/>

<UCProjectBox
  title="Software Development Intern"
  org="Oracle"
  date="AUG 2024 - MAY 2025"
  desc="Led full-stack Oracle APEX app development, from schema design to UI, for a production billing platform using Oracle Cloud Infrastructure (OCI), APEX, SQL, and PL/SQL. Implemented FIFO debt resolution logic, dynamic error handling, and delinquency prediction modules. Conducted independent research on multi-class ultrasound cancer detection using ResNet18 with attention, improving classification accuracy across tumor types."
  color="#6cd0d0"         // blue
  borderColor="#519e9e"   // darker blue
/>

<UCProjectBox
  title="AI Research Intern"
  org="Stanford Center for Artificial Intelligence in Medicine and Imaging"
  date="JUNE - JULY 2024"
  desc="Selected as 1 of 20 nationwide. Trained a ResNet-101 image classifier on weak labels extracted from radiology reports via rule-based NLP using SpaCy and RadGraph. Built a custom dataset with transformation pipelines to reduce label bias and eliminate overrepresentation. Achieved 89% classification accuracy on pulmonary ultrasound data and placed 2nd in the program challenge."
  color="#ffcbdb"         // pink
  borderColor="#fa98b6"   // darker pink
/>

<UCProjectBox
  title="Software Development Intern"
  org="Microsoft"
  date="JULY 2023 - APR 2024"
  desc="Prototyped an iOS and Flutter app and NFC wearable for HIPAA-protected medical data transfer in emergencies. Programmed core NFC logic in Swift, built cross-platform UI in Dart, and explored offline storage with SQL. Led Scrum-based project management, coordinated UI/UX, and pitched the project to Microsoft and AT&T executives."
 color="#fbceb1"         // orange
  borderColor="#e0b594"   // darker orange
/>

<UCProjectBox
  title="AI Research Intern"
  org="TSI + Cornell University"
  date="JUNE - AUG 2023"
  desc="Selected as Top 10% of ~1,000. Adapted Brain Network Transformer using Python GNNs for multi-state neuroimaging recognition. Published findings in the Talaria Journal and presented at the Talaria 2023 International Conference."
  color="#b1ddc9"         // green
  borderColor="#86b0a0"   // darker green
/>

<UCProjectBox
  title="AI Research Intern"
  org="Midwestern University"
  date="AUG 2023 - APR 2024"
  desc="Engineered POCUS-Net, a novel transformer-based model to automate gastric ultrasound analysis. Classified gastric contents (liquid, solid, air) and segmented diameters to estimate operable volume. Achieved ~87% accuracy and integrated volume-based decision weighting to output aspiration risk."
  color="#6cd0d0"         // blue
  borderColor="#519e9e"   // darker blue
/>
          </div>
        </section>
    </div>
  );
};

export default ExpPage;
