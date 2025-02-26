import Link from 'next/link';
import Image from 'next/image';
import ArrowIcon from './ArrowIcon';

const FeaturedBlogs = ({ posts }) => (
  <main className="w-full flex flex-col mt-24 mb-24 overflow-hidden">
    <div className="flex flex-row justify-between mb-10">
      <h2 className="text-xl lg:text-3xl w-auto"> Latest Blog Posts </h2>

      <Link href="/blog" legacyBehavior passHref>
        <span className="border-0 focus:outline-none hover:text-blue-600 lg:hover:font-bold rounded text-base md:text-md cursor-pointer hover:underline">
          Read all articles
        </span>
      </Link>
    </div>
    <ul className="grid md:grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
      {posts &&
        posts.map((post) => (
          <li
            key={post.filePath}
            className="rounded-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-40 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 last:border-b"
          >
            <Link
              as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
              href={`/posts/[slug]`}
              passHref
              legacyBehavior
            >
              <div className="overflow-hidden rounded-lg cursor-pointer">
                {post.data.featuredImage && (
                  <Image src={post.data.featuredImage} />
                )}
                <div className="py-6 px-6 block focus:outline-none focus:ring-4">
                  <h2 className="lg:text-xl md:text-2xl font-semibold">
                    {post.data.title}
                  </h2>
                  {post.data.description && (
                    <p className="mt-3 mb-3 opacity-60 line-clamp-5">
                      {post.data.description}
                    </p>
                  )}

                  <div className="flex justify-between items-start mt-5">
                    {post.data.date && (
                      <p className="uppercase mb-3 font-bold opacity-60">
                        {post.data.date}
                      </p>
                    )}
                    <ArrowIcon />
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
    </ul>
  </main>
);

export default FeaturedBlogs;
