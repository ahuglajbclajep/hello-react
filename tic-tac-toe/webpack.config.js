const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin"); // from webpack
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const base = require("../webpack.config");

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
      plugins: [...baseConfig.plugins, new MiniCssExtractPlugin()],
      optimization: {
        minimizer: [new TerserPlugin(), new OptimizeCssAssetsPlugin()]
      }
    }
  };
};
