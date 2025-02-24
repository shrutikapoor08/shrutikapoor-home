import Link from 'next/link';
import { getTalks } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import LayoutFullWidth, {
  GradientBackground,
} from '../components/LayoutFullWidth';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Talks({ talks, globalData }) {
  return (
    <LayoutFullWidth>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name="Talks and Speaking Engagements" />
      <main className="mx-5">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {talks.map((talk) => (
            <li
              key={talk.filePath}
              className="rounded-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-40 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 last:border-b"
            >
              <Link
                as={`/talks/${talk.filePath.replace(/\.mdx?$/, '')}`}
                href={`/talks/[slug]`}
                legacyBehavior
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
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </LayoutFullWidth>
  );
}

export function getStaticProps() {
  const talks = getTalks();
  const globalData = getGlobalData();

  return { props: { talks, globalData } };
}
