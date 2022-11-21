import Link from 'next/link';
import ArrowIcon from './ArrowIcon';

const FeaturedTalks = ({ talks }) => (
  <main className="w-full flex flex-col mt-24 mb-24 overflow-hidden">
    <div className="flex flex-row justify-between mb-10">
      <h2 className="text-xl lg:text-3xl w-auto"> Talks and Podcasts </h2>

      <Link
        href="/talks"
        className="border-0 focus:outline-none hover:text-blue-600 lg:hover:font-bold rounded text-base md:text-md"
      >
        Browse more talks
      </Link>
    </div>
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-10">
      {talks &&
        talks.map((talk) => (
          <li
            key={talk.filePath}
            className="rounded-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-40 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 last:border-b"
          >
            <Link
              as={`/talks/${talk.filePath.replace(/\.mdx?$/, '')}`}
              href={`/talks/[slug]`}
            >
              <div className="overflow-hidden rounded-lg cursor-pointer">
                {talk.data.link && (
                  <iframe
                    height="215"
                    width="100%"
                    src={talk.data.link}
                    title={talk.data.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
                <div className="py-4 px-3 block focus:outline-none focus:ring-4">
                  <h2 className="lg:text-lg md:text-xl font-semibold">
                    {talk.data.conference} - {talk.data.title}
                  </h2>
                </div>
              </div>
            </Link>
          </li>
        ))}
    </ul>
  </main>
);

export default FeaturedTalks;
