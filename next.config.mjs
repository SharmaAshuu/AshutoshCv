/** @type {import('next').NextConfig} */

// When deploying to GitHub Pages as a PROJECT site (username.github.io/REPO_NAME),
// the site is served from a sub-path, so Next.js needs to know that prefix.
// Set REPO_NAME below to your actual GitHub repository name.
const REPO_NAME = "portfolio";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isGithubActions ? `/${REPO_NAME}` : "",
  assetPrefix: isGithubActions ? `/${REPO_NAME}/` : "",
};

export default nextConfig;
