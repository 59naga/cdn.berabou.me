[cdn.berabou.me](https://cdn.berabou.me/)
---

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

// client only
npm run dev

// boot hosting server
npm run build
npm start
```

License
---
[MIT](http://59naga.mit-license.org/)
