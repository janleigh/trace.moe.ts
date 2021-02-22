import fetch from "node-fetch";
import { encode } from "node-base64-image";
import { Response } from "../typings/index.d";

export class API {

    public uris: { search: string; };

    /**
     * Constructs an instance of the API.
     */
    constructor() {
        this.uris = {
            search: `https://trace.moe/api/search`
        }
    }

    /**
     * Searches the website for the similar anime.
     * @param {string} imageURL The URL for the image.
     */
    async fetchAnime(imageURL: string): Promise<Response> {
        if (typeof imageURL !== "string")
            Error("Image URL should be a string!");

        return await fetch("https://trace.moe/api/search", {
            method: "POST",
            body: JSON.stringify({
                image: await this.convertToBase64(imageURL)
            }),
            headers: { "Content-Type": "application/json" }
        })
            .then((res) => res.json());
    }

    /**
     * Converts/Encode the image to Base64.
     * @param {string} image The image to be converted to Base64.
     */
    async convertToBase64(image: string): Promise<string | Buffer> {
        return await encode(image, {
            string: true
        });
    }

}