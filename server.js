const express = require('express');
const { createRequestHandler } = require('@remix-run/express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8788;

app.use(express.static('public'));

app.all('*', createRequestHandler({ getLoadContext() {}, build: require('./build') }));

app.listen(port, () => {
  console.log(`✅ Remix app running on http://localhost:${port}`);
});
