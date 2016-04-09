# webpack-css
- Boilerplate for css development with ITCSS philosophy and postcss.
- CSS with CSS4 features and pre-processer alike syntax.
- New features with CSS3 and CSS4 is polyfilled and fallback to IE7.


### 1. Installation
- Run `npm install` and `npm build` for building css.

### 2. Folder structures.
- Root development folder: `./src`
- Entry point of root folder is: `main.css`
- Each child folder has the a same entry point: `_main.css`
- There is no need for including mixins and functions into each development file because it is imported to the `main.css` initially.
