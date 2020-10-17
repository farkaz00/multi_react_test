path = require("path");
HtmlPlugin = require("html-webpack-plugin");

const DIR_SRC = path.resolve(__dirname, "src");
const DIR_DST = path.resolve(__dirname, "dst");

const PATH_INDEX_JS = DIR_SRC + "/index.tsx";
const PATH_INDEX_HTML = DIR_SRC + "/index.html";

module.exports = {
  entry: { main: PATH_INDEX_JS },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        include: DIR_SRC,
        exclude: /node_modules/
      }
    ]
  },
  resolve: { extensions: [ ".tsx", "ts", "js" ] },
  output: {
    filename: "bundle-[name].js",
    path: DIR_DST
  },
  plugins: [
    new HtmlPlugin({template: PATH_INDEX_HTML})
  ]
};
