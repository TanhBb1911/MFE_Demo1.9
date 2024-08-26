import NextFederationPlugin from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    mfeApp: `mfeApp@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
  };
};

const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'mfeApp9',
        remotes: remotes(isServer),
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          "./GetApp": "./components/getApp.tsx",
        },
        extraOptions: {
          debug: false,
          exposePages: false,
        },
        shared: {
          shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
        },
      })
    );

    return config;
  },
};

export default nextConfig;