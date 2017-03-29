const webpack = require('webpack');
const path = require('path');
const HtmlWebpack = require('html-webpack-plugin');
const AotPlugin = require('@ngtools/webpack').AotPlugin;
const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;

const rootDir = path.resolve(__dirname);

module.exports = (envOptions) => {
    envOptions = envOptions || {};
    const config = {
        entry: {
            main: path.resolve(rootDir, './src/bootstrap.ts'),
            vendor: './src/vendor.ts'
        },
        output: {
            path: path.resolve(rootDir, './demo'),
            filename: '[name].bundle.js',
        },
        resolve: {
            extensions: ['.ts', '.js', '.html']
        },
        module: {
            rules: [
                { 
                    test: /\.html$/, 
                    loader: 'raw-loader' 
                },
                { 
                    test: /\.css$/, 
                    loader: 'raw-loader'
                },
            ],
        },
        devtool: '#source-map',
    };
    if (envOptions.MODE === 'prod') {
        config.module.rules.push(
            { test: /\.ts$/, loaders: ['@ngtools/webpack'] }
        );
        config.plugins = [
            new AotPlugin({
                tsConfigPath: path.resolve(rootDir, './tsconfig.json'),
                entryModule: 'src/app.module#AppModule'
            }),
            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                mangle: {
                    screw_ie8: true,
                    keep_fnames: true
                },
                compress: {
                    warnings: false,
                    screw_ie8: true
                },
                comments: false
            }),
            new ChunkWebpack({
                filename: '[name].bundle.js',
                minChunks: Infinity,
                name: ['vendor']
            }),
            new webpack.DefinePlugin({
                "require.specified": "require.resolve"
            })
        ];
    } else {
        config.module.rules.push(
            { test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader', 'raw-loader'] }
        );
    }
    return config;
};