import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
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
