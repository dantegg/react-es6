var webpack = require('webpack');

module.exports = {
    entry: "./js/app.js",
    output: {
        path: './build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: "style!css" },
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: "babel-loader",
              query:
                {
                  presets:['react','es2015']
                }
            }
        ]
    },
    resolve:{
        extensions:['','.js','.json']
    },
    devServer: {
        hot: true,
        inline: true,
        host:'192.168.11.188',
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
};
