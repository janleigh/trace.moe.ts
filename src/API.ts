import fetch from "node-fetch";
import { Response } from "../typings";

export class API {

    public uris: { search: string; };

    /**
     * Constructs an instance of the API.
     */
    constructor() {
        this.uris = {
            search: `https://api.trace.moe/search`
        }
    }

    /**
     * Searches the website for the similar anime.
     * @param {string} imageURL The URL for the image.
     * @param {boolean} anilistInfo Include the anime info from AniList.
     */
    async fetchAnime(imageURL: string, anilistInfo: boolean): Promise<Response> {
        let url = `${this.uris.search}?url=${encodeURIComponent(imageURL)}`;
        if (anilistInfo === true)
            url += `&anilistInfo`;

        return await fetch(url)
            .then((res) => res.json());
    }

}