import Image from 'next/image';
import Navbar from './components/header';
import { IndBox } from './components/IndependentCard';
import { ProjectBox } from './components/ProjectCard';
import { SkillBox } from './components/SkillCard';
import { UCProjectBox } from './components/UnclickableCard';

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
                  className="rounded hover:bg-[#ffabab] transition-opacity-80 duration-200"
                />
            </a>
        </section>
        <h1 id="education" className="font-bold text-2xl py-3"> Education & Skills </h1>
        <section className="flex gap-8">
  <div className="w-1/3">
    <UCProjectBox
      title="South Forsyth High School"
      org=""
      date="August 2021 - May 2025"
      desc=""
      color="#a8e6ce"
    />
  </div>

  <div className="w-2/3 pl-15">
    <div className="grid grid-cols-3 gap-3">
      <SkillBox title="Python" color="#a8e6ce" />
      <SkillBox title="Java" color="#b2dfdb" />
      <SkillBox title="Swift" color="#b3e5fc" />
      <SkillBox title="SQL" color="#ffabab" />
      <SkillBox title="Deep Learning" color="#ff677d" />
      <SkillBox title="Computer Vision" color="#a8e6ce" />
      <SkillBox title="NLP" color="#b2dfdb" />
      <SkillBox title="R" color="#b3e5fc" />
      <SkillBox title="JavaScript" color="#ffabab" />
    </div>
  </div>
</section>
        <section id="experience">
        <h1 className="font-bold text-2xl py-3"> Recent Experiences </h1>
        <div className="flex flex-wrap gap-8">
        <a
              href="https://sites.google.com/view/riarriaga/home?authuser=0"
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
<a
              href="https://www.way.org.my/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4"
              >
        <ProjectBox 
  title="AI Development Intern" 
  org="United Nations" 
  date="January 2025 - Present" 
  desc="Coordinating AI development across 140+ youth-led international NGOs." 
  color="#b2dfdb"
/>
</a>
<a
              href="https://med.stanford.edu/anesthesia/research.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4"
              >
<ProjectBox 
  title="AI Research Intern" 
  org="Stanford Department of Anesthesiology" 
  date="January 2025 - Present"
  desc="Predicting hypotension from arterial blood waveforms using deep learning." 
  color="#ffabab" 
/>
</a>

<ProjectBox 
  title="Development Intern" 
  org="Oracle" 
  date="August 2024 - Present" 
  desc="Designed and implemented a billing system using OCI, APEX, SQL, & PL/SQL; directed FIFO debt management, payment application, and error handling, with delinquency predictions." 
  color="#ff677d"
/>
<a
              href="https://colab.research.google.com/drive/13WmNs8kbJvd3VdkFMPisvM35sUEvxTSn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4"
              >
<ProjectBox 
  title="AI Research Intern" 
  org="Stanford Center for Artificial Intelligence in Medicine and Imaging" 
  date="June - July 2024" 
  desc="1 of 20 selected nationwide. Developed high-accuracy pulmonary diagnostic system.  RadGraph for unsupervised radiology report classifier; used outputted predictions to train a ResNet ultrasound analysis model." 
  color="#a8e6ce" 
/>
</a>

<ProjectBox
  title="Development Intern" 
  org="Microsoft" 
  date="July 2023 - April 2024" 
  desc="Utilized Swift, SQL, Dart, and JavaScript to develop JackTag, a health and safety mobile application and NFC wearable that streamlines communication of critical medical information between crisis victims and first responders. Presented to Microsoft and AT&T investors." 
  color="#b2dfdb" 
/>
<a
              href="https://talaria.org/papers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4"
              >
<ProjectBox 
  title="AI Research Intern" 
  org="TSI + Cornell University" 
  date="June - August 2023" 
  desc="Developed a graph neural network for binary state neuroimaging recognition. Accepted to TSI (~10% of 850), matched at Cornell University. Published paper and spoke at Talaria International Conference."
  color="#ffabab"
/>
</a>
<ProjectBox 
  title="Awards" 
  org="hackas, how many shall i put?" 
  date="tbd" 
  desc="ncwit gwc taco bell ?"
  color="#ff677d"
/>
          </div>
        </section>
        <section id="projects">
        <h1 className="font-bold text-2xl py-3"> Recent Projects </h1>
        <div className="flex flex-wrap gap-8">
        <a
              href="https://www.youtube.com/watch?v=_bVhGnBFY90"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4"
              >
        <IndBox 
  title="MelaninMed" 
  org="A deep learning powered AI mobile application for racially equitable skin cancer detection." 
  color="#a8e6ce"
/>
</a>
<a
              href="https://github.com/aaru4/POCUS-Net/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4"
              >
<IndBox 
  title="POCUS-Net" 
  org="A highly-accurate transformer-based neural network to automate gastric POCUS and reduce anesthesia-induced aspiration morbidity." 
  color="#b2dfdb"
/>
</a>
<a
              href="https://aaru7811.wixsite.com/climicideml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4"
              >
<IndBox 
  title="ClimiCide" 
  org="A gradient boosting regressor, trained on a custom dataset, to predict increases in climate-change-induced suicides." 
  color="#b3e5fc"
/>
</a>
    
          </div>
        </section>
        <h1 className="text-l"> Copyright 2024 Aarushi Ammavajjala. All rights reserved. </h1>
      </main>
    </div>
  );
}
