import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

const withVanillaExtract = createVanillaExtractPlugin({
  identifiers: 'short',
})

export default withVanillaExtract({
  output: 'standalone',
  experimental: {
    externalDir: true,
    esmExternals: 'loose',
  },
  typescript: { ignoreBuildErrors: true },
  webpack: (config, { webpack }) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts'],
      '.jsx': ['.jsx', '.tsx'],
      '.cjs': ['.cjs', '.cts'],
      '.mjs': ['.mjs', '.mts'],
    }

    // eslint-disable-next-line no-param-reassign
    config.resolve.fallback = {
      ...(config.resolve.fallback || {}),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer/'),
      os: require.resolve('os-browserify'),
      net: false,
    }

    // eslint-disable-next-line no-param-reassign
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      buffer: require.resolve('buffer/'),
    }

    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(/node:/, (resource) => {
        const mod = resource.request.replace(/^node:/, '')
        switch (mod) {
          case 'stream':
            // eslint-disable-next-line no-param-reassign
            resource.request = 'readable-stream'
            break
          default:
            // eslint-disable-next-line no-param-reassign
            resource.request = mod
        }
      })
    )

    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: [require.resolve('buffer'), 'Buffer'],
      })
    )

    return config
  },
})
