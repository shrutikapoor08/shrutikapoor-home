import Link from 'next/link';

const FeaturedSection = () => (
  <div className="grid grid-cols-8 gap-4 mt-12 mb-12">
    <div className="col-span-full lg:grid-cols-2 lg:col-start-5 lg:col-span-7 flex lg:justify-end justify-center">
      <img
        className="rounded-full w-1/2 md:w-72 lg:w-80"
        src="https://avatars.githubusercontent.com/u/2525914?v=4"
      />
    </div>
    <div className="col-span-full lg:grid-cols-2 lg:col-start-1 lg:row-start-1 lg:col-span-4 flex flex-col justify-center text-center lg:text-left lg:items-start">
      <h2 className="text-2xl md:text-2xl lg:text-4xl mt-10 mb-10">
        On a mission to make you the best developer you are meant to be.
      </h2>
      <div className="flex flex-row w-full justify-between text-center">
        <div>
          <Link
            href="https://www.youtube.com/channel/UCbB6Gh3UPI9lUUnPGYMz2ew"
            legacyBehavior
          >
            <span className="bg-indigo-500 text-2xl  font-medium py-4 px-4 text-white  hover:bg-white hover:text-indigo-500 rounded-xl">
              Watch Tutorials
            </span>
          </Link>
        </div>
        <div>
          <Link href="https://bit.ly/shruti-discord" legacyBehavior>
            <span className="bg-indigo-500 text-2xl  font-medium py-4 px-4 text-white hover:bg-white hover:text-indigo-500 rounded-xl">
              Ask a question
            </span>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default FeaturedSection;
