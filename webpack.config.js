const path = require('path');
const nodeExternals = require('webpack-node-externals');
const slsw = require('serverless-webpack');

module.exports = {
    entry: slsw.lib.entries,
    target: 'node',
    externals: [nodeExternals()],
    mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
            }
        ]
    }
};