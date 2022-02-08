export interface MeResponse {
    id: string;
    priority: number;
    concurrency: number;
    quota: number;
    quotaUsed: number;
}
