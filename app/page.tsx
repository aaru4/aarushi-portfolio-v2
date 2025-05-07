import { Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ECProjectBox } from './components/EducationCard';
import Navbar from './components/header';
import { IndBox } from './components/IndependentCard';
import { SkillBox } from './components/SkillCard';
import { UCProjectBox } from './components/UnclickableCard';

// color palette: #fbceb1, #b1ddc9, #6cd0d0, #ffcbdb

export default function Home() {
  return (
<div className="grid grid-rows-[auto_1fr] min-h-screen w-screen p-0 m-0">
<div className="block w-full">
    <Navbar></Navbar>
  </div>
  <main className="flex flex-col gap-6 sm:gap-8 row-start-2 items-start p-0 m-0 w-screen grow">
  <div>
  <section id="home" className="m-0 p-0 w-full">
    <div className="flex flex-col md:flex-row h-screen w-screen">

    <div className="w-screen md:w-1/2 h-1/2 md:h-full flex items-center rounded-xl justify-center bg-gradient-to-r from-[#b1ddc9] to-[#6cd0d0] p-6 sm:p-8 md:p-10">
    <div className="text-center md:text-left px-6">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl py-2">
            Aarushi Ammavajjala.
          </h1>
          <h2 className="font-bold text-xl sm:text-2xl md:text-3xl py-2">
            Developer
          </h2>
          <p className="text-base sm:text-lg md:text-xl py-2">
            Studying Computer Science @ Georgia Institute of Technology
          </p>
          <div className="mt-4 flex gap-4 justify-center md:justify-start">
  <a href="mailto:aaru7811@gmail.com">
    <Mail size={40} color="#000" className="hover:text-[#ffcbdb] transition-colors duration-300" />
  </a>
  <a
    href="https://www.linkedin.com/in/aarushi-ammavajjala-207b49238/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin size={40} color="#000" className="hover:text-[#6cd0d0] transition-colors duration-300" />
  </a>
</div>

        </div>
      </div>


      <div className="w-full md:w-1/2 h-auto md:h-full flex items-center justify-center bg-white py-8 px-4">
        <Image
          src="/profile2.jpg"
          alt="Picture of Aarushi"
          width={350}
          height={350}
          className="rounded-full object-cover aspect-square"
        />
    
      </div>
    </div>
</section>  
</div>
{ /* color palette: #fbceb1, #b1ddc9, #6cd0d0, #ffcbdb */ }
<section className="w-full bg-white py-3 px-2 sm:px-2 md:px-10 sticky top-0 z-50 shadow-sm">
  <nav className="flex flex-col lg:flex-row items-center justify-between gap-3">
    
    <div className="w-full mb-0.5 lg:mb-0 lg:w-1/3 text-center group transition-transform duration-300 transform hover:scale-105 cursor-pointer border-b-4 border-transparent hover:border-pink-400">
      <div className="rounded-lg py-3 px-2 bg-gradient-to-br from-[#ffcbdb] to-[#ffcbdb90] shadow-md">
        <Link href="#education" passHref>
          <a className="text-lg sm:text-xl md:text-2xl text-black tracking-wide">
            Education & Skills
          </a>
        </Link>
      </div>
    </div>

    <div className="w-full mb-0.5 lg:mb-0 lg:w-1/3 text-center group transition-transform duration-300 transform hover:scale-105 cursor-pointer border-b-4 border-transparent hover:border-[#e89ea0]">
      <div className="rounded-lg py-3 px-2 bg-gradient-to-br from-[#fbceb180] to-[#fbceb1] shadow-md">
        <Link href="#exp" passHref>
        <a className="text-lg sm:text-xl md:text-2xl text-black tracking-wide">
            Recent Experiences
          </a>
        </Link>
      </div>
    </div>

    <div className="w-full mb-0.5 lg:mb-0 lg:w-1/3 text-center group transition-transform duration-300 transform hover:scale-105 cursor-pointer border-b-4 border-transparent hover:border-[#87bfb3]">
      <div className="rounded-lg py-3 px-2 bg-gradient-to-br from-[#b1ddc980] to-[#b1ddc9] shadow-md">
         <Link href="#proj" passHref>
         <a className="text-lg sm:text-xl md:text-2xl text-black tracking-wide">
            Recent Projects
          </a>
        </Link>
      </div>
    </div>
  </nav>
</section >
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
    />
  </div>
  <div className="w-full px-2">
    <ECProjectBox
      title="South Forsyth High School"
      org="NMSQT Finalist, AP Scholar with Distinction"  
      color="#ffcbdb"
    />
  </div>

  <div className="w-full">
  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-7 gap-3 gap-x-2 sm:gap-4">
    {/* Languages */}
    <SkillBox title="Python" color="#fbceb1" />
    <SkillBox title="Java" color="#fbceb1" />
    <SkillBox title="Swift" color="#fbceb1" />
    <SkillBox title="SQL" color="#fbceb1" />
    <SkillBox title="R" color="#fbceb1" />
    <SkillBox title="JavaScript" color="#fbceb1" />
    <SkillBox title="HTML" color="#fbceb1" />
    <SkillBox title="CSS" color="#fbceb1" />
    <SkillBox title="MATLAB" color="#fbceb1" />
    
    {/* AI & Machine Learning */}
    <SkillBox title="TensorFlow" color="#ffcbdb" />
    <SkillBox title="PyTorch" color="#ffcbdb" />
    <SkillBox title="scikit-learn" color="#ffcbdb" />
    <SkillBox title="OpenCV" color="#ffcbdb" />
    <SkillBox title="SpaCy" color="#ffcbdb" />
    <SkillBox title="RadGraph" color="#ffcbdb" />

    {/* Data Analysis */}
    <SkillBox title="Pandas" color="#b1ddc9" />
    <SkillBox title="NumPy" color="#b1ddc9" />
    <SkillBox title="Matplotlib" color="#b1ddc9" />
    <SkillBox title="Tableau" color="#b1ddc9" />
    <SkillBox title="AWS" color="#b1ddc9" />
    <SkillBox title="Firebase" color="#b1ddc9" />
    <SkillBox title="OCI" color="#b1ddc9" />
    <SkillBox title="APEX" color="#b1ddc9" />
    <SkillBox title="Microsoft Suite" color="#b1ddc9" />

    {/* General Skills */}
    <SkillBox title="Computer Vision" color="#6cd0d0" />
    <SkillBox title="NLP" color="#6cd0d0" />
    <SkillBox title="Web Development" color="#6cd0d0" />
    <SkillBox title="App Development" color="#6cd0d0" />
  </div>
    </div>
</section>

        <section id="exp">
        <div className="flex items-center justify-center w-full">
  <div className="bg-white p-3 pb-12 rounded-lg">
    <h1 className="text-4xl font-bold text-center bg-clip-text underline text-black bg-gradient-to-r from-[#ffcbdb] to-[#fbceb1]">
      Recent Experience
    </h1>
  </div>
</div>  
<div className="w-screen grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center gap-6 pt-6 px-6">
              <UCProjectBox
                title="AI Development Intern"
                org="Georgia Institute of Technology"
                date="AUG 2025"
                desc="Computational creativity & AI-powered game generation. More details coming soon."
                color="#fbceb1"
              />
            <UCProjectBox
                title="STEM@GTRI Intern"
                org="Georgia Tech Research Institute"
                date="JUNE - JULY 2025"
                desc="Details coming soon."
                color="#b1ddc9"
              />
              <UCProjectBox
                title="AI Development Intern"
                org="United Nations WAY"
                date="JAN 2025 - PRESENT"
                desc="Details coming soon."
                color="#6cd0d0"
              />
                <UCProjectBox
                title="AI Research Intern"
                org="Stanford Department of Anesthesiology"
                date="JAN 2025 - PRESENT"
                desc="Predicting hypotension from arterial blood waveforms using deep learning. More details coming soon."
                color="#ffcbdb"
              />
         
            <UCProjectBox
              title="Development Intern"
              org="Oracle"
              date="AUG 2024 - MAY 2025"
              desc="Designed and implemented a billing system using OCI, APEX, SQL, & PL/SQL; directed FIFO debt management, payment application, and error handling, with delinquency predictions."
              color="#fbceb1"
            />

              <UCProjectBox
                title="AI Research Intern"
                org="Stanford Center for Artificial Intelligence in Medicine and Imaging"
                date="JUNE - JULY 2024"
                desc="1 of 20 selected nationwide. Developed high-accuracy pulmonary diagnostic system.  RadGraph for unsupervised radiology report classifier; ResNet ultrasound analysis model."
                color="#b1ddc9"
              />

            <UCProjectBox
              title="Development Intern"
              org="Microsoft"
              date="JULY 2023 - APR 2024"
              desc="Utilized Swift, SQL, Dart, and JavaScript to develop JackTag, a mobile application and NFC wearable that streamlines communication of medical information between crisis victims and first responders. Presented to Microsoft/AT&T investors."
              color="#6cd0d0"
            />
           <UCProjectBox
                title="AI Research Intern"
                org="TSI + Cornell University"
                date="JUNE - AUG 2023"
                desc="Developed a graph neural network for binary state neuroimaging recognition. Accepted to TSI (~10% of 850), matched at Cornell University. Published paper and spoke at Talaria International Conference."
                color="#ffcbdb"
              />
          
            <UCProjectBox
              title="AI Research Intern"
              org="Midwestern University"
              date="AUG 2023 - APR 2024"
              desc="Developed a two-prong neural network to automate gastric point-of-care ultrasound. Segments antrum, classifies content, identifies diameters, calculates operable volume, and outputs aspiration risk."
              color="#fbceb1"
            />
          </div>
        </section>

        <section id="proj">
        <div className="flex items-center justify-center w-full">
  <div id="proj" className="bg-white p-3 pb-10 pt-10 rounded-lg">
    <h1 className="text-4xl font-bold text-center bg-clip-text underline text-black bg-gradient-to-r from-[#ffcbdb] to-[#fbceb1]">
      Recent Projects
    </h1>
  </div>
</div>    
<div className="w-screen grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center gap-6 pt-6 px-6">
          <a
              href="https://github.com/aaru4/mediScript"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4"
            >
              <IndBox
                title="MediScript"
                org="A custom-built, domain-specific language designed for medical diagnostics and treatment planning, democratizing AI for healthcare professionals."
                color="#fbceb1"
              />
            </a>
            <a
              href="https://www.youtube.com/watch?v=-zZfaS5J5Wc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4"
            >
              <IndBox
                title="MelaninMed"
                org="A deep learning powered AI mobile application for racially equitable skin cancer detection."
                color="#b1ddc9"
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
                org="A highly-accurate transformer-based classification model to reduce anesthesia-induced aspiration morbidity."
                color="#6cd0d0"
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
                color="#ffcbdb"
              />
            </a>

          </div>
        </section>
        <h1 className="text-l px-2"> Copyright 2025 Aarushi Ammavajjala. All rights reserved. </h1>
      </main>
    </div>
  );
}


