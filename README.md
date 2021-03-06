# React TypeScript Skeleton app
> Using hot module replacement (HMR) for rapid development.

* **[React](https://facebook.github.io/react/)** (17.x)
* **[Webpack](https://webpack.js.org/)** (5.x)
* **[Typescript](https://www.typescriptlang.org/)** (4.x)
* **[Hot Module Replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/)** ([React Hot Loader](https://github.com/gaearon/react-hot-loader))
* **[Bulma](https://bulma.io/) CSS framework**
* **[React Query](https://react-query.tanstack.com/) fetching, caching, synchronizing and updating server state**
* Production build script (Webpack)
* Image loading/minification ([Image Webpack Loader](https://github.com/tcoopman/image-webpack-loader))
* [SASS](http://sass-lang.com/) support
* [Styled-Components](https://styled-components.com/) support
* Code linting ([ESLint](https://github.com/eslint/eslint)) and formatting ([Prettier](https://github.com/prettier/prettier))

## Usage
**Development**

`yarn start:dev`

* Build app continuously (HMR enabled)
* App served @ `http://localhost:8080`

**Production**

`yarn start:prod`

* Build app once (HMR disabled) to `/dist/`
* App served @ `http://localhost:3000`

---

**All commands**

Command | Description
--- | ---
`yarn start:dev` | Build app continuously (HMR enabled) and serve @ `http://localhost:8080`
`yarn start:prod` | Build app once (HMR disabled) to `/dist/` and serve @ `http://localhost:3000`
`yarn build` | Build app to `/dist/`
`yarn test` | Run tests
`yarn format` | Run prettier
`yarn start` | (alias of `yarn start:dev`)

**Note**: replace `yarn` with `npm` in `package.json` if you use npm.
