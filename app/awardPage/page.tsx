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

      <div className="flex py-6 items-center justify-center w-full px-4">
        <div
          className="w-full max-w-5xl p-6 rounded-xl shadow-xl space-y-4"
          style={{
            background: 'linear-gradient( #fbceb1, #ffcbdb)',
          }}
        >
          <ACProjectBox
            title="National Winner (NCWIT Aspirations in Computing Award)"
            org="Top 1% of 4,000+"
            color="#ffffff"
            borderColor="#e0b594"
          />
          <ACProjectBox
            title="National Girls Who Code 20 Under 20 Winner"
            color="#ffffff"
            borderColor="#86b0a0"
          />
          <ACProjectBox
            title="Nationwide Disney Dreamers Academy: Leadership Makeover Recipient" 
            org="Top 0.06% of 10,000+"
            color="#6cd0d0"
            borderColor="#519e9e"
          />
          <ACProjectBox
            title="International Taco Bell Ambition Accelerator Finalist"
            org="Seed Funding Grantee"
            color="#ffcbdb"
            borderColor="#fa98b6"
          />
        </div>
      </div>
    </div>
  );
};

export default awardPage;
