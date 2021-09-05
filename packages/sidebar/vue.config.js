// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  devServer: {
    host: "localhost",
  },
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      css: {
        // Note: the following config format is different between Vue CLI v4 and v3
        // For Vue CLI v3 users, please refer to css-loader v1 documentations
        // https://github.com/webpack-contrib/css-loader/tree/v1.0.1
        modules: {
          localIdentName: "sidebar-[name]-[hash]",
        },
      },
    },
  },
};
