import { withContentCollections } from "@content-collections/next";
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
	reactStrictMode: true,
	output: "standalone",
	serverExternalPackages: ["shiki", "twoslash"],

};

module.exports = withContentCollections(nextConfig);

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
