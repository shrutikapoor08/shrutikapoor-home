import Link from 'next/link';
import { getPosts, getTalks } from '../utils/mdx-utils';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LayoutFullWidth, {
  GradientBackground,
} from '../components/LayoutFullWidth';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import FeaturedSection from '../components/FeaturedSection';
import FeaturedBlogs from '../components/FeaturedBlogs';
import FeaturedSpeaking from '../components/FeaturedTalks';

export default function Index({ posts, talks, globalData }) {
  return (
    <LayoutFullWidth>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      {/* <Header name={globalData.name} /> */}
      <main className="mx-5">
        {/* <h1 className="text-3xl lg:text-5xl text-center mb-12">
          {globalData.blogTitle}
        </h1> */}
        <FeaturedSection />
        <FeaturedBlogs posts={posts.slice(0, 3)} />
        <FeaturedSpeaking talks={talks} />
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
  const posts = getPosts();
  const talks = getTalks();

  const globalData = getGlobalData();

  return { props: { posts, talks, globalData } };
}
