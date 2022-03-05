module.exports = {
  swcMinify: true,
  compiler: {
    reactRemoveProperties: true,
    removeConsole: {
      exclude: ['error', 'warn'],
    },
  },
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Replace React with Preact only in client production build
      Object.assign(config.resolve.alias, {
        'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }

    return config
  },
  redirects() {
    return [
      {
        source: '/blog/abort-controller',
        destination: 'https://frontem.xyz/blog/abort-controller',
        permanent: true,
      },
      {
        source: '/blog/logpoint',
        destination: 'https://frontem.xyz/blog/logpoint',
        permanent: true,
      },
      {
        source: '/blog/react-dependency-array',
        destination: 'https://frontem.xyz/blog/react-dependency-array',
        permanent: true,
      },
      {
        source: '/blog/array-groupby',
        destination: 'https://frontem.xyz/blog/array-groupby',
        permanent: true,
      },
    ]
  },
}
