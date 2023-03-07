import Link from 'next/link';

const FeaturedSection = () => (
  <div className="grid grid-cols-8 gap-4 mt-10 mb-20">
    <div className="col-span-full lg:grid-cols-2 lg:col-start-5 lg:col-span-7 flex justify-center">
      <img
        className="rounded-full w-1/2 md:w-72 lg:w-72"
        src="https://avatars.githubusercontent.com/u/2525914?v=4"
      />
    </div>
    <div className="col-span-full lg:grid-cols-2 lg:col-start-1 lg:row-start-1 lg:col-span-4 flex flex-col items-center text-center lg:text-left lg:items-start">
      <h2 className="text-2xl md:text-2xl lg:text-3xl m-auto mt-10">
        Making Coding Accessible and Fun for Everyone.
      </h2>
      <div className="flex mt-10 mb-2 w-full justify-between">
        <Link href="/blog" legacyBehavior>
          <span className="py-4 px-4 md:px-7 rounded-lg bg-opacity-75 bg-gradient-to-br from-blue-700 via-blue-800 to-gray-800 dark:text-white text-gray-300 hover:text-white text-lg ">
            Read Blogs
          </span>
        </Link>
        <Link href="https://twitter.com/shrutikapoor08" legacyBehavior>
          <span className="py-4 px-4 md:px-7 rounded-lg bg-opacity-75 bg-gradient-to-br from-blue-700 via-blue-800 to-gray-800 dark:text-white text-gray-300 hover:text-white text-lg ">
            Send a Hey! 👋
          </span>
        </Link>
      </div>
    </div>
  </div>
);

export default FeaturedSection;
