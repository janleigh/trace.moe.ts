import { SearchParameters } from "../structures/SearchParameters";

export class Utils {
    /**
     * Handles optional parameters for searching anime.
     * @param {string} baseURL The base URL to use for the search.
     * @param {string} imageURL The base URL to use for the image.
     * @param {SearchParameters} params The parameters to use for the search.
     */
    handleOptionalParameters(baseURL: string, imageURL?: string, params?: SearchParameters) {
        let reqURI = baseURL;

        // Set default values if not specified.
        const defaults: SearchParameters = {
            cutBorders: false,
            anilistID: false,
            anilistInfo: false
        };
        params = Object.assign(defaults, params);

        if (imageURL !== undefined) {
            reqURI += `?url=${encodeURIComponent(imageURL)}&`;
        } else {
            reqURI += "?";
        }

        if (params.cutBorders) reqURI += "cutBorders";

        if (params.anilistID) reqURI += "anilistID=1";

        if (params.anilistInfo) reqURI += "anilistInfo";

        return reqURI;
    }
}
