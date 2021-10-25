import { expect } from 'chai';
import { TraceMoe } from '../lib/index';
const api = new TraceMoe();

describe("API#fetchAnime", () => {
    let result: { anilist: { id: any; }; filename: any; episode: any; similarity: any; video: any; image: any; };
    it("should return an anime object", async () => {
        const res = await api.fetchAnime("https://cdn.xndr.tech/u/KdU9oT3.jpeg");
        result = res.result[0];
    })
        .timeout(7500);
    it("result properties should exist", () => {
        expect(result.anilist.id).to.be.a("number");
        expect(result.filename).to.be.a("string");
        expect(result.episode).to.be.a("number");
        expect(result.similarity).to.be.a("number");
        expect(result.video).to.be.a("string");
        expect(result.image).to.be.a("string");
    });
});

describe("API#fetchMe", () => {
    let result: { id: any; priority: any; concurrency: any; quota: any; quotaUsed: any; };
    it("should return an me object", async () => {
        result = await api.fetchMe();
    })
        .timeout(7500);
    it("result properties should exist", () => {
        expect(result.id).to.be.a("string");
        expect(result.priority).to.be.a("number");
        expect(result.concurrency).to.be.a("number");
        expect(result.quota).to.be.a("number");
        expect(result.quotaUsed).to.be.a("number");
    });
});