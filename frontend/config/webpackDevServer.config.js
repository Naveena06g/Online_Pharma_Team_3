'use strict';

const fs = require('fs');
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const evalSourceMapMiddleware = require('react-dev-utils/evalSourceMapMiddleware');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
const paths = require('./paths');
const ignoredFiles = require('react-dev-utils/ignoredFiles');

module.exports = function (proxy, allowedHost) {
  return {
    // WebpackDevServer 2.4.3 introduced a security fix that prevents remote websites from accessing local content through DNS rebinding:
    // https://github.com/webpack/webpack-dev-server/issues/887
    // We disable this feature by default, but it may be worth enabling in the future.
    // See https://github.com/facebook/create-react-app/issues/2271 for more discussion.
    allowedHosts: 'all', // 🔧 FIXED HERE

    compress: true,
    client: {
      logging: 'none',
      overlay: false,
    },
    static: {
      directory: paths.appPublic,
      publicPath: [paths.publicUrlOrPath],
      watch: {
        ignored: ignoredFiles(paths.appSrc),
      },
    },
    devMiddleware: {
      publicPath: paths.publicUrlOrPath.slice(0, -1),
    },
    https: false,
    historyApiFallback: {
      disableDotRule: true,
      index: paths.publicUrlOrPath,
    },
    proxy,
    setupMiddlewares(middlewares, devServer) {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      middlewares.unshift(evalSourceMapMiddleware(devServer));
      middlewares.push(errorOverlayMiddleware());
      middlewares.push(noopServiceWorkerMiddleware(paths.publicUrlOrPath));

      return middlewares;
    },
  };
};
