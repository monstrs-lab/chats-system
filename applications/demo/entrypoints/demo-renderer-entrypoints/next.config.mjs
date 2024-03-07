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
  webpack: (config, context) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts'],
      '.jsx': ['.jsx', '.tsx'],
      '.cjs': ['.cjs', '.cts'],
      '.mjs': ['.mjs', '.mts'],
    }

    // eslint-disable-next-line no-param-reassign
    config.resolve.alias = {
      ...config.resolve.alias,
      effector: require.resolve('effector'),
      'effector-react': require.resolve('effector-react'),
      'timers/promises': require.resolve('timers-browserify'),
      buffer: require.resolve('buffer/'),
    }

    // eslint-disable-next-line no-param-reassign
    config.resolve.fallback = {
      ...config.resolve.fallback,
      net: false,
    }

    // eslint-disable-next-line no-param-reassign
    config.plugins = config.plugins ?? []

    config.plugins.push(
      new context.webpack.NormalModuleReplacementPlugin(/^node:/, (resource) => {
        // eslint-disable-next-line no-param-reassign
        resource.request = resource.request.replace(/^node:/, '')
      })
    )

    config.plugins.push(
      new context.webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      })
    )

    return config
  },
})
