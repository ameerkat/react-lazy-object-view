var path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: "ReactLazyObjectView",
    libraryTarget: 'umd',
  },
  optimization: {
    minimize: false
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'source-map-loader',
      exclude: /node_modules/,
      enforce: 'pre',
    }, {
      test: /\.tsx?$/,
      loaders: [
        'awesome-typescript-loader',
      ],
      exclude: /node_modules/,
    }]
  }
};
