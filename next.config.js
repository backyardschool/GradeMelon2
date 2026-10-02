/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/GradeMelon2",
  assetPrefix: "/GradeMelon2/",
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
