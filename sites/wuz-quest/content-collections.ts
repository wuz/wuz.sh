import { defineCollection, defineConfig } from "@content-collections/core";
import * as cheerio from "cheerio";
import rehypeStringify from "rehype-stringify";
import remarkCustomHeaderId from "remark-custom-header-id";
import remarkDirective from "remark-directive";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { z } from "zod";
import ttrpgDirectives from "./src/lib/directives";

async function markdownToHtml(markdown: string) {
	const file = await unified()
		.use(remarkParse)
		.use(remarkDirective)
		.use(ttrpgDirectives)
		.use(remarkCustomHeaderId)
		.use(remarkGfm)
		.use(remarkRehype)
		.use(rehypeStringify)
		.process(markdown);
	const $ = cheerio.load(String(file));
	const html = $("body > *")
		.map((i, elem) => {
			const newElem = $(elem);
			newElem.attr("style", `--stagger: ${i};`);
			return newElem;
		})
		.toArray()
		.join("\n");
	return html;
}

const posts = defineCollection({
	name: "posts",
	directory: "_posts",
	include: "**/*.md",
	schema: z.object({
		title: z.string(),
		excerpt: z.string().optional(),
		date: z.string(),
		tags: z.string().optional(),
		reddit: z.string().optional(),
		preview: z.boolean().optional(),
	}),
	transform: async (document) => {
		const html = await markdownToHtml(document.content);
		return {
			...document,
			slug: document._meta.path.replace(/\.md$/, ""),
			html,
		};
	},
});

export default defineConfig({
	content: [posts],
});
