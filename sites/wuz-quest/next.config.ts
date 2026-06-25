import { withContentCollections } from "@content-collections/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	output: "standalone",
	async rewrites() {
		return [
			{
				source: "/js/script.js",
				destination: "https://plausible.io/js/script.tagged-events.js",
			},
			{
				source: "/api/event",
				destination: "https://plausible.io/api/event",
			},
		];
	},
};

module.exports = withContentCollections(nextConfig);

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
if (process.env.NODE_ENV === "development") {
	initOpenNextCloudflareForDev();
}
