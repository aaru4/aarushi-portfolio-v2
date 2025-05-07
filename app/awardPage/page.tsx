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

      <div className="flex items-center justify-center w-full px-4">
        <div
          className="w-full max-w-5xl p-6 rounded-xl bg-white shadow-xl space-y-4"
          style={{
            border: '4px solid',
            borderImage: 'linear-gradient(to right, #b1ddc9, #6cd0d0) 1',
          }}
        >
          <ACProjectBox
            title="AI Development Intern"
            org="Georgia Institute of Technology"
            color="#fbceb1"
            borderColor="#e0b594"
          />
          <ACProjectBox
            title="STEM@GTRI Intern"
            org="Georgia Tech Research Institute"
            color="#b1ddc9"
            borderColor="#86b0a0"
          />
          <ACProjectBox
            title="AI Development Intern"
            org="United Nations WAY"
            color="#6cd0d0"
            borderColor="#519e9e"
          />
          <ACProjectBox
            title="AI Research Intern"
            org="Stanford Department of Anesthesiology"
            color="#ffcbdb"
            borderColor="#fa98b6"
          />
        </div>
      </div>
    </div>
  );
};

export default awardPage;
