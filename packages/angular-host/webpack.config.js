const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");
const webpack = require("webpack");
const dependencies = require("./package.json").dependencies;

const mfConfig = withModuleFederationPlugin({
  remotes: {
    reactWidget: "http://localhost:3000/remoteEntry.js",
    angularCard: "http://localhost:4201/remoteEntry.js",
  },
  shared: {
    react: {
      requiredVersion: dependencies["react"],
      singleton: true,
      eager: true,
    },
    "react-dom": {
      requiredVersion: dependencies["react-dom"],
      singleton: true,
      eager: true,
    },
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});

module.exports = {
  ...mfConfig,
  plugins: [
    ...mfConfig.plugins,

    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
};
