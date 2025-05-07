import { ACProjectBox } from '../components/AwardCard';
import Navbar from '../components/header';

const awardPage = () => {
  return (
    <div>
      <div className="block mb-4 w-full">
        <Navbar />
      </div>

      <div className="flex items-center justify-center w-full">
        <div id="education" className="bg-white p-3 rounded-lg">
          <h1 className="text-4xl font-bold text-center underline text-black">
            Awards
          </h1>
        </div>
      </div>

      <div
         className="flex py-6 items-center justify-center w-full px-4"
           >  
        <div
          className="w-full max-w-5xl p-6 rounded-xl shadow-xl space-y-4 border border-black"
          style={{ background: 'linear-gradient(to bottom, #fbceb1, #ffcbdb)' }}
        >

<div className="border-l-4 border-[#000000] pl-4">
          <ACProjectBox
            title="National Winner (NCWIT Aspirations in Computing Award)"
            org="Top 1% of 4,000+"
          />
          </div>
          <div className="border-l-4 border-[#000000] pl-4">

          <ACProjectBox
            title="National Girls Who Code 20 Under 20 Winner"
          />
          </div>
          <ACProjectBox
            title="Nationwide Disney Dreamers Academy: Leadership Makeover Recipient" 
            org="Top 0.06% of 10,000+"
          />
          <ACProjectBox
            title="International Taco Bell Ambition Accelerator Finalist"
            org="Seed Funding Grantee"
           
          />
            <ACProjectBox
            title="13x National/International Hackathon Winner"
           
          />
          <ACProjectBox
            title="National Jane Street Visit Day Participant"
            org="Top 3% of 1,500+"
            
          />
          <ACProjectBox
            title="National Honorable Mention & Georgia Affiliate Winner (NCWIT Aspirations in Computing Award)" 
            org="Top 10% of 4,000+"
        
          />
          <ACProjectBox
            title="1st Honors at Georgia Science and Engineering Fair; 1st at Northwest Regional Science Fair"
            org="Top 10% in State"
         
          />
        </div>
      </div>
    </div>
  );
};

export default awardPage;
