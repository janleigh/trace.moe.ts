import fetch from "node-fetch";
import { encode } from "node-base64-image";
import { Response, PreviewType } from "../typings";

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
     * Returns an URL to an image/video preview of the similar anime.
     * Use <API>.fetchAnime() to get the needed parameters.
     * @param {string|PreviewType} type Whether if type is image or video
     * @param {number} anilistID The Anilist ID of the similar anime.
     * @param {number} at The "at" value of the similar anime.
     * @param {string} filename The filename of the similar anime.
     * @param {string} tokenthumb The thumbnail token of the similar anime.
     */
    async fetchPreviewURL(type: string|PreviewType, anilistID: number, at: number, filename: string, tokenthumb: string) {
        if (type !== "image" || "video")
            return Error("Invalid provided type!");

        switch (type) {
            default:
            case "image":
                let anID = encodeURIComponent(anilistID),
                    t = encodeURIComponent(at),
                    fn = encodeURIComponent(filename),
                    token = encodeURIComponent(tokenthumb)

                return `https://trace.moe/thumbnail.php?anilist_id=${anID}&file=${fn}&t=${t}&token=${token}`;
                break;
        }
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