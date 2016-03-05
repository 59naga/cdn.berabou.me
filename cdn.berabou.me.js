const express = require('express');
const cors = require('cors');
const compression = require('compression');
const npmcdn = require('express-npmcdn');

const port = process.env.PORT || 59798;
const app = express();
app.disable('x-powered-by');
app.use(cors());
app.use(compression());
app.use(npmcdn(`${__dirname}/public/packages/`, {
  api: 'http://registry.npmjs.org',
  maxAge: 60 * 60 * 24 * 365, // one year
  extensions: ['', '.js', '.json', '.html'],
}));
app.listen(port, () => {
  console.log(`npmcdn is available on http://localhost:${port}!`);
});