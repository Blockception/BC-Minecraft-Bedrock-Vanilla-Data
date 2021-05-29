//@ts-check

var webpack = require("webpack"),
  path = require("path"),
  yargs = require("yargs");

var libraryName = "lib",
  plugins = [],
  outputFile;

outputFile = "main.js";

/**@type {import('webpack').Configuration}*/
var config = {
  entry: [__dirname + "/src/main.ts"],
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "/lib"),
    filename: outputFile,
    libraryTarget: "var",
    library: libraryName,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: { compilerOptions: { sourceMap: true } },
          },
        ],
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: "json-loader",
        type: "javascript/auto",
      },
    ],
  },
  resolve: {
    roots: [path.resolve("./src")],
    extensions: [".ts", ".js"],
    mainFields: ["module", "main"],
  },
  optimization: {
    minimize: false,
  },
  plugins: plugins,
  target: "node",
};

module.exports = config;
