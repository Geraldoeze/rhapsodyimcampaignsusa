import DonateSection from "./DonateContent";


const HomeContent = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="container  mx-auto flex h-22 items-end">
          <h2 className="uppercase text-[#d1a018] py-1 px-4 text-2xl md:text-4xl tracking-wider">
            Rhapsody IM Campaigns International
          </h2>
        </div>
      </div>
      <div className="container mt-8 mx-auto">
        <div className=" my-6 px-4">
          <h4 className="uppercase text-2xl md:text-4xl text-center tracking-wide">
            RHAPSODY OF REALITIES ….TO THE ENDS OF THE EARTH-Northshore
            Massachusetts
          </h4>
          <p
            className="text-center text-xl md:text-2xl  my-4"
            style={{ fontFamily: "Outfit" }}
          >
            Rhapsody of Realities Daily Devotional is the world’s most freely
            distributed and translated daily devotional and it is now in all
            known languages of the World. It is a life guide that brings you a
            fresh perspective on God’s Word every day. It features the day’s
            topic, a theme scripture, the day’s message, the daily confession,
            and the Bible reading plan segment. It has been a vital tool in
            transforming millions of lives across the world. Not only does it
            ensure that the Gospel of Jesus Christ spreads to the ends of the
            earth, it has been the answer to the cries of many, and countless
            testimonies prove this to be true. Support us to sponsor 1,000,000
            copies around the world.
          </p>
        </div>
        <div className="py-6 px-2 flex flex-col md:flex-row">
          <div className="border-4 border-[#ffffff4d] w-full md:w-[65%]">
            <img width={"100%"} src="assets/images/pastor.jpg" alt="" />
          </div>
          <DonateSection />
        </div>
      </div>
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto ">
          <div className="flex px-2 flex-col md:flex-row justify-between">
            <div className="w-full md:w-[65%]">
              <div className=" bg-white border border-gray-200 my-8 p-8">
                <h2 className="font-medium text-black py-1 text-2xl">
                  About the Campaign
                </h2>
                <p
                  className="text-black text-xs leading-[24px]"
                  style={{ fontFamily: "Outfit" }}
                >
                  Rhapsody of Realities Daily Devotional, is the world’s most
                  freely distributed and translated daily devotional and it is
                  now in all known languages of the World. It is a life guide
                  that brings you a fresh perspective from God’s Word everyday.
                  It features the day’s topic, a theme scripture, the day’s
                  message, the daily confession and the Bible reading plan
                  segment. It has been a vital tool in transforming millions of
                  lives across the world. Not only does it ensure that the
                  Gospel of Jesus Christ spreads to the ends of the earth, it
                  has been the answer to the cries of many and countless
                  testimonies prove this to be true. Support us to sponsor
                  1,000,000 copies around the world.
                </p>
              </div>
              <div className=" bg-white border border-gray-200 my-8 p-8">
                <div className="flex justify-center mb-8">
                  <h2 className="font-medium text-black border-b-2 border-gray-200 py-1 px-2 text-2xl">
                    CAMPAIGN HEROES
                  </h2>
                </div>
                <p
                  className="text-black text-xs leading-[24px]"
                  style={{ fontFamily: "Outfit" }}
                >
                  No donors yet. be the first!
                </p>
              </div>
              <div className=" bg-white border border-gray-200 my-8 p-12">
                <div className=" mb-8">
                  <h2 className="font-medium text-black text-xs">
                    Your email address will not be published. Required fields
                    are marked *
                  </h2>
                </div>
                <form className="flex flex-wrap -mx-3 mb-6">
                  <textarea
                    className="bg-gray-200 w-full p-4 text-gray-700"
                    placeholder="Leave your comment *"
                    cols={4}
                    rows={6}
                  />
                  <div className="my-4 flex gap-4 w-full">
                    <input
                      type="text"
                      className="bg-gray-200 p-3 w-full text-gray-700"
                      placeholder="Name *"
                    />
                    <input
                      type="text"
                      className="bg-gray-200 p-3 w-full text-gray-700"
                      placeholder="Website *"
                    />
                  </div>
                  <div className="w-full">
                    <input
                      type="email"
                      className="bg-gray-200 p-3 w-full text-gray-700"
                      placeholder="* Email"
                    />
                  </div>
                  <div className="my-4">
                    <button className=" border-2 border-neutral-900 text-gray-800 py-2 px-6 rounded-sm hover:bg-gray-900 hover:text-gray-100">
                      POST COMMENT
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-full md:w-[32%]">
              <div className=" bg-white border border-gray-200 my-8 p-8">
                <div className="flex justify-center mb-8">
                  <h2 className="font-medium text-black border-b-2 border-gray-200 py-1 px-2 text-2xl">
                    CAMPAIGN HEROES
                  </h2>
                </div>
                <div className="flex gap-5">
                  <div>
                    <img
                      src="assets/images/profile.jpg"
                      alt=""
                      width={120}
                      height={120}
                      style={{ borderRadius: "4px" }}
                    />
                  </div>
                  <div>
                    <h3 className="uppercase text-sm text-[#d1a018] mb-3">
                      Pastor Samson Increase
                    </h3>
                    <p className="text-gray-800">1 campaign</p>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-gray-400 my-4" />
                <div>
                  <h6 className="text-gray-900 text-sm">
                    My name is Pastor Samson Increase, am the Group Pastor of
                    Christ Embassy Northshore Group, under Christ Embassy DALLAS
                    ZONE USA REGION 2.
                  </h6>
                  <ul  className="my-4">
                    <li className="text-[#d1a018]">Website</li>
                    <li className="text-[#d1a018]">Facebook</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
