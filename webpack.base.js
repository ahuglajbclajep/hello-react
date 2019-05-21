const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, { mode }) => ({
  mode: "development",
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: "src/index.html" })],
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  devtool: mode === "development" ? "inline-source-map" : "none",
  devServer: {
    contentBase: "./dist",
    overlay: true,
    watchContentBase: true
  }
});
