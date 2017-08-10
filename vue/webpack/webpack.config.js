var webpack = require('webpack');
module.exports = {
    entry: ['./entry.js'],
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.(jpg|png)$/,
            loader: 'url-loader?limit=8192'
        }]
    },
    plugins: [
        new webpack.BannerPlugin('这里是打包文件的头部注释！')
    ]
}