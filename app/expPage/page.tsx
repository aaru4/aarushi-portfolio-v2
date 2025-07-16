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
                title="AI Development Intern"
                org="Georgia Institute of Technology"
                date="JUNE 2025"
                desc=" Building modular LLM pipelines using Python and the DSPy framework to improve reasoning transparency and support ethical, introspective AI development.
                Integrating visualization tools to trace LLM I/O and inspect intermediate reasoning steps for model explainability and debugging.
                Exploring 3+ use cases in legal document review, AI-powered game generation, and IDE-assisted debugging, combining LLM introspection with user-guided workflows.
"                color="#fbceb1"
                borderColor="#e0b594"
              />
            <UCProjectBox
                title="STEM@GTRI Intern"
                org="Georgia Tech Research Institute"
                date="JUNE - JULY 2025"
                desc="- Selected as the top 5% of 1200+. Designed and implemented an inversion-based adaptive noise cancellation system using signal generators, spectrum analyzers, and tunable band-pass filters. Developed a real-time digital signal processing (DSP) pipeline with statistically significant 48% average SNR improvement. Integrated the system into a custom-built RF transceiver for performance validation under realistic conditions.
"
                color="#b1ddc9"
                borderColor="#86b0a0"
              />
              <UCProjectBox
                title="Software Development Intern"
                org="United Nations WAY"
                date="JAN 2025 - PRESENT"
                desc="Selected as 1 of 1500+.
                Organized, judged, and moderated the largest UN hackathon to date - 1,700+ participants, $10,000 in prizes, and attendance from UN Ambassadors and Directors.
                Revamped WAY website for enhanced UX, accessibility, and mobile responsiveness across 50+ pages; launched novel global youth policy map with scraped data and custom fact sheets from 190+ countries.
                Streamlined onboarding for 1,300+ volunteers; restructured content architecture for 250+ resources
"
            color="#6cd0d0"
                borderColor="#519e9e"
              />
                <UCProjectBox
                title="AI Research Intern"
                org="Stanford Department of Anesthesiology"
                date="JAN 2025 - PRESENT"
                desc="Engineered 50+ covariates from labs, vitals, diagnoses, and medications using SQL, Python, and BigQuery.
                  Deployed and statistically interpreted logistic regression across 4,100+ patients.
                  Developing a graphical modeling framework to define hypotension and blood pressure lability
"
                  color="#ffcbdb"
                borderColor="#fa98b6"
              />
            <UCProjectBox
              title="Software Development Intern"
              org="Oracle"
              date="AUG 2024 - MAY 2025"
              desc="Led full-stack Oracle APEX app development, from schema design to UI, for a production billing platform using Oracle Cloud Infrastructure (OCI), APEX, SQL, and PL/SQL.
              Implemented FIFO debt resolution logic, dynamic error handling, and delinquency prediction modules.
              Conducted independent research on multi-class ultrasound cancer detection using ResNet18 + attention, improving classification accuracy across tumor types.
              "
              color="#fbceb1"
              borderColor="#e0b594"
            />

              <UCProjectBox
                title="AI Research Intern"
                org="Stanford Center for Artificial Intelligence in Medicine and Imaging"
                date="JUNE - JULY 2024"
                desc="Selected as 1 of 20 nationwide. Trained a ResNet-101 image classifier on weak labels compiled and extracted from radiology reports via rule-based NLP, SpaCy, RadGraph.
                Built custom dataset with transformation pipelines to reduce label bias and eliminate overrepresentation.
                Achieved 89% classification accuracy on pulmonary ultrasound data; placed 2nd in program challenge
" 
                color="#b1ddc9"
                borderColor="#86b0a0"
              />

            <UCProjectBox
              title="Software Development Intern"
              org="Microsoft"
              date="JULY 2023 - APR 2024"
              desc="Prototyped an iOS + Flutter app and NFC wearable for HIPAA-protect medical data transfer in emergencies.
              Programmed core NFC logic in Swift, cross-platform UI with Dart, and explored offline storage with SQL.
              Led Scrum-based management, coordinated UI/UX, and pitched to Microsoft and AT&T execs
"
              color="#6cd0d0"
              borderColor="#519e9e"
            />

           <UCProjectBox
                title="AI Research Intern"
                org="TSI + Cornell University"
                date="JUNE - AUG 2023"
                desc="Selected as Top 10% of ~1,000. Adapted Brain Network Transformer using Python GNNs for multi-state neuroimaging recognition.
             Published in Talaria Journal; Speaker at Talaria 2023 International Conference."
                color="#ffcbdb"
                borderColor="#fa98b6"
              />
          
            <UCProjectBox
              title="AI Research Intern"
              org="Midwestern University"
              date="AUG 2023 - APR 2024"
              desc="Engineered POCUS-Net, a novel transformer-based model to automate gastric ultrasound analysis .
              Classified gastric contents (liquid, solid, air) and segmented diameters to estimate operable volume.
              Achieved ~87% accuracy; integrated volume-based decision weighting to output aspiration risk
"
              color="#fbceb1"
              borderColor="#e0b594"
            />
          </div>
        </section>
    </div>
  );
};

export default ExpPage;
