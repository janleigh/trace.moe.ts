const { API } = require("../dist/index");
const api = new API();

(async function () {
    const animeWithoutAnilist = await api.fetchAnime("https://cdn.kizu.cf/u/KdU9oT3.jpeg");
    const animeWithAnilist = await api.fetchAnime("https://cdn.kizu.cf/u/BKey7tr.jpeg", { anilistInfo: true });
    const me = await api.fetchMe();

    console.log(animeWithoutAnilist.result[0]);
    console.log(animeWithAnilist.result[0]);
    console.log(me);
})();