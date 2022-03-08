const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
  // modify antd variables
  modifyVars: { '@primary-color': '#2C0433', '@border-radius-base': '5px' },
  // optional
  lessVarsFilePath: './styles/antd-variables.less',
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  // Custom Webpack Config
  webpack(config) {
    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/business/business',
        permanent: false,
      },
      {
        source: '/about',
        destination: '/business/business',
        permanent: false,
      }
    ]
  },
  i18n: {
    locales: ['en-US', 'de-DE'],
    defaultLocale: 'en-US',
  },
  eslint: {
    // dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
    ignoreDuringBuilds: true,
  },
});
