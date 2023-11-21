const nodeExternals = require('webpack-node-externals');

module.exports = {
  // ... otras configuraciones ...
  externals: [
    nodeExternals({
      allowlist: ['node:buffer'], // Permite que Webpack maneje "node:buffer"
    }),
  ],
  // ... otras configuraciones ...
};
