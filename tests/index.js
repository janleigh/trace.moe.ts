const { API } = require("../dist/index");
const api = new API();

(async function () {
    const anim = await api.fetchAnime("https://cdn.kizu.cf/u/KdU9oT3.jpeg", true);
    const me = await api.fetchMe();

    // console.log(anim);
    console.log(anim.result[0].anilist);
    console.log(me);
})();
