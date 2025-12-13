import { BarChart, Code, Cpu, Folder } from 'lucide-react';
import { ECProjectBox } from '../components/EducationCard';
import { SkillBox } from '../components/SkillCard';
import Navbar from '../components/header';

const eduPage = () => {
  return (
    <div>
      <div className="block mb-4 w-full">
        <Navbar />
      </div>

      <div className="flex items-center justify-center w-full">
        <div id="education" className="bg-white p-3 rounded-lg">
          <h1 className="text-4xl font-bold text-center underline text-black">
            Education & Skills
          </h1>
        </div>
      </div>

      <section className="flex flex-col gap-6 sm:gap-8 py-6 w-full px-4">
        <div className="w-full px-2">
          <ECProjectBox
            title="Georgia Institute of Technology"
            org="B.S. in Computer Science"
            color="#fbceb1"
            borderColor="#e0b594"
          />
        </div>
        <div className="w-full px-2">
          <ECProjectBox
            title="South Forsyth High School"
            org="NMSQT Finalist, AP Scholar with Distinction"
            color="#ffcbdb"
            borderColor="#fa98b6"
          />
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translate(0, 0px); }
          25% { transform: translate(5px, -10px); }
          50% { transform: translate(-5px, -5px); }
          75% { transform: translate(-8px, 5px); }
        }
        
        .skill-bubble {
          animation: float 6s ease-in-out infinite;
        }
        
        .skill-bubble:nth-child(2) { animation-delay: -1s; }
        .skill-bubble:nth-child(3) { animation-delay: -2s; }
        .skill-bubble:nth-child(4) { animation-delay: -3s; }
        .skill-bubble:nth-child(5) { animation-delay: -4s; }
        .skill-bubble:nth-child(6) { animation-delay: -5s; }
        .skill-bubble:nth-child(7) { animation-delay: -1.5s; }
        .skill-bubble:nth-child(8) { animation-delay: -2.5s; }
        .skill-bubble:nth-child(9) { animation-delay: -3.5s; }
        .skill-bubble:nth-child(10) { animation-delay: -4.5s; }
      `}} />

      <div className="w-full flex items-center justify-center px-4">
        <div className="max-w-6xl w-full pb-12">
          
          {/* Programming Languages */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full" style={{ backgroundColor: "#fbceb1" }}>
                <Code size={24} color="#000000" />
              </div>
              <h3 className="text-xl font-semibold text-black">Programming Languages</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="skill-bubble"><SkillBox title="Python" color="#fbceb1" /></div>
              <div className="skill-bubble"><SkillBox title="SQL" color="#fbceb1" /></div>
              <div className="skill-bubble"><SkillBox title="Java" color="#fbceb1" /></div>
              <div className="skill-bubble"><SkillBox title="Swift" color="#fbceb1" /></div>
              <div className="skill-bubble"><SkillBox title="JavaScript" color="#fbceb1" /></div>
              <div className="skill-bubble"><SkillBox title="TypeScript" color="#fbceb1" /></div>
              <div className="skill-bubble"><SkillBox title="R" color="#fbceb1" /></div>
              <div className="skill-bubble"><SkillBox title="MATLAB" color="#fbceb1" /></div>
              <div className="skill-bubble"><SkillBox title="HTML/CSS (Tailwind)" color="#fbceb1" /></div>
            </div>
          </div>

          {/* AI / Machine Learning */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full" style={{ backgroundColor: "#ffcbdb" }}>
                <Cpu size={24} color="#000000" />
              </div>
              <h3 className="text-xl font-semibold text-black">AI & Machine Learning</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="skill-bubble"><SkillBox title="PyTorch" color="#ffcbdb" /></div>
              <div className="skill-bubble"><SkillBox title="TensorFlow" color="#ffcbdb" /></div>
              <div className="skill-bubble"><SkillBox title="scikit-learn" color="#ffcbdb" /></div>
              <div className="skill-bubble"><SkillBox title="OpenCV" color="#ffcbdb" /></div>
              <div className="skill-bubble"><SkillBox title="SpaCy" color="#ffcbdb" /></div>
              <div className="skill-bubble"><SkillBox title="RadGraph" color="#ffcbdb" /></div>
              <div className="skill-bubble"><SkillBox title="ResNet" color="#ffcbdb" /></div>
              <div className="skill-bubble"><SkillBox title="GNNs" color="#ffcbdb" /></div>
              <div className="skill-bubble"><SkillBox title="Transformers" color="#ffcbdb" /></div>
            </div>
          </div>

          {/* Data & Cloud */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full" style={{ backgroundColor: "#b1ddc9" }}>
                <BarChart size={24} color="#000000" />
              </div>
              <h3 className="text-xl font-semibold text-black">Data & Cloud</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="skill-bubble"><SkillBox title="Pandas" color="#b1ddc9" /></div>
              <div className="skill-bubble"><SkillBox title="NumPy" color="#b1ddc9" /></div>
              <div className="skill-bubble"><SkillBox title="Tableau" color="#b1ddc9" /></div>
              <div className="skill-bubble"><SkillBox title="AWS" color="#b1ddc9" /></div>
              <div className="skill-bubble"><SkillBox title="Firebase" color="#b1ddc9" /></div>
              <div className="skill-bubble"><SkillBox title="Oracle Cloud (OCI)" color="#b1ddc9" /></div>
              <div className="skill-bubble"><SkillBox title="APEX" color="#b1ddc9" /></div>
              <div className="skill-bubble"><SkillBox title="Simulink" color="#b1ddc9" /></div>
            </div>
          </div>

          {/* Tools & Frameworks */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full" style={{ backgroundColor: "#6cd0d0" }}>
                <Folder size={24} color="#000000" />
              </div>
              <h3 className="text-xl font-semibold text-black">Tools & Frameworks</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="skill-bubble"><SkillBox title="Git" color="#6cd0d0" /></div>
              <div className="skill-bubble"><SkillBox title="Firebase" color="#6cd0d0" /></div>
              <div className="skill-bubble"><SkillBox title="Microsoft Suite" color="#6cd0d0" /></div>
              <div className="skill-bubble"><SkillBox title="React" color="#6cd0d0" /></div>
              <div className="skill-bubble"><SkillBox title="Next.js" color="#6cd0d0" /></div>
              <div className="skill-bubble"><SkillBox title="Google Cloud" color="#6cd0d0" /></div>
              <div className="skill-bubble"><SkillBox title="BigQuery" color="#6cd0d0" /></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default eduPage;
