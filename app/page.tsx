import Navbar from './components/header';
import { ProjectBox } from './components/ProjectCard';
// color palette: #FFC5C5, #faf2b9, #bddca7, #a7dccd
export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr]] items-left justify-items-left min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
        <main className="flex flex-col gap-8 row-start-2 items-left sm:items-start">
        <section id="home">
          <h1 className="bg-gradient-to-r from-[#bddca7] to-[#a7dccd] h-64 w-full">>
            Aarushi Ammavajjala
          </h1>
            <h1> developer, studying computer science @ tbd  </h1>
            <h1> linkedin </h1>
        </section>
        <section id="education">
            <h1> education </h1>
          </section>
        <div className="flex flex-wrap gap-8">
          <ProjectBox title="Machine Learning Intern" org="Stanford AIMI Research Group" color="#FFC5C5" />
          <ProjectBox title="AI Researcher" org="Cornell University" color="#faf2b9" />
          <ProjectBox title="Machine Learning Intern" org="Stanford AIMI Research Group" color="#FFC5C5" />
          <ProjectBox title="AI Researcher" org="Cornell University" color="#faf2b9" />
          <ProjectBox title="Machine Learning Intern" org="Stanford AIMI Research Group" color="#FFC5C5" />
          <ProjectBox title="AI Researcher" org="Cornell University" color="#faf2b9" />
          <ProjectBox title="Machine Learning Intern" org="Stanford AIMI Research Group" color="#FFC5C5" />
          <ProjectBox title="AI Researcher" org="Cornell University" color="#faf2b9" />
          <ProjectBox title="Machine Learning Intern" org="Stanford AIMI Research Group" color="#FFC5C5" />
          <ProjectBox title="AI Researcher" org="Cornell University" color="#faf2b9" />
        </div>
      </main>
    </div>
  );
}
