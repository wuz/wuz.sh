import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
	const posts = getAllPosts().filter((post) => !post.preview);
	return (
		<div className="space-y-4">
			<h1 className="font-bold underline">Posts</h1>
			<ul>
				{posts.map((post) => (
					<li className="flex items-center gap-2" key={post.slug}>
						<time className="text-foreground-faded"> {post.formattedDate}</time>
						<Link href={`/posts/${post.slug}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
