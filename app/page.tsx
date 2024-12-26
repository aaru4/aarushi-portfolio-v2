import Image from 'next/image';
import Navbar from './components/header';
import { ProjectBox } from './components/ProjectCard';

// color palette: #FFC5C5, #faf2b9, #bddca7, #a7dccd

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr]] items-left justify-items-left min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
        <main className="flex flex-col gap-8 row-start-2 items-left sm:items-start">
        <section id="home" className="mt-0">
        <div className="inline-block px-2 py-2 rounded bg-gradient-to-r from-[#bddca7] to-[#a7dccd]">
          <h1 className="font-bold text-5xl px-2 py-2">Aarushi Ammavajjala</h1>
        </div>
            <h1 className="font-bold text-xl py-3"> Developer. </h1>
            <h1 className="text-l"> Studying Computer Science @ South Forsyth High School. </h1>
            <h1 className="text-l"> Contact me: aaru7811 [at] gmail [dot] com </h1>
            <a
              href="https://www.linkedin.com/in/aarushi-ammavajjala-207b49238/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4"
              >
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn Icon"
                  width={40}
                  height={40}
                  className="rounded hover:bg-[#a7dccd] opacity-50 transition-opacity duration-200"
                />
            </a>
        </section>
        <section id="education">
          <h1 className="font-bold text-xl py-3"> Education </h1>
        </section>
        <section id="experience">
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
        </section>
      </main>
    </div>
  );
}
