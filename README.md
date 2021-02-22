<!--- TITLE --->
# ★ trace.moe.ts

<!--- DESCRIPTION --->
  > An API wrapper for https://trace.moe with typings
  
<!--- INFORMATION --->
## — Info
   * Written using [TypeScript](https://www.typescriptlang.org/)
   * Maintained by [@TheRealKizu](https://github.com/TheRealKizu)

<!--- INSTALLATION --->
## — Installation
   * With `npm`
     ```
      $ npm install trace.moe.ts
     ``` 
   
   * With `yarn`
     ```
      $ yarn install trace.moe.ts
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
     const api = new API();

     api.fetchAnime("https://cdn.mythcord.cf/u/mItpBjo.png");

     // Response
     docs: [
      {
         filename: '[REMOVED]',
         episode: 11,
         from: 1254.08,
         to: 1258.33,
         similarity: 0.9179581323743154,
         anilist_id: 21355,
         anime: 'Re：從零開始的異世界生活',
         at: 1256.205,
         is_adult: false,
         mal_id: 31240,
         season: '',
         synonyms: [Array],
         synonyms_chinese: [],
         title: 'Re:ゼロから始める異世界生活',
         title_chinese: 'Re：從零開始的異世界生活',
         title_english: 'Re:ZERO -Starting Life in Another World-',
         title_native: 'Re:ゼロから始める異世界生活',
         title_romaji: 'Re:Zero kara Hajimeru Isekai Seikatsu',
         tokenthumb: 'dFQkE2btJhEfZjPvASFAeuuvgaw'
      } 
     ] 
     ``` 

<!--- LICENSE --->
## — License
   * This project is licensed under the [GPL-3.0](LICENSE) license.

<!--- SUPPORT --->
## — Support
   * Discord Account: `TheRealKizu#3267`
   * Email: `therealkizu@protonmail.com`