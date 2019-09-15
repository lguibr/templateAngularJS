var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
    entry: "./app/src/index.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: "./dist/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader"
                ]
            }
        ]
    }
};
