const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    index: ["/src/index.js", "/src/css/style.css"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(jpg|png)$/,
        issuer: /\.(css)$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[ext]',
        },
      },
    
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "City Life",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new CopyPlugin({
      patterns: [{ from: "public", to: "" }],
    }),
  ],
  devServer: {
    port: 5000,
    open: true,
    static: path.resolve(__dirname, "dist"),
  },
  mode: "production",
};
