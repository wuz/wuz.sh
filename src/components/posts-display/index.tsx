import { type Post, allPosts } from "content-collections";
import { compareDesc, format, parseISO } from "date-fns";
import { listItem, listPost } from "./posts-display.css";
import { Heading } from "../type";

export async function generateStaticParams() {
	return allPosts
		.filter((post) => post.published)
		.map((post) => ({
			slug: post._meta.path,
		}));
}

const SinglePost = ({ post }: { post: Post }) => {
	const date = post.date ? new Date(post.date) : null;
	return (
		<li className={listItem}>
			{date && (
				<time
					dateTime={date.toISOString()}
					className="mb-2 block text-xs text-gray-600"
				>
					{format(date, "MMM d, yyyy")}
				</time>
			)}
			<a href={post._meta.path}>{post.title}</a>
		</li>
	);
};

type PostsDisplayProps = {
	limit?: number;
};

export default async function PostsDisplay({ limit = 5 }: PostsDisplayProps) {
	let posts = allPosts
		.filter((post) => post.published && post.date)
		.sort((a, b) =>
			a.date && b.date ? compareDesc(new Date(a.date), new Date(b.date)) : 0,
		);
	if (limit) {
		posts = posts.slice(0, limit);
	}
	return (
		<div className="flow">
			<Heading level="3">Recent Writing</Heading>
			<ul role="list" className={listPost}>
				{posts.map((post) => (
					<SinglePost post={post} key={post._meta.path} />
				))}
			</ul>
		</div>
	);
}
