// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";

const prettyCodeOptions = {
	theme: "min-dark",
	onVisitLine(node: any) {
		if (node.children.length === 0) {
			node.children = [
				{
					type: "text",
					value: " ",
				},
			];
		}
	},
	onVisitHighlightedLine(node: any) {
		node.properties.className.push("highlighted");
	},
	onVisitHighlightedWord(node: any) {
		node.properties.className = ["word"];
	},
	tokensMap: {},
};

export const Post = defineDocumentType(() => ({
	name: "Post",
	filePathPattern: `**/*.mdx`,
	contentType: "mdx",
	fields: {
		title: { type: "string", required: true },
		published: { type: "boolean", required: true },
		date: { type: "date", required: true },
		description: { type: "string", required: false },
		coverImage: { type: "string", required: false },
	},
	computedFields: {
		url: {
			type: "string",
			resolve: (post) => `/posts/${post._raw.flattenedPath}`,
		},
	},
}));

export default makeSource({
	contentDirPath: "posts",
	documentTypes: [Post],
	mdx: {
		rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
	},
});
