const express = require('express');
const cors = require('cors');
const compression = require('compression');
const npmcdn = require('express-npmcdn');
const path = require('path');

const port = process.env.PORT || 59798;
const app = express();
app.disable('x-powered-by');
app.use(cors());
app.use(compression());
app.use(npmcdn(path.join(__dirname, 'public', 'packages'), {
  api: 'http://registry.npmjs.org',
  maxAge: 60 * 60 * 24 * 365, // one year
  extensions: ['', '.js', '.json', '.html'],
}));
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, () => {
  process.stdout.write(`npmcdn is available on http://localhost:${port}\n`);
});
