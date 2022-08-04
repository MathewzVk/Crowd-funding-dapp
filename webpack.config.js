module.exports = {
    entry: './app.jsx',
    output: {
      path: './built',
      filename: 'app.js'
    },
    target: 'atom',
    module: {
      loaders: [
        {
          loader: 'babel',
          test: /\.jsx$/,
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    },
    externals: [
      (function () {
        var IGNORES = [
          'electron'
        ];
        return function (context, request, callback) {
          if (IGNORES.indexOf(request) >= 0) {
            return callback(null, "require('" + request + "')");
          }
          return callback();
        };
      })()
    ]
  };