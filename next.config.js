// const withImages = require('next-images');
// module.exports = withImages();
const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');
const webpack = require('webpack');

dotenvLoad();

const withNextEnv = nextEnv();

module.exports = withNextEnv({
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: ['/node_modules/', '/.next/', '/out/'],
        enforce: 'pre',
        options: {
          emitWarning: true,
          fix: true,
        },
      });
    }
    return config;
  },
});
