import { API } from "../dist/API";

const api = new API();

(async function () {
    console.log(await api.fetchAnime("https://cdn.mythcord.cf/u/VcfjelS.png"));
})();