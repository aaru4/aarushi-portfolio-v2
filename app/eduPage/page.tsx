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
            org="B.S. in Computer Science - Threads in Cybersecurity & Privacy and Intelligence"
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
        .skill-category {
          position: relative;
          min-height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
        }
        
        .orbit-container {
          position: relative;
          width: 300px;
          height: 300px;
        }
        
        .category-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
        }
        
        .skill-orbit {
          position: absolute;
          top: 50%;
          left: 50%;
        }
        
        @media (max-width: 640px) {
          .orbit-container {
            width: 260px;
            height: 260px;
          }
          
          .skill-category {
            min-height: 260px;
          }
        }
      `}} />

      <div className="w-full flex items-center justify-center px-4 py-8">
        <div className="max-w-6xl w-full pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Programming Languages */}
          <div className="skill-category">
            <div className="orbit-container">
              <div className="category-icon">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full shadow-lg" style={{ backgroundColor: "#fbceb1" }}>
                    <Code size={36} color="#000000" />
                  </div>
                  <h3 className="text-base font-bold text-black mt-2">Programming</h3>
                </div>
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(0deg) translateX(110px) rotate(-0deg)' }}>
                <SkillBox title="Python" color="#fbceb1" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(45deg) translateX(110px) rotate(-45deg)' }}>
                <SkillBox title="SQL" color="#fbceb1" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(90deg) translateX(110px) rotate(-90deg)' }}>
                <SkillBox title="Java" color="#fbceb1" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(135deg) translateX(110px) rotate(-135deg)' }}>
                <SkillBox title="Swift" color="#fbceb1" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(180deg) translateX(110px) rotate(-180deg)' }}>
                <SkillBox title="JavaScript" color="#fbceb1" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(225deg) translateX(110px) rotate(-225deg)' }}>
                <SkillBox title="R" color="#fbceb1" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(270deg) translateX(110px) rotate(-270deg)' }}>
                <SkillBox title="MATLAB" color="#fbceb1" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(315deg) translateX(110px) rotate(-315deg)' }}>
                <SkillBox title="HTML/CSS" color="#fbceb1" />
              </div>
            </div>
          </div>

          {/* AI / Machine Learning */}
          <div className="skill-category">
            <div className="orbit-container">
              <div className="category-icon">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full shadow-lg" style={{ backgroundColor: "#ffcbdb" }}>
                    <Cpu size={36} color="#000000" />
                  </div>
                  <h3 className="text-base font-bold text-black mt-2">AI & ML</h3>
                </div>
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(0deg) translateX(110px) rotate(-0deg)' }}>
                <SkillBox title="AI" color="#ffcbdb" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(30deg) translateX(110px) rotate(-30deg)' }}>
                <SkillBox title="ML" color="#ffcbdb" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(60deg) translateX(110px) rotate(-60deg)' }}>
                <SkillBox title="PyTorch" color="#ffcbdb" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(90deg) translateX(110px) rotate(-90deg)' }}>
                <SkillBox title="TensorFlow" color="#ffcbdb" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(120deg) translateX(110px) rotate(-120deg)' }}>
                <SkillBox title="scikit-learn" color="#ffcbdb" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(150deg) translateX(110px) rotate(-150deg)' }}>
                <SkillBox title="OpenCV" color="#ffcbdb" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(180deg) translateX(110px) rotate(-180deg)' }}>
                <SkillBox title="SpaCy" color="#ffcbdb" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(210deg) translateX(110px) rotate(-210deg)' }}>
                <SkillBox title="RadGraph" color="#ffcbdb" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(240deg) translateX(110px) rotate(-240deg)' }}>
                <SkillBox title="Transformers" color="#ffcbdb" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(270deg) translateX(110px) rotate(-270deg)' }}>
                <SkillBox title="NLP" color="#ffcbdb" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(300deg) translateX(110px) rotate(-300deg)' }}>
                <SkillBox title="Image Class." color="#ffcbdb" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(330deg) translateX(110px) rotate(-330deg)' }}>
                <SkillBox title="Comp. Vision" color="#ffcbdb" />
              </div>
            </div>
          </div>

          {/* Data & Cloud */}
          <div className="skill-category">
            <div className="orbit-container">
              <div className="category-icon">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full shadow-lg" style={{ backgroundColor: "#b1ddc9" }}>
                    <BarChart size={36} color="#000000" />
                  </div>
                  <h3 className="text-base font-bold text-black mt-2">Data & Cloud</h3>
                </div>
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(0deg) translateX(110px) rotate(-0deg)' }}>
                <SkillBox title="Pandas" color="#b1ddc9" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(50deg) translateX(110px) rotate(-50deg)' }}>
                <SkillBox title="NumPy" color="#b1ddc9" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(100deg) translateX(110px) rotate(-100deg)' }}>
                <SkillBox title="Tableau" color="#b1ddc9" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(150deg) translateX(110px) rotate(-150deg)' }}>
                <SkillBox title="Firebase" color="#b1ddc9" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(200deg) translateX(110px) rotate(-200deg)' }}>
                <SkillBox title="OCI" color="#b1ddc9" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(250deg) translateX(110px) rotate(-250deg)' }}>
                <SkillBox title="APEX" color="#b1ddc9" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(300deg) translateX(110px) rotate(-300deg)' }}>
                <SkillBox title="Simulink" color="#b1ddc9" />
              </div>
            </div>
          </div>

          {/* Tools & Frameworks */}
          <div className="skill-category">
            <div className="orbit-container">
              <div className="category-icon">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full shadow-lg" style={{ backgroundColor: "#6cd0d0" }}>
                    <Folder size={36} color="#000000" />
                  </div>
                  <h3 className="text-base font-bold text-black mt-2">Tools</h3>
                </div>
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(0deg) translateX(110px) rotate(-0deg)' }}>
                <SkillBox title="Git" color="#6cd0d0" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(50deg) translateX(110px) rotate(-50deg)' }}>
                <SkillBox title="MS Office" color="#6cd0d0" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(100deg) translateX(110px) rotate(-100deg)' }}>
                <SkillBox title="React" color="#6cd0d0" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(150deg) translateX(110px) rotate(-150deg)' }}>
                <SkillBox title="Next.js" color="#6cd0d0" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(200deg) translateX(110px) rotate(-200deg)' }}>
                <SkillBox title="GCP" color="#6cd0d0" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(250deg) translateX(110px) rotate(-250deg)' }}>
                <SkillBox title="BigQuery" color="#6cd0d0" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(300deg) translateX(110px) rotate(-300deg)' }}>
                <SkillBox title="CI/CD" color="#6cd0d0" />
              </div>
            </div>
          </div>

          {/* Methodologies */}
          <div className="skill-category">
            <div className="orbit-container">
              <div className="category-icon">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full shadow-lg" style={{ backgroundColor: "#ffd89c" }}>
                    <Folder size={36} color="#000000" />
                  </div>
                  <h3 className="text-base font-bold text-black mt-2">Methodology</h3>
                </div>
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(0deg) translateX(110px) rotate(-0deg)' }}>
                <SkillBox title="Agile" color="#ffd89c" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(60deg) translateX(110px) rotate(-60deg)' }}>
                <SkillBox title="Scrum" color="#ffd89c" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(120deg) translateX(110px) rotate(-120deg)' }}>
                <SkillBox title="Collaboration" color="#ffd89c" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(180deg) translateX(110px) rotate(-180deg)' }}>
                <SkillBox title="Iteration" color="#ffd89c" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(240deg) translateX(110px) rotate(-240deg)' }}>
                <SkillBox title="Communication" color="#ffd89c" />
              </div>
              <div className="skill-orbit" style={{ transform: 'translate(-50%, -50%) rotate(300deg) translateX(110px) rotate(-300deg)' }}>
                <SkillBox title="Leadership" color="#ffd89c" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default eduPage;
