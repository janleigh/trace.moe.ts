export interface SearchResponse {
    frameCount: number;
    error: string;
    result: Result[];
}

export interface MeResponse {
    id: string;
    priority: number;
    concurrency: number;
    quota: number;
    quotaUsed: number;
}
  
export interface Result {
    anilist: number|Anilist;
    filename: string;
    episode: number|null;
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
        romanji: string;
        english: string;
    }
    synonyms: string[];
    isAdult: boolean;
}
