<!--- TITLE --->
# ★ trace.moe.ts

<!--- DESCRIPTION --->
  > An API wrapper for https://trace.moe with typings.

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

<!--- EXAMPLE --->
## — Examples
   * Importing in your project
     ```js
     // JavaScript
     const { API } = require("trace.moe.ts");

     // TypeScript 
     import { API } from "trace.moe.ts";

     const api = new API();
     ``` 
   
   * Fetching similar anime
     ```js
     <API>.fetchAnime("https://cdn.kizu.cf/u/KdU9oT3.jpeg");

     // Example Response.
     {
      anilist: {
        id: 12189,
        idMal: 12189,
        title: { native: '氷菓', romaji: 'Hyouka', english: 'Hyouka' },
        synonyms: [ 'Hyouka: Forbidden Secrets' ],
        isAdult: false
      },
      filename: '[DHR&Hakugetsu][Hyouka][03][720P][BIG5][AVC_AAC].mp4',
      episode: 3,
      from: 471.25,
      to: 474.83,
      similarity: 0.9617157287525382
     }
     ``` 

<!--- LICENSE --->
## — License
   * This project is licensed under the [GPL-3.0](LICENSE) license.