import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrism from '@mapbox/rehype-prism';

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'posts');
export const TALKS_PATH = path.join(process.cwd(), 'talks');

// filePaths is the list of all mdx files inside the PATH directory
export const filePaths = (PATH) =>
  fs
    .readdirSync(PATH)
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path));

export const talkFilePaths = filePaths(TALKS_PATH);
export const postFilePaths = filePaths(POSTS_PATH);

export const sortPostsByDate = (posts) => {
  return posts.sort((a, b) => {
    const aDate = new Date(a.data.date);
    const bDate = new Date(b.data.date);
    return bDate - aDate;
  });
};

export const getPosts = () => {
  let posts = filePaths(POSTS_PATH).map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data: { frontmatter },
      filePath,
    };
  });

  posts = sortPostsByDate(posts);

  return posts;
};

export const getPostsByTags = async (tag) => {
  let posts = filePaths(POSTS_PATH).map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const {
      content,
      data: { frontmatter },
    } = matter(source);

    const { tags } = frontmatter.tags.slice(',');
    if (tags.include(tag)) {
      return {
        content,
        data: { frontmatter },
        filePath,
        slug: tag,
      };
    }
  });

  posts = sortPostsByDate(posts);
  console.log({ posts });

  return posts;
};

export const getTalks = () => {
  let talks = filePaths(TALKS_PATH).map((filePath) => {
    const source = fs.readFileSync(path.join(TALKS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  talks = sortPostsByDate(talks);

  return talks;
};

export const getPostBySlug = async (slug) => {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypePrism],
    },
    scope: data,
  });

  return { mdxSource, data, postFilePath };
};

export const getTalkBySlug = async (slug) => {
  const talkFilePath = path.join(TALKS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(talkFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypePrism],
    },
    scope: data,
  });

  return { mdxSource, data, talkFilePath };
};

export const getNextPostBySlug = (slug) => {
  const posts = getPosts();
  const currentFileName = `${slug}.mdx`;
  const currentPost = posts.find((post) => post.filePath === currentFileName);
  const currentPostIndex = posts.indexOf(currentPost);

  const post = posts[currentPostIndex - 1];
  // no prev post found
  if (!post) return null;

  const nextPostSlug = post?.filePath.replace(/\.mdx?$/, '');

  return {
    title: post.data.title,
    slug: nextPostSlug,
  };
};

export const getPreviousPostBySlug = (slug) => {
  const posts = getPosts();
  const currentFileName = `${slug}.mdx`;
  const currentPost = posts.find((post) => post.filePath === currentFileName);
  const currentPostIndex = posts.indexOf(currentPost);

  const post = posts[currentPostIndex + 1];
  // no prev post found
  if (!post) return null;

  const previousPostSlug = post?.filePath.replace(/\.mdx?$/, '');

  return {
    title: post.data.title,
    slug: previousPostSlug,
  };
};
