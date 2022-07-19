export interface Result {
	anilist: Anilist | any;
	filename: string;
	episode: number | null;
	from: number;
	to: number;
	similarity: number;
	video: string;
	image: string;
}

export interface Anilist {
	id: number;
	idMal: number;
	title: {
		native: string;
		romaji: string;
		english: string;
	};
	synonyms: string[];
	isAdult: boolean;
}
