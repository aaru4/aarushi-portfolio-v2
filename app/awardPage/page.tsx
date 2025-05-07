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
                    className="w-full max-w-5xl p-6 rounded-xl shadow-xl space-y-4"
                    style={{ background: 'linear-gradient(to bottom, #fbceb1, #ffcbdb)' }}
                >

                    <div className="border-l-2 border-[#000000] pl-4">
                        <ACProjectBox
                            title="National Winner (NCWIT Aspirations in Computing Award)"
                            org="Top 1% of 4,000+"
                        />
                    </div>
                    <div className="border-l-2 border-[#000000] pl-4">

                        <ACProjectBox
                            title="National Girls Who Code 20 Under 20 Winner"
                        />
                    </div>
                    <div className="border-l-2 border-[#000000] pl-4">
                        <ACProjectBox
                            title="Nationwide Disney Dreamers Academy: Leadership Makeover Recipient"
                            org="Top 0.06% of 10,000+"
                        />
                    </div>
                    <div className="border-l-2 border-[#000000] pl-4">

                        <ACProjectBox
                            title="International Taco Bell Ambition Accelerator Finalist"
                            org="Seed Funding Grantee"

                        />
                    </div>
                    <div className="border-l-2 border-[#000000] pl-4">

                        <ACProjectBox
                            title="13x National/International Hackathon Winner"

                        />
                    </div>
                    <div className="border-l-2 border-[#000000] pl-4">

                        <ACProjectBox
                            title="National Jane Street Visit Day Participant"
                            org="Top 3% of 1,500+"
                        />
                    </div>
                    <div className="border-l-2 border-[#000000] pl-4">
                        <ACProjectBox
                            title="National Honorable Mention & Georgia Affiliate Winner (NCWIT Aspirations in Computing Award)"
                            org="Top 10% of 4,000+"
                        />
                    </div>
                    <div className="border-l-2 border-[#000000] pl-4">
                        <ACProjectBox
                            title="1st Honors at Georgia Science and Engineering Fair; 2x 1st Place at Northwest Regional Science Fair"
                            org="Top 10% in State"
                        />
                    </div>
                    <div className="border-l-2 border-[#000000] pl-4">
                        <ACProjectBox
                            title="1st & 2nd at Georgia State Technology Competition"
                            org="Scholarship Recipient"
                        />
                    </div>
                    <div className="border-l-2 border-[#000000] pl-4">
                        <ACProjectBox
                            title="Georgia Junior Science and Humanities Symposium Presenter"
                        />
                    </div>
                    <div className="border-l-2 border-[#000000] pl-4">
                        <ACProjectBox
                            title="16x Science Olympiad Awards"
                            org="National, State, and Regional"
                        />
                    </div>
                    <div className="border-l-2 border-[#000000] pl-4">

                        <ACProjectBox
                            title="21x Future Business Leaders of America (FBLA) Awards"
                            org="National, State, and Regional"

                        />
                    </div>
                    <div className="border-l-2 border-[#000000] pl-4">
                        <ACProjectBox
                            title="National American Computer Science League Finalist"
                        />
                    </div>
                    <div className="border-l-2 border-[#000000] pl-4">
                        <ACProjectBox
                            title="1st & 2nd place in Lanier Technology Competition"
                        />
                    </div>
                    <div className="border-l-2 border-[#000000] pl-4">
                        <ACProjectBox
                            title="Scholarship Winner"
                            org="Russ & Marilyn Cooper, Rotary Club, Sawnee EMC, U.S. JCI Senate, GVRA"
                        />
                    </div>
                    <div className="border-l-2 border-[#000000] pl-4">
                        <ACProjectBox
                            title="21x Future Business Leaders of America (FBLA) Awards"
                            org="National, State, and Regional"
                        />
                    </div>
                    <div className="border-l-2 border-[#000000] pl-4">
  <ACProjectBox
    title="State Winner in Georgia River of Words Poetry Contest"
    org="Top 4% of 2,000+"
  />
</div>
<div className="border-l-2 border-[#000000] pl-4">
  <ACProjectBox
    title="Gold Key, 2× Silver Key, and Honorable Mention in Scholastic Art & Writing Awards"
    org="Top 7% of 340,000+"
  />
</div>
<div className="border-l-2 border-[#000000] pl-4">
  <ACProjectBox
    title="7 Creative Writing Publications"
    org="The Disruptive Quarterly, A Celebration of Poets, World Hindu Council of America, Bow Seat Gallery, YOU-th Magazine"
  />
</div>
<div className="border-l-2 border-[#000000] pl-4">
  <ACProjectBox
    title="National High School Poetry Contest Finalist"
    org="Top 2% of 15,000+"
  />
</div>
<div className="border-l-2 border-[#000000] pl-4">
  <ACProjectBox
    title="1st Place in Bow Seat Ocean Awareness International Writing Contest"
    org="Top 0.025% of 4,000+"
  />
</div>
                </div>
            </div>
        </div>
    );
};

export default awardPage;
