import { Post, allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { listItem, listPost } from "./posts-display.css";
import { Heading } from "../type";

export async function generateStaticParams() {
  return allPosts
    .filter((post) => post.published)
    .map((post) => ({
      slug: post._raw.flattenedPath,
    }));
}

const SinglePost = ({ post }: { post: Post }) => {
  // const MDXContent = useMDXComponent(post.body.code);
  return (
    <li className={listItem}>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), "MMM d, yyyy")}
      </time>
      <a href={post.url}>{post.title}</a>
    </li>
  );
};

type PostsDisplayProps = {
  limit?: number;
};

export default async function PostsDisplay({ limit = 5 }: PostsDisplayProps) {
  let posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  if (limit) {
    posts = posts.slice(0, limit);
  }
  return (
    <div className="flow">
      <Heading level="3">Recent Writing</Heading>
      <ul role="list" className={listPost}>
        {posts.map((post) => (
          <SinglePost post={post} key={post._id} />
        ))}
      </ul>
    </div>
  );
}
