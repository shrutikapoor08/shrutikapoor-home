import Link from 'next/link';

const FeaturedSection = () => (
  <div className="grid grid-cols-8 gap-4 mt-12 mb-12">
    <div className="col-span-full lg:grid-cols-2 lg:col-start-5 lg:col-span-7 flex justify-center">
      <img
        className="rounded-2xl w-1/2 md:w-72 lg:w-72"
        src="https://avatars.githubusercontent.com/u/2525914?v=4"
      />
    </div>
    <div className="col-span-full lg:grid-cols-2 lg:col-start-1 lg:row-start-1 lg:col-span-4 flex flex-col items-center text-center lg:text-left lg:items-start">
      <h2 className="text-2xl md:text-2xl lg:text-3xl m-auto mt-10">
        Making web development accessible and fun for everyone.
      </h2>
      <div className="flex flex-col space-y-6 text-center">
        <Link
          href="https://www.youtube.com/channel/UCbB6Gh3UPI9lUUnPGYMz2ew"
          legacyBehavior
        >
          <span className="bg-indigo-500 border-0 py-4 px-8 rounded-full  text-white hover:font-bold ">
            Watch YouTube
          </span>
        </Link>
        <Link href="https://bit.ly/shruti-discord" legacyBehavior>
          <span className="bg-indigo-500 border-0 py-4 px-8 rounded-full  text-white hover:font-bold ">
            Join our Discord
          </span>
        </Link>
      </div>
    </div>
  </div>
);

export default FeaturedSection;
