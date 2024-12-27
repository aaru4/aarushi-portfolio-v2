import Image from 'next/image';
import Navbar from './components/header';
import { ProjectBox } from './components/ProjectCard';
import { SkillBox } from './components/SkillCard';

// color palette: #a8e6ce, #b2dfdb, #b3e5fc, #ffabab, #ff677d

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr]] items-left justify-items-left min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
        <main className="flex flex-col gap-8 row-start-2 items-left sm:items-start">
        <section id="home" className="mt-0">
        <div className="inline-block px-2 py-2 rounded bg-gradient-to-r from-[#ffabab] to-[#ff677d]">
          <h1 className="font-bold text-5xl px-2 py-2">Aarushi Ammavajjala.</h1>
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
          <h1 className="font-bold text-2xl py-3"> Education & Skills </h1>
          <ProjectBox 
  title="South Forsyth High School"
  org=""
  date="August 2021 - May 2025"
  desc=""
  color="#a8e6ce" />
  <div className="flex flex-wrap gap-8">
          <SkillBox title="Python" color="#a8e6ce" />
          <SkillBox title="Java" color="#b2dfdb" />
          <SkillBox title="Swift" color="#b3e5fc" />
          <SkillBox title="R" color="#ffabab" />
          <SkillBox title="Deep Learning" color="#b3e5fc" />
          <SkillBox title="Computer Vision" color="#b3e5fc" />
          <SkillBox title="NLP" color="#a8e6ce" />
          <SkillBox title="React" color="#ffabab" />
          <SkillBox title="Next.js" color="#ff677d" />
          <SkillBox title="JavaScript/TypeScript" color="#ffabab" />
          </div>
        </section>
        <section id="experience">
        <h1 className="font-bold text-2xl py-3"> Research and Work Experiences </h1>
        <div className="flex flex-wrap gap-8">
        <ProjectBox 
  title="AI Development Intern" 
  org="United Nations World Assembly of Youth" 
  date="January 2025" 
  desc="Coordinating AI Development across 140 international NGOs under the United Nations." 
  color="#a8e6ce" 
/>

<ProjectBox 
  title="Research Intern" 
  org="Stanford Department of Anesthesiology" 
  date="December 2024-Present" 
  desc="Predicting intraoperative hypotension from arterial blood waveforms using deep learning." 
  color="#b2dfdb" 
/>

<ProjectBox 
  title="Development Intern & Programming Project Manager" 
  org="Oracle" 
  date="August 2024-Present" 
  desc="Designed and implemented a billing system using OCI, APEX, SQL, & PL/SQL; directed FIFO debt management, payment application, and error handling, with delinquency predictions." 
  color="#b3e5fc" 
/>

<ProjectBox 
  title="Research Intern" 
  org="Stanford Center for Artificial Intelligence in Medicine and Imaging" 
  date="June-July 2024" 
  desc="Developed an unsupervised NLP radiology report classifier and ResNet-101 model for ultrasound analysis, creating a comprehensive pulmonary diagnostic tool." 
  color="#ffabab" 
/>

<ProjectBox 
  title="Development Intern" 
  org="Microsoft and Women of AT&T" 
  date="July 2023-January 2024" 
  desc="Utilized Swift, SQL, Dart, and JavaScript to develop JackTag, a health and safety mobile application and NFC wearable; presented to Microsoft and AT&T investors." 
  color="#ff677d" 
/>

<ProjectBox 
  title="Research Intern" 
  org="Cornell University & TSI" 
  date="June-August 2023" 
  desc="Developed a Graph Neural Network for binary state neuroimaging recognition (BrainNetworkTransformer) using Python." 
  color="#a8e6ce" 
/>

<ProjectBox 
  title="Research Intern" 
  org="Midwestern University" 
  date="August 2023-May 2024" 
  desc="Developed a transformer-based neural network to reduce anesthesia-induced aspiration morbidity." 
  color="#b2dfdb" 
/>        </div>
        </section>
      </main>
    </div>
  );
}
