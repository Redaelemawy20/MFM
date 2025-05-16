import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', '127.0.0.1'],
  },
  experimental: {
    appDir: true,
    serverActions: true,
    serverActions: {
      bodySizeLimit: '50mb',
    },
    serverComponentsExternalPackages: ['bcrypt'],
    appDirExternalPackages: ['bcrypt'],
    routeHandlersExternalPackages: ['bcrypt'],
  },
  compiler: {
    styledComponents: true,
  },
};

export default withNextIntl(nextConfig);
