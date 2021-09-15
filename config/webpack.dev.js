// const {HotModuleReplacementPlugin}  = require('webpack')
// // const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

/** @type {import('webpack').Configuration} */
module.exports = {
    mode: 'development',
    devServer: {
        port: 8000,
        open: true,
        hot: true,
        historyApiFallback:true 
    },
    devtool: 'eval-cheap-module-source-map',
    // plugins: [
    //     new HotModuleReplacementPlugin(),
    //     // new ReactRefreshWebpackPlugin()
    // ]
}