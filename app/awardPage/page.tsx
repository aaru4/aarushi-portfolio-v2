import { Award, BookOpen, Trophy } from 'lucide-react';
import { ACProjectBox } from '../components/AwardCard';
import PageHeader from '../components/PageHeader';

const technicalAwards = [
  { title: 'National Winner (NCWIT Aspirations in Computing Award)', org: 'Top 1% of 4,000+' },
  { title: 'National Girls Who Code 20 Under 20 Winner' },
  {
    title: 'Nationwide Disney Dreamers Academy: Leadership Makeover Recipient',
    org: 'Top 0.06% of 10,000+',
  },
  {
    title: 'International Taco Bell Ambition Accelerator Finalist',
    org: 'Seed Funding Grantee',
  },
  { title: '13x National/International Hackathon Winner' },
  { title: 'National Allstate Foundation Youth Service Summit', org: 'Top 5%' },
  { title: 'National Jane Street Visit Day Participant', org: 'Top 3% of 1,500+' },
  { title: 'NMSQT Finalist', org: 'Top 1% of 1.5 million+ PSAT takers' },
  {
    title: 'National Honorable Mention (NCWIT Aspirations in Computing Award)',
    org: 'Top 10% of 4,000+',
  },
  { title: '1st & 4th Honors at Georgia Science and Engineering Fair', org: 'Top 10% in State' },
  { title: '1st & 2nd at Georgia State Technology Competition', org: 'Scholarship Recipient' },
  { title: 'Georgia Junior Science and Humanities Symposium Presenter' },
  { title: 'National American Computer Science League Finalist' },
  { title: 'Georgia Affiliate Winner (NCWIT Aspirations in Computing Award)' },
  { title: '1st & 2nd place in Lanier Technology Competition' },
  { title: 'Oracle Intern of the Year' },
  { title: '2x 1st Place at Northwest Regional Science Fair' },
  { title: 'Silver Presidential Volunteer Service Award' },
];

const academicAwards = [
  { title: '16x Science Olympiad Awards', org: '4x National Winner, 7x State Winner' },
  {
    title: '21x Future Business Leaders of America (FBLA) Awards',
    org: '2x National Winner, 7x State Winner',
  },
];

const creativeAwards = [
  {
    title: '1st Place in Bow Seat Ocean Awareness International Writing Contest',
    org: 'Top 0.025% of 4,000+',
  },
  {
    title: 'Gold Key, 2× Silver Key, and Honorable Mention in Scholastic Art & Writing Awards',
    org: 'Top 7% of 340,000+',
  },
  { title: 'State Winner in Georgia River of Words Poetry Contest', org: 'Top 4% of 2,000+' },
  { title: 'National High School Poetry Contest Winner', org: 'Top 2% of 15,000+' },
  {
    title: '8 Creative Writing Publications',
    org: 'The Disruptive Quarterly, A Celebration of Poets, American High School Poets, World Hindu Council of America, Bow Seat Gallery, YOU-th Magazine',
  },
];

const sections = [
  { label: 'Technical Achievements', icon: Trophy, color: '#fbceb1', items: technicalAwards },
  { label: 'Academic Achievements', icon: Award, color: '#b1ddc9', items: academicAwards },
  { label: 'Creative Achievements', icon: BookOpen, color: '#ffcbdb', items: creativeAwards },
];

const awardPage = () => {
  return (
    <div>
      <PageHeader title="Awards" />

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-6 sm:px-8">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <div
              key={section.label}
              className="rounded-2xl p-6 shadow-sm sm:p-8"
              style={{ background: `linear-gradient(160deg, ${section.color}55, ${section.color})` }}
            >
              <div className="mb-4 flex items-center gap-2">
                <Icon size={22} color="var(--ink)" />
                <h2 className="text-lg font-bold text-[var(--ink)]">{section.label}</h2>
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
                {section.items.map((item) => (
                  <div
                    key={item.title}
                    className="border-l-2 border-[var(--ink)]/25 pl-4"
                  >
                    <ACProjectBox title={item.title} org={item.org} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default awardPage;
