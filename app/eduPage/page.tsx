import { BarChart, Code, Cpu, Folder } from 'lucide-react'; // Import icons
import { ECProjectBox } from '../components/EducationCard';
import { SkillBox } from '../components/SkillCard';
import Navbar from '../components/header';

const eduPage = () => {
    return (
      <div>
        <div className="hidden md:block mb-4 w-full">
            <Navbar></Navbar>
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
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-7 gap-3 gap-x-2 sm:gap-4">
        
        {/* Languages */}
        <div className="relative group">
          <div className="flex justify-center items-center text-white text-sm font-bold">
            <Code size={24} color="#fbceb1" className="transition-transform duration-300" />
            <span className="ml-2">Languages</span>
          </div>
          <div className="absolute inset-0 flex flex-wrap items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300">
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

        {/* AI & Machine Learning */}
        <div className="relative group">
          <div className="flex justify-center items-center text-white text-sm font-bold">
            <Cpu size={24} color="#ffcbdb" className="transition-transform duration-300" />
            <span className="ml-2">AI & Machine Learning</span>
          </div>
          <div className="absolute inset-0 flex flex-wrap items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300">
            <SkillBox title="TensorFlow" color="#ffcbdb" />
            <SkillBox title="PyTorch" color="#ffcbdb" />
            <SkillBox title="scikit-learn" color="#ffcbdb" />
            <SkillBox title="OpenCV" color="#ffcbdb" />
            <SkillBox title="SpaCy" color="#ffcbdb" />
            <SkillBox title="RadGraph" color="#ffcbdb" />
          </div>
        </div>

        {/* Data Analysis */}
        <div className="relative group">
          <div className="flex justify-center items-center text-white text-sm font-bold">
            <BarChart size={24} color="#b1ddc9" className="transition-transform duration-300" />
            <span className="ml-2">Data Analysis</span>
          </div>
          <div className="absolute inset-0 flex flex-wrap items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300">
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
        <div className="relative group">
          <div className="flex justify-center items-center text-white text-sm font-bold">
            <Folder size={24} color="#6cd0d0" className="transition-transform duration-300" />
            <span className="ml-2">General Skills</span>
          </div>
          <div className="absolute inset-0 flex flex-wrap items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300">
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
  