require('ignore-styles');

require('@babel/register')({
    ignore: [ /(node_modules)/ ],
    plugins: ['inline-react-svg'],
    presets: [
    ['@babel/preset-env',
      {
        "targets": {
          "node": "current"
        }
      }
    ],
    '@babel/preset-react']
});

require('./prod-server');