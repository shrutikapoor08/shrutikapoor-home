import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import LayoutFullWidth, {
  GradientBackground,
} from '../components/LayoutFullWidth';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

const NUM_LATEST = 3;

const getLatestBlogPosts = (posts) => {
  return posts.slice(0, NUM_LATEST);
};

const getOlderBlogPosts = (posts) => {
  return posts.slice(NUM_LATEST, posts.length - 1);
};

const CardBlogPost = ({ post }) => {
  return (
    <li
      key={post.filePath}
      className="rounded-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-40 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 last:border-b mb-12"
    >
      <Link
        as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
        href={`/posts/[slug]`}
        legacyBehavior
      >
        <div className="overflow-hidden rounded-lg cursor-pointer">
          {post.data.featuredImage && <img src={post.data.featuredImage} />}
          <div className="py-6 px-6 block focus:outline-none focus:ring-4">
            <h2 className="lg:text-xl md:text-xl font-semibold">
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
  );
};

const ListBlogPost = ({ post }) => {
  return (
    <li key={post.filePath} className="p-3 mt-12 mb-12">
      <div className="overflow-hidden cursor-pointer">
        <div className="flex items-baseline justify-between">
          {post.data.date && (
            <span className="text-xs mb-3 opacity-60">{post.data.date}</span>
          )}
          <Link
            as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
            href={`/posts/[slug]`}
            legacyBehavior
          >
            <span>
              {post.data.tags && (
                <span className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 text-xs text-gray-600 hover:bg-gray-100">
                  {post.data.tags}
                </span>
              )}
            </span>
          </Link>
        </div>
        <Link
          as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
          href={`/posts/[slug]`}
          legacyBehavior
        >
          <div className="block focus:outline-none focus:ring-4">
            <h2 className="lg:text-base md:text-base font-semibold">
              {post.data.title}
            </h2>
            <div className="">
              {post.data.description && (
                <p className="mt-5 text-base opacity-60 line-clamp-3">
                  {post.data.description}
                </p>
              )}
            </div>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default function Blog({ posts, globalData }) {
  return (
    <LayoutFullWidth>
      <div className="max-w-5xl">
        <SEO title={globalData.name} description={globalData.name} />
        <Header name="Blog" />
        <main className="w-full px-5 mt-12">
          <ul className="grid md:grid-cols-1 lg:grid-cols-3 gap-5">
            {getLatestBlogPosts(posts).map((post) => (
              <CardBlogPost post={post} key={post.date} />
            ))}
          </ul>
          <ul className="grid md:grid-cols-1 lg:grid-cols-3 my-5">
            {getOlderBlogPosts(posts).map((post) => (
              <ListBlogPost post={post} key={post.date} />
            ))}
          </ul>
        </main>
        <Footer copyrightText={globalData.footerText} />
        <GradientBackground
          variant="large"
          className="fixed top-20 opacity-40 dark:opacity-60"
        />
        <GradientBackground
          variant="small"
          className="absolute bottom-0 opacity-20 dark:opacity-10"
        />
      </div>
    </LayoutFullWidth>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
