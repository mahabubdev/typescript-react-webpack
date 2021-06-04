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
                test: /\.(css|scss)$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(?:ico|gif|png|jpe?g)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
                type: "asset/inline"
            },
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