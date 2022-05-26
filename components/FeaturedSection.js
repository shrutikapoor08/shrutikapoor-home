import Link from 'next/link';

const FeaturedSection = () => (
  <div className="grid grid-cols-8 gap-4 mt-10 mb-20">
    <div className="col-span-full lg:grid-cols-2 lg:col-start-5 lg:col-span-7 flex justify-center">
      <img
        className="rounded-full w-1/2 md:w-72 lg:w-96"
        src="https://avatars.githubusercontent.com/u/2525914?v=4"
      />
    </div>
    <div className="col-span-full lg:grid-cols-2 lg:col-start-1 lg:row-start-1 lg:col-span-4 flex flex-col items-center text-center md:place-items-start lg:text-left lg:items-start">
      <h2 className="text-3xl md:text-4xl lg:text-5xl m-auto mt-10">
        On a mission to make learning web development easier for everyone.
      </h2>
      <div className="flex mt-10">
        <Link href="/blog">
          <a className="py-4 px-10 mr-10 rounded-lg bg-opacity-75 bg-gradient-to-br from-blue-700 via-blue-800 to-gray-800 dark:text-white text-gray-300 hover:text-white text-lg mt-2 mb-2">
            Read Blog
          </a>
        </Link>
        <Link href="https://twitter.com/shrutikapoor08">
          <a className="py-4 px-10 rounded-lg bg-opacity-75 bg-gradient-to-br from-blue-700 via-blue-800 to-gray-800 dark:text-white text-gray-300 hover:text-white text-lg mt-2 mb-2">
            Send a Hey! 👋
          </a>
        </Link>
      </div>
    </div>
  </div>
);

export default FeaturedSection;
