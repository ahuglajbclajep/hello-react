const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const base = require("../webpack.base");

module.exports = (env, args) => {
  const baseConfig = base(env, args);
  const dev = args.mode === "development";
  return {
    ...baseConfig,
    ...{
      module: {
        rules: [
          ...baseConfig.module.rules,
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, `css-loader?sourceMap=${dev}`]
          }
        ]
      },
      plugins: [...baseConfig.plugins, new MiniCssExtractPlugin()]
    }
  };
};
