// app/posts/[slug]/page.tsx
import ContentGrid from "@/components/content-grid";
import Header from "@/components/header";
import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";

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
      <ContentGrid>
        <MDXContent />
      </ContentGrid>
    </>
  );
}
