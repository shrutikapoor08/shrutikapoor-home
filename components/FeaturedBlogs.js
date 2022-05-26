import Link from 'next/link';
import ArrowIcon from './ArrowIcon';

const FeaturedBlogs = ({ posts }) => (
  <main className="w-full flex flex-col mt-32 mb-20 px-5 overflow-hidden">
    <div className="flex flex-row justify-between">
      <h2 className="text-3xl mb-10 w-auto"> Latest Blog Posts </h2>

      <Link href="/blog">
        <a className="border-0 py-2 px-8 focus:outline-none hover:text-blue-600 hover:font-bold rounded text-md">
          Read all articles
        </a>
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
            >
              <div className="overflow-hidden rounded-lg cursor-pointer">
                {post.data.featuredImage && (
                  <img src={post.data.featuredImage} />
                )}
                <a className="py-6 px-6 block focus:outline-none focus:ring-4">
                  <h2 className="lg:text-xl md:text-2xl font-semibold">
                    {post.data.title}
                  </h2>
                  {post.data.description && (
                    <p className="mt-3 mb-3 opacity-60">
                      {post.data.description}
                    </p>
                  )}

                  {post.data.date && (
                    <p className="uppercase mb-3 font-bold opacity-60">
                      {post.data.date}
                    </p>
                  )}
                  <ArrowIcon className="mt-4" />
                </a>
              </div>
            </Link>
          </li>
        ))}
    </ul>
  </main>
);

export default FeaturedBlogs;
