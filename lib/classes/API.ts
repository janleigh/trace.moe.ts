import fetch from "node-fetch";
import { MeResponse } from "../structures/MeResponse";
import { SearchParameters } from "../structures/SearchParameters";
import { SearchResponse } from "../structures/SearchResponse";

export class API {

    private uris: {
        search: string,
        me: string;
    };

    /**
     * Constructs an instance of the API.
     */
    constructor() {
        this.uris = {
            search: `https://api.trace.moe/search`,
            me: `https://api.trace.moe/me`
        };
    }
   
    /**
     * Searches the website for the similar anime.
     * @param {string} imageURL The URL for the image.
     * @param {SearchParameters} extras Extra parameters for the search.
     * @returns {SearchResponse}
     */
    async fetchAnime(imageURL: string, { cutBorders = false, anilistId = false }: SearchParameters = {}): Promise<SearchResponse> {
        let url = `${this.uris.search}?url=${encodeURIComponent(imageURL)}&anilistInfo`;
        if (cutBorders)
            url += `&cutBorders`;
        
        if (anilistId)
            url += `&anilistID=1`;

        return await fetch(url)
            .then((res) => res.json())
            .catch((err) => { throw new Error(err)} );
    }

    /**
     * Returns your search quota and limits for your account.
     * @param {string} key Your API key for trace.moe.
     * @returns {MeResponse}
     */
    async fetchMe(key?: string): Promise<MeResponse> {
        let url = this.uris.me;
        if (key)
            url += `?key=${key}`;

        return await fetch(url)
            .then((res) => res.json())
            .catch((err) => { throw new Error(err)} );
    }

}