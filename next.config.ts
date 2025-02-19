/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export", // Gjør Next.js statisk
  basePath: isProd ? "/digital-art" : "", // Erstatt med repo-navnet ditt
  assetPrefix: isProd ? "/digital-art/" : "",
  images: { unoptimized: true }, // Deaktiver Next.js Image Optimization
  trailingSlash: true,
};

module.exports = nextConfig;

