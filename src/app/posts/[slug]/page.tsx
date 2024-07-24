// app/posts/[slug]/page.tsx
import ContentGrid from "@/components/content-grid";
import Header from "@/components/header";
import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { Heading } from "@/components/type";
import {
  GridFull,
} from "@/components/grid-layout";
import AutoGrid from "@/components/auto-grid";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post?.body) notFound();

  const MDXContent = getMDXComponent(post.body.code);

  return (
    <>
      <Header />
      <div className="flow">
        <ContentGrid>
          {post.coverImage && (
            <img src={post.coverImage} alt={post.description} />
          )}
          <Heading level="1">{post.title}</Heading>
          <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
            {format(parseISO(post.date), "MMM d, yyyy")}
          </time>
          <MDXContent />
        </ContentGrid>
        <hr />
        <GridFull>
          <AutoGrid>
            <div>
              <Heading level="3">Socials</Heading>
              <ul>
                <li>
                  <a href="https://linkedin.com/in/wuz">LinkedIn</a>
                </li>
                <li>
                  <a href="https://dev.to/wuz">dev.to</a>
                </li>
                <li>
                  <a href="https://github.com/wuz">Github</a>
                </li>
                <li>
                  <a href="https://twitter.com/CaffeinatedLich">
                    Twitter / X
                  </a>
                </li>
                <li>
                  <a href="https://bsky.app/profile/lich.dad">bluesky</a>
                </li>
              </ul>
            </div>
          </AutoGrid>
        </GridFull>
      </div>
    </>
  );
}
