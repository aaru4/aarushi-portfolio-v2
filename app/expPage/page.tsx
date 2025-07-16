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
                desc="Designing Python-based to create introspective, self-reflective LLM pipelines using DSPy to improve reasoning transparency. Advancing ethical computational creativity & AI-powered game generation.
"                color="#fbceb1"
                borderColor="#e0b594"
              />
            <UCProjectBox
                title="STEM@GTRI Intern"
                org="Georgia Tech Research Institute"
                date="JUNE - JULY 2025"
                desc="- Selected as the top 5% of 1200+
- Designed and implemented an inversion-based adaptive noise cancellation system using signal generators, spectrum analyzers, and tunable band-pass filters
- Developed a real-time digital signal processing (DSP) pipeline with statistically significant 48% average SNR improvement
- Integrated the system into a custom-built RF transceiver for performance validation under realistic conditions
"
                color="#b1ddc9"
                borderColor="#86b0a0"
              />
              <UCProjectBox
                title="Software Development Intern"
                org="United Nations WAY"
                date="JAN 2025 - PRESENT"
                desc="Selected as 1 of 1500+ as a web development intern, technical advisor, and communication manager. Organized, moderated, and judged the largest UN GNEC hackathon in history. 1700 participants, $10,000 in prizes. Attended by high-profile guests including UN Ambassadors and Directors."
            color="#6cd0d0"
                borderColor="#519e9e"
              />
                <UCProjectBox
                title="AI Research Intern"
                org="Stanford Department of Anesthesiology"
                date="JAN 2025 - PRESENT"
                desc="Engineered predictive models and risk analysis for intraoperative hypotension and postoperative mortality from time-series EHR data matrices. Extracted hypotension-linked risk factors with SQL, R, Python. Proposing novel definitions of blood pressure lability." 
                color="#ffcbdb"
                borderColor="#fa98b6"
              />
            <UCProjectBox
              title="Software Development Intern"
              org="Oracle"
              date="AUG 2024 - MAY 2025"
              desc="Designed and implemented a billing system using OCI, APEX, SQL, & PL/SQL; directed FIFO debt management, payment application, and error handling, with delinquency predictions."
              color="#fbceb1"
              borderColor="#e0b594"
            />

              <UCProjectBox
                title="AI Research Intern"
                org="Stanford Center for Artificial Intelligence in Medicine and Imaging"
                date="JUNE - JULY 2024"
                desc="Selected as 1 of 20 nationwide. Developed high-accuracy pulmonary diagnostic system.  RadGraph for unsupervised radiology report classifier; ResNet ultrasound analysis model."
                color="#b1ddc9"
                borderColor="#86b0a0"
              />

            <UCProjectBox
              title="Software Development Intern"
              org="Microsoft"
              date="JULY 2023 - APR 2024"
              desc="Utilized Swift, SQL, Dart, and JavaScript to develop JackTag, a mobile application and NFC wearable that streamlines communication of medical information between crisis victims and first responders. Presented to Microsoft/AT&T investors."
              color="#6cd0d0"
              borderColor="#519e9e"
            />

           <UCProjectBox
                title="AI Research Intern"
                org="TSI + Cornell University"
                date="JUNE - AUG 2023"
                desc="Developed a graph neural network for binary state neuroimaging recognition. Accepted to TSI (~10% of 850), matched at Cornell University. Published paper and spoke at Talaria International Conference."
                color="#ffcbdb"
                borderColor="#fa98b6"
              />
          
            <UCProjectBox
              title="AI Research Intern"
              org="Midwestern University"
              date="AUG 2023 - APR 2024"
              desc="Developed a two-prong neural network to automate gastric point-of-care ultrasound. Segments antrum, classifies content, identifies diameters, calculates operable volume, and outputs aspiration risk at 87% accuracy."
              color="#fbceb1"
              borderColor="#e0b594"
            />
          </div>
        </section>
    </div>
  );
};

export default ExpPage;
