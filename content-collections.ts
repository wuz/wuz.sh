import rehypeShiki from "@shikijs/rehype";
import { transformerTwoslash } from "@shikijs/twoslash";
import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
  transformerMetaHighlight,
  transformerMetaWordHighlight,
} from "@shikijs/transformers";

const shikiOptions = {
  theme: "rose-pine-moon",
  transformers: [
    transformerNotationDiff(),
    transformerNotationHighlight(),
    transformerNotationWordHighlight(),
    transformerMetaHighlight(),
    transformerMetaWordHighlight(),
    transformerTwoslash({ explicitTrigger: true }),
  ],
};

const posts = defineCollection({
  name: "posts",
  directory: "posts",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string().nullish().transform((v) => v ?? undefined),
    published: z.boolean(),
    date: z.string().optional(),
    coverImage: z.string().optional(),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      rehypePlugins: [[rehypeShiki, shikiOptions]],
    });

    return {
      ...document,
      url: `/posts/${document._meta.path}`,
      mdx,
    };
  },
});

export default defineConfig({
  content: [posts],
});
