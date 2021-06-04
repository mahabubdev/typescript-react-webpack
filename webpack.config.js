const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: path.resolve(__dirname, "./src/index.tsx"),
    resolve: {
        extensions: [
            ".js", ".jsx",
            ".ts", ".tsx"
        ]
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {loader: "babel-loader"}
                ]
            }
        ],
        
    },
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "bundle.[hash].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./public/index.html")
        }),
    ]
}