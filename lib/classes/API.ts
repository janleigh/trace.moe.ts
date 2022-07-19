import fetch from "node-fetch";
import { Endpoints } from "../structures/enums/Endpoints";
import { MeResponse } from "../structures/MeResponse";
import { SearchParameters } from "../structures/SearchParameters";
import { SearchResponse } from "../structures/SearchResponse";
import { Utils } from "./Utils";

export class API {
	private uris: {
		search: string;
		me: string;
	};

	/**
	 * The utils class.
	 */
	public utils: Utils;

	/**
	 * Constructs an instance of the API.
	 */
	constructor() {
		this.uris = {
			search: Endpoints.SEARCH,
			me: Endpoints.ME
		};
		this.utils = new Utils();
	}

	/**
	 * Searches the website for the similar anime.
	 * @param {string} imageURL The URL for the image.
	 * @param {SearchParameters} options Optional parameters for the search.
	 * @returns {SearchResponse}
	 */
	async fetchAnime(imageURL: string, options?: SearchParameters): Promise<SearchResponse> {
		if (!imageURL || typeof imageURL !== "string")
			throw new TypeError(`'imageURL' should be type string. Got type ${typeof imageURL} instead.`);

		const url = this.utils.handleOptionalParameters(this.uris.search, imageURL, options);

		return await fetch(url)
			.then((res) => res.json())
			.catch((err) => {
				throw new Error(err);
			});
	}

	/**
	 * Searches the website for the similar anime but this time using an image file.
	 * @param {Buffer} buffer The image buffer. Limited to 25 MB.
	 * @param {SearchParameters} options Optional parameters for the search.
	 * @returns {SearchResponse}
	 */
	async fetchAnimeFromBuffer(buffer: Buffer, options?: SearchParameters): Promise<SearchResponse> {
		if (!buffer || !(buffer instanceof Buffer))
			throw new TypeError(`'buffer' should be type Buffer. Got type ${typeof buffer} instead.`);

		const url = this.utils.handleOptionalParameters(this.uris.search, undefined, options);

		return await fetch(url, {
			method: "POST",
			body: buffer,
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			}
		})
			.then((res) => res.json())
			.catch((err) => {
				throw new Error(err);
			});
	}

	/**
	 * Returns your search quota and limits for your account.
	 * @param {string} key Your API key for trace.moe.
	 * @returns {MeResponse}
	 */
	async fetchMe(key?: string): Promise<MeResponse> {
		let url = this.uris.me;
		if (key) url += `?key=${key}`;

		return await fetch(url)
			.then((res) => res.json())
			.catch((err) => {
				throw new Error(err);
			});
	}
}
