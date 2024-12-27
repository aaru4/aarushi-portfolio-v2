import Image from 'next/image';
import Navbar from './components/header';
import { ProjectBox } from './components/ProjectCard';

// color palette: #a8e6ce, #b2dfdb, #b3e5fc, #ffabab, #ff677d

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr]] items-left justify-items-left min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
        <main className="flex flex-col gap-8 row-start-2 items-left sm:items-start">
        <section id="home" className="mt-0">
        <div className="inline-block px-2 py-2 rounded bg-gradient-to-r from-[#ffabab] to-[#ff677d]">
          <h1 className="font-bold text-5xl px-2 py-2">Aarushi Ammavajjala</h1>
        </div>
            <h1 className="font-bold text-xl py-3"> Developer </h1>
            <h1 className="text-l"> Studying Computer Science @ South Forsyth High School </h1>
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
                  className="rounded hover:bg-[#b3e5fc] transition-opacity-80 duration-200"
                />
            </a>
        </section>
        <section id="education">
          <h1 className="text-2xl py-3"> Education </h1>
          <ProjectBox title="South Forsyth High School" org="2021-2025" color="#a8e6ce" />
        </section>
        <section id="experience">
        <div className="flex flex-wrap gap-8">
          <ProjectBox title="AI Researcher" org="Cornell University" color="#a8e6ce" />
          <ProjectBox title="Machine Learning Intern" org="Stanford AIMI Research Group" color="#b2dfdb" />
          <ProjectBox title="AI Researcher" org="Cornell University" color="#b3e5fc" />
          <ProjectBox title="Machine Learning Intern" org="Stanford AIMI Research Group" color="#dbc7ff" />
        </div>
        </section>
      </main>
    </div>
  );
}
