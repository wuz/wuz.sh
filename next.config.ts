import { withContentCollections } from "@content-collections/next";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
const withVanillaExtract = createVanillaExtractPlugin();
import type { NextConfig } from "next";

const nextConfig: NextConfig = { reactStrictMode: true };

module.exports = withContentCollections(withVanillaExtract(nextConfig));
