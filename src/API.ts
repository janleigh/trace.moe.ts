import fetch from "node-fetch";
import { MeResponse, SearchResponse } from "../typings";

export class API {

    public uris: { 
        search: string,
        me: string
    };

    /**
     * Constructs an instance of the API.
     */
    constructor() {
        this.uris = {
            search: `https://api.trace.moe/search`,
            me: `https://api.trace.moe/me`
        }
    }

    /**
     * Searches the website for the similar anime.
     * @param {string} imageURL The URL for the image.
     * @param {boolean} anilistInfo Include the anime info from AniList.
     * @returns {SearchResponse}
     */
    async fetchAnime(imageURL: string, anilistInfo?: boolean): Promise<SearchResponse> {
        let url = `${this.uris.search}?url=${encodeURIComponent(imageURL)}`;
        if (anilistInfo === true)
            url += `&anilistInfo`;

        return await fetch(url)
            .then((res) => res.json());
    }

    /**
     * Returns your search quota and limits for your account.
     * @returns {MeResponse}
     */
    async fetchMe(): Promise<MeResponse> {
        // TODO: Add support for API keys.

        return await fetch(this.uris.me)
            .then((res) => res.json());
    }

}
