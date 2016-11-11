var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: {
        'app': path.join(__dirname,'/js/app.js'),
        'test': path.join(__dirname,'/js/test.js'),
    },
    output: {
        path: './build',
        filename: "[name].js"
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
