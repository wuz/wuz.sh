// app/posts/[slug]/page.tsx
import { GridLayout, GridLeft, GridRight } from "@/components/grid-layout";
import Header from "@/components/header";
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
  // <MDXContent />
};

export default async function Page() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <>
      <Header />
      <GridLayout>
        <GridLeft>A collection of things I've written.</GridLeft>
        <GridRight>
          <ul role="list">
            {posts.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </ul>
        </GridRight>
      </GridLayout>
    </>
  );
}
