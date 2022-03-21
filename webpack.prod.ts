import { resolve } from "path"
import { Configuration } from "webpack"
import HtmlWebPackPlugin from "html-webpack-plugin"
import Dotenv from "dotenv-webpack"
import "webpack-dev-server"

const config: Configuration = {
  mode: "production",
  entry: {
    app: resolve(__dirname, "pages", "index.tsx"),
  },
  output: {
    clean: true,
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: true,
  },
  resolve: {
    extensions: [".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.png",
    }),
    new Dotenv({
      path: "./.env.local",
    }),
  ],
}

export default config
