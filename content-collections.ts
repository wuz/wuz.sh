import rehypePrettyCode from "rehype-pretty-code";
import rehypeShiki from "@shikijs/rehype";
import { transformerTwoslash } from "@shikijs/twoslash";
import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
  transformerMetaHighlight,
  transformerMetaWordHighlight,
} from "@shikijs/transformers";

const shikiOptions = {
  theme: "min-dark",
  transformers: [
    transformerTwoslash({
      explicitTrigger: true,
    }),
    transformerNotationDiff(),
    transformerNotationHighlight(),
    transformerNotationWordHighlight(),
    transformerMetaHighlight(),
    transformerMetaWordHighlight(),
  ],
};

const posts = defineCollection({
  name: "posts",
  directory: "posts",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string().optional(),
    published: z.boolean(),
    date: z.string().optional(),
    coverImage: z.string().optional(),
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
  collections: [posts],
});
