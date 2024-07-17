/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverActions: {
      bodySizeLimit: "50mb",
    },
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
