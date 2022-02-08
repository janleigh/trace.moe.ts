import { Result } from "./Result";

export interface SearchResponse {
    frameCount: number;
    error: string;
    result: Result[];
}
