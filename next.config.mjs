import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
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

export default withNextIntl(nextConfig);
