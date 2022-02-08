<!---
this readme sucks
--->

<!--- TITLE --->
<h2 align="center"> trace.moe.ts </h2>

<!--- DESCRIPTION --->
<div align="center">
   <p/>
   <strong>An API wrapper for https://trace.moe with typings.</strong>
   <p/>
   <a href="https://circleci.com/gh/janleigh/trace.moe.ts/">
      <img src="https://img.shields.io/circleci/build/github/janleigh/trace.moe.ts?style=for-the-badge" alt="CircleCI Build Status"/>
   </a>
   <img src="https://img.shields.io/npm/dt/trace.moe.ts?style=for-the-badge" alt="Downloads"/>
   <a href="LICENSE">
      <img src="https://img.shields.io/github/license/janleigh/trace.moe.ts?style=for-the-badge" alt="License">
   </a>
   <br>
</div>

<!--- INSTALLATION --->
### ❖ Installation
  You can use the following command to install this package, or replace `yarn add` with your package manager of choice.
  ```
   $ yarn add trace.moe.ts
  ```

---

<!--- USAGE --->
### ❖ Usage
  ```js    
  const { TraceMoe } = require("trace.moe.ts");
  // ES6 Import.
  import { TraceMoe } from "trace.moe.ts";

  const api = new TraceMoe();

  // Fetching similar anime using an url.
  await api.fetchAnime("https://cdn.xndr.tech/u/BKey7tr.jpeg"); // Returns Promise<SearchResponse>

  // Fetching similar anime using an image.
  await api.fetchAnimeFromBuffer(fs.readFileSync("path-to-image")); // Returns Promise<SearchResponse>

  // Fetching your qouta and account limits.
  await api.fetchMe(); // Returns Promise<MeResult>
  ```

### ❖ Example Responses

   * `API#fetchAnime()` and `API#fetchAnimeFromBuffer()`
   ```js
   {
      frameCount: 9339843,
      error: '',
      result: Array<Result> // Refer to lib/structures/Result.ts or below for reference.
   }
   ```

   *  [`Result.ts`](lib/structures/Result.ts)
   ```js
   {
      // anilist: 12189 # If anilistInfo is false, this is the value it will return. If true, refer below.
      anilist: {
        id: 12189,
        idMal: 12189,
        title: {
          native: '氷菓',
          romaji: 'Hyouka',
          english: 'Hyouka'
        },
        synonyms: [ 'Hyouka: Forbidden Secrets' ],
        isAdult: false
      },
      filename: '[DHR&Hakugetsu][Hyouka][03][720P][BIG5][AVC_AAC].mp4',
      episode: 3,
      from: 471.33, // Parsed in milliseconds.
      to: 474.75, // Parsed in milliseconds.
      similarity: 0.9658578643762691, // Will return 1 if 100% similar.
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
### ❖ License
   * This project is licensed under the [GPL-3.0](LICENSE) license.
