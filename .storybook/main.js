const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|mdx)'],
  typescript: { reactDocgen: false },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    // Add PostCSS into addons for compiling tailwind below
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
    // End PostCSS
  ],
  framework: '@storybook/react',
  features: {
    interactionsDebugger: true
  },
  core: {
    builder: '@storybook/builder-webpack5'
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
    })

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.join(__dirname, '../src/')
    }

    return config
  }
}
