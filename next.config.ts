import { withContentCollections } from "@content-collections/next";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
const withVanillaExtract = createVanillaExtractPlugin();
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	output: "standalone",
	serverExternalPackages: ["shiki", "twoslash"],
};

module.exports = withContentCollections(withVanillaExtract(nextConfig));
