[cdn.berabou.me](https://cdn.berabou.me/)
---

is content delivery network of [npmjs](https://www.npmjs.com/).

can load published package files and documents such as `https://cdn.berabou.me/package@version/path/to/file`.

Example
---
* https://cdn.berabou.me/jquery
* https://cdn.berabou.me/react/dist/react.min.js
* https://cdn.berabou.me/immaterial-design-ripple/release/
* https://cdn.berabou.me/express-unpkg/docs/

URL Format
---
* `/package-name` -> `latest version` / `main file`
* `/package-name/README.md` -> `latest version` / `README.md`
* `/package-name@version` -> `version` / `main file`
* `/package-name@version/lib/` -> `version` / `lib/index.js`
* `/package-name@version/docs/` -> `version` / `docs/index.html`

Development
---

Requirement global
* NodeJS v5.7.0
* Npm v3.7.1
* Babel-cli v6.5.1 (babel-core v6.5.2)

```
git clone https://github.com/59naga/cdn.berabou.me
cd cdn.berabou.me
npm install

# client only
npm run dev

# boot hosting server
npm run build
npm start
```

License
---
[MIT](http://59naga.mit-license.org/)
