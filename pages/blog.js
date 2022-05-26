import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Blog({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name="Blog" />
      <main className="w-full">
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {posts.map((post) => (
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
                    <h2 className="lg:text-xl md:text-3xl font-semibold">
                      {post.data.title}
                    </h2>
                    {post.data.description && (
                      <p className="mt-3 mb-3 text-lg opacity-60">
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
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
