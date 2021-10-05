<!--- TITLE --->
# ★ trace.moe.ts

<!--- BADGES --->
  <a href="https://circleci.com/gh/TheRealKizu/trace.moe.ts/"><img src="https://img.shields.io/circleci/build/github/TheRealKizu/trace.moe.ts?style=flat-square" alt="CircleCI Build Status"/></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/TheRealKizu/trace.moe.ts?style=flat-square" alt="License"></a>

<!--- DESCRIPTION --->
  > An API wrapper for https://trace.moe with typings.

  <a href="https://nodei.co/npm/trace.moe.ts/"><img src="https://nodei.co/npm/trace.moe.ts.png?downloads=true" alt="npm installnfo" /></a>

<!--- INSTALLATION --->
## — Installation
   * With `npm`
     ```
      $ npm install trace.moe.ts
     ``` 
   
   * With `yarn`
     ```
      $ yarn add trace.moe.ts
     ``` 

<!--- USAGE --->
## — Usage
  ```js    
    const { API } = require("trace.moe.ts");
    // ES6 Import.
    // import { API } from "trace.moe.ts";

    const api = new API();

    // Fetching anime.
    await api.fetchAnime("https://cdn.kizu.cf/u/BKey7tr.jpeg");

    // Fetching anime with anilist info.
    await api.fetchAnime("https://cdn.kizu.cf/u/KdU9oT3.jpeg", { anilistInfo: true });

    // Fetching your qouta and account limits.
    await api.fetchMe();
  ```

<!--- LICENSE --->
## — License
   * This project is licensed under the [GPL-3.0](LICENSE) license.