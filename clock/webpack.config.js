const base = require("../webpack.base");

module.exports = (env, args) => {
  const baseConfig = base(env, args);
  return {
    ...baseConfig,
    ...{
      entry: "./src/index.jsx",
      resolve: { extensions: [...baseConfig.resolve.extensions, ".jsx"] }
    }
  };
};
