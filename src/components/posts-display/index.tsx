import { Post, allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

const Post = ({ post }: { post: Post }) => {
  // const MDXContent = useMDXComponent(post.body.code);
  return (
    <li>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), "MMM d, yyyy")}
      </time>
      &mdash;
      <a href={post.url}>{post.title}</a>
    </li>
  );
};

type PostsDisplayProps = {
  limit?: number;
};

export default async function PostsDisplay({ limit = 5 }: PostsDisplayProps) {
  let posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  if (limit) {
    posts = posts.slice(0, limit);
  }
  return (
    <div className="flow">
      <h3>Recent Writing</h3>
      <ul role="list">
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </ul>
    </div>
  );
}
