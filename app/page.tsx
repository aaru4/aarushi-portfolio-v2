import Image from 'next/image';
import Navbar from './components/header';
import { IndBox } from './components/IndependentCard';
import { ProjectBox } from './components/ProjectCard';
import { SkillBox } from './components/SkillCard';

// color palette: #a8e6ce, #b2dfdb, #b3e5fc, #ffabab, #ff677d

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr] items-left justify-items-left min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
        <main className="flex flex-col gap-8 row-start-2 items-left sm:items-start">
        <section id="home" className="mt-0">
        <div className="inline-block px-2 py-2 rounded bg-gradient-to-r from-[#ffabab] to-[#ff677d]">
          <h1 className="font-bold text-5xl px-2 py-2">Aarushi Ammavajjala.</h1>
        </div>
            <h1 className="font-bold text-xl py-3"> Developer </h1>
            <h1 className="text-l"> Studying Computer Science @ South Forsyth High School </h1>
            <h1 className="text-l"> Contact: aaru7811 [at] gmail [dot] com </h1>
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
        <h1 id="education" className="font-bold text-2xl py-3"> Education & Skills </h1>
        <section className="flex gap-8">
  <div className="w-1/3">
    <ProjectBox
      title="South Forsyth High School"
      org=""
      date="August 2021 - May 2025"
      desc=""
      color="#a8e6ce"
    />
  </div>

  <div className="w-2/3">
    <div className="grid grid-cols-5 gap-2">
      <SkillBox title="Python" color="#a8e6ce" />
      <SkillBox title="Java" color="#b2dfdb" />
      <SkillBox title="Swift" color="#b3e5fc" />
      <SkillBox title="Microsoft Suite" color="#ffabab" />
      <SkillBox title="Deep Learning" color="#ff677d" />
      <SkillBox title="Computer Vision" color="#a8e6ce" />
      <SkillBox title="NLP" color="#b2dfdb" />
      <SkillBox title="React" color="#b3e5fc" />
      <SkillBox title="R" color="#ffabab" />
      <SkillBox title="JavaScript/TypeScript" color="#ff677d" />
    </div>
  </div>
</section>
        <section id="experience">
        <h1 className="font-bold text-2xl py-3"> Recent Experiences </h1>
        <div className="flex flex-wrap gap-8">
        <a
              href="https://www.linkedin.com/in/aarushi-ammavajjala-207b49238/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4"
              >
        <ProjectBox 
  title="HCI/AI Research Intern" 
  org="Georgia Institute of Technology" 
  date="January 2025 - Present" 
  desc=""
  color="#a8e6ce"
/>
</a>

        <ProjectBox 
  title="AI Development Intern" 
  org="United Nations" 
  date="January 2025 - Present" 
  desc="Coordinating AI development across 140+ youth-led international NGOs." 
  color="#b2dfdb"
/>

<ProjectBox 
  title="AI Research Intern" 
  org="Stanford Department of Anesthesiology" 
  date="January 2025 - Present"
  desc="Predicting hypotension from arterial blood waveforms using deep learning." 
  color="#ffabab" 
/>

<ProjectBox 
  title="Development Intern" 
  org="Oracle" 
  date="August 2024 - Present" 
  desc="Designed and implemented a billing system using OCI, APEX, SQL, & PL/SQL; directed FIFO debt management, payment application, and error handling, with delinquency predictions." 
  color="#ff677d"
/>

<ProjectBox 
  title="AI Research Intern" 
  org="Stanford Center for Artificial Intelligence in Medicine and Imaging" 
  date="June - July 2024" 
  desc="Developed a comprehensive pulmonary diagnostic tool." 
  color="#a8e6ce" 
/>

<ProjectBox 
  title="Development Intern" 
  org="Microsoft" 
  date="July 2023 - April 2024" 
  desc="Utilized Swift, SQL, Dart, and JavaScript to develop JackTag, a health and safety mobile application and NFC wearable; presented to Microsoft and AT&T investors." 
  color="#b2dfdb" 
/>

<ProjectBox 
  title="AI Research Intern" 
  org="TSI + Cornell University" 
  date="June - August 2023" 
  desc="Developed a graph neural network for binary state neuroimaging recognition."
  color="#ffabab"
/>

<ProjectBox 
  title="AI Research Intern" 
  org="Midwestern University" 
  date="August 2023 - May 2024" 
  desc="Developed a transformer-based neural network to automate gastric POCUS and reduce anesthesia-induced aspiration morbidity."
  color="#ff677d"
/>
          </div>
        </section>
        <section id="projects">
        <h1 className="font-bold text-2xl py-3"> Recent Project </h1>
        <div className="flex flex-wrap gap-8">

        <IndBox 
  title="MelaninMed" 
  org="A Deep Learning and Transformer-Based AI Mobile Application for Racially Equitable Skin Cancer Detection" 
  color="#a8e6ce"
/>

<IndBox 
  title="MelaninMed" 
  org="A Deep Learning and Transformer-Based AI Mobile Application for Racially Equitable Skin Cancer Detection" 
  color="#a8e6ce"
/>

    
          </div>
        </section>
      </main>
    </div>
  );
}
