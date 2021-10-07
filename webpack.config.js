const path = require('path');


module.exports = (env, argv) => {
  let entryPath =
    argv.mode === 'production'
      ? ['./public/js/main.js']
      : ['./src/js/main.js'];
  return {
    target: 'web',
    entry: entryPath,
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
      hot: true,
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      clean: {
        keep: /index.html/,
      },
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  };
};
