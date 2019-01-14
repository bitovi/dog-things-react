const express = require('express');
const app = express();
const { default: App } = require('../src/App');
const api = require('../src/api');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const layout = require('./html');

app.use(express.static(__dirname + '/../build', { index: false }));

app.get('/', async (request, response) => {
  let products = await api.getProducts();

  let rendered = ReactDOMServer.renderToString(
    React.createElement(App, { request, products })
  );
  let html = layout(rendered, {products});

  response.type('html').status(200).end(html);
});

app.listen(8080);
console.error(`Listening at: http://localhost:8080`);