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

      <div className="w-full">
  <div className="grid pb-12 grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-7 gap-3 gap-x-2 sm:gap-4">
    
    {/* Languages */}
    <div className="relative group flex flex-col items-center">
      <div className="flex items-center justify-center w-24 h-24 rounded-full" style={{ backgroundColor: "#fbceb1" }}>
        <Code size={48} color="#000000" />
      </div>
      <span className="mt-2 text-sm font-semibold text-black">Languages</span>
      <div className="mt-3 flex flex-wrap items-center justify-center transition-all duration-300 z-10
                      opacity-100 sm:opacity-0 sm:group-hover:opacity-100
                      relative sm:absolute sm:top-full sm:left-1/2 sm:transform sm:-translate-x-1/2">
        <SkillBox title="Languages" color="#ffffff" border="#fbceb1" />
        <SkillBox title="Python" color="#fbceb1" />
        <SkillBox title="Java" color="#fbceb1" />
        <SkillBox title="Swift" color="#fbceb1" />
        <SkillBox title="SQL" color="#fbceb1" />
        <SkillBox title="R" color="#fbceb1" />
        <SkillBox title="JavaScript" color="#fbceb1" />
        <SkillBox title="HTML" color="#fbceb1" />
        <SkillBox title="CSS" color="#fbceb1" />
        <SkillBox title="MATLAB" color="#fbceb1" />
      </div>
    </div>

    {/* AI & ML */}
    <div className="relative group flex flex-col items-center">
      <div className="flex items-center justify-center w-24 h-24 rounded-full" style={{ backgroundColor: "#ffcbdb" }}>
        <Cpu size={48} color="#000000" />
      </div>
      <span className="mt-2 text-sm font-semibold text-black">AI & ML</span>
      <div className="mt-3 flex flex-wrap items-center justify-center transition-all duration-300 z-10
                      opacity-100 sm:opacity-0 sm:group-hover:opacity-100
                      relative sm:absolute sm:top-full sm:left-1/2 sm:transform sm:-translate-x-1/2">
        <SkillBox title="AI & ML" color="#ffffff" border="#ffcbdb" />
        <SkillBox title="TensorFlow" color="#ffcbdb" />
        <SkillBox title="PyTorch" color="#ffcbdb" />
        <SkillBox title="scikit-learn" color="#ffcbdb" />
        <SkillBox title="OpenCV" color="#ffcbdb" />
        <SkillBox title="SpaCy" color="#ffcbdb" />
        <SkillBox title="RadGraph" color="#ffcbdb" />
      </div>
    </div>

    {/* Data Analysis */}
    <div className="relative group flex flex-col items-center">
      <div className="flex items-center justify-center w-24 h-24 rounded-full" style={{ backgroundColor: "#b1ddc9" }}>
        <BarChart size={48} color="#000000" />
      </div>
      <span className="mt-2 text-sm font-semibold text-black">Data Analysis</span>
      <div className="mt-3 flex flex-wrap items-center justify-center transition-all duration-300 z-10
                      opacity-100 sm:opacity-0 sm:group-hover:opacity-100
                      relative sm:absolute sm:top-full sm:left-1/2 sm:transform sm:-translate-x-1/2">
        <SkillBox title="Data Analysis" color="#ffffff" border="#b1ddc9" />
        <SkillBox title="Pandas" color="#b1ddc9" />
        <SkillBox title="NumPy" color="#b1ddc9" />
        <SkillBox title="Matplotlib" color="#b1ddc9" />
        <SkillBox title="Tableau" color="#b1ddc9" />
        <SkillBox title="AWS" color="#b1ddc9" />
        <SkillBox title="Firebase" color="#b1ddc9" />
        <SkillBox title="OCI" color="#b1ddc9" />
        <SkillBox title="APEX" color="#b1ddc9" />
        <SkillBox title="Microsoft Suite" color="#b1ddc9" />
      </div>
    </div>

    {/* General Skills */}
    <div className="relative group flex flex-col items-center">
      <div className="flex items-center justify-center w-24 h-24 rounded-full" style={{ backgroundColor: "#6cd0d0" }}>
        <Folder size={48} color="#000000" />
      </div>
      <span className="mt-2 text-sm font-semibold text-black">General Skills</span>
      <div className="mt-3 flex flex-wrap items-center justify-center transition-all duration-300 z-10
                      opacity-100 sm:opacity-0 sm:group-hover:opacity-100
                      relative sm:absolute sm:top-full sm:left-1/2 sm:transform sm:-translate-x-1/2">
        <SkillBox title="Skills" color="#ffffff" border="#6cd0d0" />
        <SkillBox title="Computer Vision" color="#6cd0d0" />
        <SkillBox title="NLP" color="#6cd0d0" />
        <SkillBox title="Web Development" color="#6cd0d0" />
        <SkillBox title="App Development" color="#6cd0d0" />
      </div>
    </div>

  </div>
</div>
</div>
  );
};

export default eduPage;
