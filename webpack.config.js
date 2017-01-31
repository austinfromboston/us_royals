var path = require('path');

module.exports = {
  entry: './src/content.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'content.js'
  },
  module: {
    loaders: [
      {
        test: /\.(jpg|png)$/,
        loader: 'file-loader',
        options: {
          name: './images/[name].[ext]',
        }
      },
      {
        test: /manifest\.json/,
        loader: 'file-loader',
        options: {
          name: './[name].[ext]'
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  }
};