import { getGlobalData } from '../../utils/global-data';
import { postFilePaths, getPostsByTags } from '../../utils/mdx-utils';
import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import CustomLink from '../../components/CustomLink';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Head,
};

export default function TagsPage({ source, frontMatter, globalData }) {
  return (
    <Layout>
      <SEO
        title={`${frontMatter.title} - ${globalData.name}`}
        description={frontMatter.description}
      />
      <Header />
      <article className="px-6 md:px-0">
        <header>
          <h1 className="text-2xl md:text-3xl dark:text-white text-center mb-12">
            {frontMatter.conference} - {frontMatter.title}
          </h1>
        </header>
        <main>
          <article className="mx-auto prose dark:prose-dark">
            <p className="prose">{frontMatter.abstract} </p>
            {frontMatter.link && (
              <iframe
                height="515"
                width="100%"
                src={frontMatter.link}
                title={frontMatter.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
            <MDXRemote {...source} components={components} />
          </article>
        </main>
      </article>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="absolute -top-32 opacity-30 dark:opacity-50"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  // Get files from the posts dir
  // Get slug and frontmatter from posts
  //   const { mdxSource, data } = await getPostsByTags(params.slug);
  //   console.log(params.slug);
  //   const tempPosts = files.map((filename) => {
  //     // Get frontmatter
  //     const markdownWithMeta = fs.readFileSync(
  //       path.join('posts', filename),
  //       'utf-8'
  //     );
  //     const { data: frontmatter } = matter(markdownWithMeta);
  //     if (frontmatter.draft === false) {
  //       frontmatter.tags.map((tag) => {
  //         let tagSlug = slugify(tag);
  //         if (slug === tagSlug) {
  //           tempStorage.push({ post: frontmatter });
  //         }
  //       });
  //     } else {
  //       return null;
  //     }
  //   });
  //   //  remove null in tempPosts
  //   const posts = tempStorage.filter((post) => {
  //     return post && post;
  //   });
  //   return { props: { posts } };

  const globalData = getGlobalData();
  const { mdxSource, data } = await getPostsByTags(params.slug);

  console.log({ data });

  return {
    props: {
      globalData,
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  // get all posts form posts
  //   const files = fs.readdirSync(path.join('posts'));
  //   let tempStorage = [];
  //   // get posts slug and meta data
  //   const temppaths = files.map((filename) => {
  //     const markdownWithMeta = fs.readFileSync(
  //       path.join('posts', filename),
  //       'utf-8'
  //     );
  //     // get frontmatter data form posts
  //     const { data: frontmatter } = matter(markdownWithMeta);
  //     // get publish post
  //     if (frontmatter.draft === false) {
  //       frontmatter.tags.map((tag) => {
  //         // convert into slug
  //         let slug = slugify(tag);
  //         tempStorage.push({ params: { slug } });
  //       });
  //     } else {
  //       return null;
  //     }
  //   });
  //   // filter posts
  //   const paths = tempStorage.filter((item, index) => {
  //     return tempStorage.indexOf(item) === index;
  //   });

  //   return { paths, fallback: false };

  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
