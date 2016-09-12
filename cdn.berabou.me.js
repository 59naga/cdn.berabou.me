const express = require('express');
const cors = require('cors');
const compression = require('compression');
const unpkg = require('express-unpkg');
const path = require('path');

const port = process.env.PORT || 59798;
const app = express();
app.disable('x-powered-by');
app.use(cors());
app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));
app.use(unpkg(path.join(__dirname, 'public', 'packages'), {
  api: 'http://registry.npmjs.org',
  maxAge: 60 * 60 * 24 * 365, // one year
  extensions: ['', '.js', '.json', '.html'],
}));
app.listen(port, () => {
  process.stdout.write(`unpkg is available on http://localhost:${port}\n`);
});
