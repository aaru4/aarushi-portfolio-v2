import { BarChart, Code, Cpu, Folder } from 'lucide-react';
import { ECProjectBox } from '../components/EducationCard';
import { SkillBox } from '../components/SkillCard';
import PageHeader from '../components/PageHeader';

const skillGroups = [
  {
    label: 'Programming',
    icon: Code,
    color: '#fbceb1',
    skills: [
      'Python',
      'SQL',
      'Java',
      'Swift',
      'JavaScript',
      'TypeScript',
      'R',
      'MATLAB',
      'HTML/CSS (Tailwind)',
    ],
  },
  {
    label: 'AI & ML',
    icon: Cpu,
    color: '#ffcbdb',
    skills: [
      'PyTorch',
      'TensorFlow',
      'scikit-learn',
      'OpenCV',
      'SpaCy',
      'RadGraph',
      'ResNet',
      'GNNs',
      'Transformers',
    ],
  },
  {
    label: 'Data & Cloud',
    icon: BarChart,
    color: '#b1ddc9',
    skills: [
      'Pandas',
      'NumPy',
      'Tableau',
      'AWS',
      'GCP/BigQuery',
      'Firebase',
      'Oracle Cloud (OCI)',
      'APEX',
      'Simulink',
    ],
  },
  {
    label: 'Tools & Frameworks',
    icon: Folder,
    color: '#6cd0d0',
    skills: ['Git', 'CI/CD', 'React', 'Next.js', 'Microsoft Suite'],
  },
];

const eduPage = () => {
  return (
    <div>
      <PageHeader
        title="Education & Skills"
        subtitle="Coursework, tools, and technologies I build with."
      />

      <section className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-6 sm:px-8">
        <ECProjectBox
          title="Georgia Institute of Technology"
          org="B.S. in Computer Science · GPA: 3.9"
          color="#fbceb1"
          borderColor="#e0b594"
        />
        <ECProjectBox
          title="South Forsyth High School"
          org="NMSQT Finalist, AP Scholar with Distinction"
          color="#ffcbdb"
          borderColor="#fa98b6"
        />
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-4 sm:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div key={group.label} className="flex flex-col items-center text-center">
                <div
                  className="flex h-20 w-20 items-center justify-center rounded-full shadow-sm"
                  style={{ backgroundColor: group.color }}
                >
                  <Icon size={40} color="var(--ink)" />
                </div>
                <span className="mt-3 text-sm font-semibold text-[var(--ink)]">
                  {group.label}
                </span>
                <div className="mt-4 flex w-full flex-col gap-2">
                  {group.skills.map((skill) => (
                    <SkillBox key={skill} title={skill} color={group.color} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default eduPage;
