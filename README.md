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
     // Title: Re:ゼロから始める異世界生活
     // Episode 11
     // Check typings file for example response.
     ``` 

<!--- LICENSE --->
## — License
   * This project is licensed under the [GPL-3.0](LICENSE) license.

<!--- SUPPORT --->
## — Support
   * Discord Account: `TheRealKizu#3267`
   * Email: `therealkizu@protonmail.com`