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

---

<!--- USAGE --->
## — Usage
  ```js    
  const { TraceMoe } = require("trace.moe.ts");
  // ES6 Import.
  import { TraceMoe } from "trace.moe.ts";

  const api = new TraceMoe();

  // Fetching anime.
  await api.fetchAnime("https://cdn.kizu.cf/u/BKey7tr.jpeg"); // Returns Promise<SearchResponse>

  // Fetching anime with anilist info.
  await api.fetchAnime("https://cdn.kizu.cf/u/KdU9oT3.jpeg", { anilistInfo: true });

  // Fetching your qouta and account limits.
  await api.fetchMe(); // Returns Promise<MeResult>
  ```

## — Example Responses

   * `API#fetchAnime()`
   ```js
   {
      anilist: 12189, // Look up structures/Result.ts for anilist properties if anilistInfo is specified.
      filename: '[DHR&Hakugetsu][Hyouka][03][720P][BIG5][AVC_AAC].mp4',
      episode: 3,
      from: 471.33,
      to: 474.75,
      similarity: 0.9658578643762691,
      video: 'url-to-video',
      image: 'url-to-image'
   }
   ```
   
   * `API#fetchMe()`
   ```js
   {
      id: 'ip-or-token',
      priority: 0,
      concurrency: 1,
      quota: 1000,
      quotaUsed: 58
   }
   ```

---

<!--- LICENSE --->
## — License
   * This project is licensed under the [GPL-3.0](LICENSE) license.