import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Gjør Next.js statisk
  basePath: isProd ? "/digital-art" : "", // Erstatt "MITT_REPO_NAVN" med navnet på GitHub-repoet ditt
  assetPrefix: isProd ? "/digital-art/" : "", 
  images: { unoptimized: true } // Deaktiver Next.js sitt Image Optimization, siden GitHub Pages ikke støtter det
};

export default nextConfig;
