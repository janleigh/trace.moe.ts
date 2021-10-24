const { expect } = require('chai');
const { log } = require('console');
const { TraceMoe } = require('../dist/index');
const api = new TraceMoe();

describe("API#fetchAnime", () => {
    let result;
    it("should return an anime object", async () => {
        const res = await api.fetchAnime("https://cdn.xndr.tech/u/KdU9oT3.jpeg");
        result = res.result[0];
    })
        .timeout(7500);
    it("result properties should exist", () => {
        expect(result.anilist).to.be.a("number");
        expect(result.filename).to.be.a("string");
        expect(result.episode).to.be.a("number");
        expect(result.similarity).to.be.a("number");
        expect(result.video).to.be.a("string");
        expect(result.image).to.be.a("string");
    });
});

describe("API#fetchMe", () => {
    let result;
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