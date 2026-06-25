import { allPosts } from "content-collections";
import { format, parse } from "date-fns";

export type Post = {
	slug: string;
	title: string;
	date: Date;
	excerpt: string;
	html: string;
	preview?: boolean;
	reddit?: string;
	formattedDate?: string;
};

const formatPost = (post: (typeof allPosts)[0]): Post => {
	const date = parse(post.date, "yyyy-MM-dd", new Date());
	const formattedDate = format(date, "yyyy-MM-dd");
	return {
		slug: post.slug,
		title: post.title,
		excerpt: post.excerpt ?? "",
		html: post.html,
		preview: post.preview,
		reddit: post.reddit,
		date,
		formattedDate,
	};
};

export function getPostBySlug(slug: string): Post | null {
	const post = allPosts.find((p) => p.slug === slug);
	if (!post) return null;
	return formatPost(post);
}

export function getAllPosts(): Post[] {
	return allPosts.map(formatPost).sort((a, b) => (a.date > b.date ? -1 : 1));
}
