import webpack from 'webpack';
import path from 'path';
import koutoSwiss from 'kouto-swiss';

const filename = 'bundle.min.js';
const config = {
  entry: './src/client/index.js',
  output: {
    filename,
    path: path.join(__dirname, 'public'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.styl$/,
        loader: 'style!css?sourceMap!stylus',
      },
    ],
  },

  stylus: {
    use: [koutoSwiss()],
  },
};

switch (process.env.npm_lifecycle_event) {
  case 'build':
    process.env.NODE_ENV = 'production';
    config.plugins = [
      new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    ];
    break;

  case 'dev:server':
    config.devServer = {
      filename,
      port: 59798,
      quiet: true,
      contentBase: 'public',
      hot: true,
      inline: true,
    };
    config.plugins = [
      new webpack.HotModuleReplacementPlugin(),
    ];
    config.devtool = '#source-map';
    break;

  default:
    config.devtool = '#source-map';

}

export default config;
