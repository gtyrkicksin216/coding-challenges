"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
const baseline = [1, 2, 3, 4, 5];
const test1 = [4, 5, 2, 8, 1, 10];
const test2 = [8, 6, 7, 5, 3, 0, 9];
const test3 = [1, 3, 5, 7, 9, 2, 4, 6, 8];
describe('Baseline', () => {
    it(`Should return 5 when passed the baseline`, () => {
        expect(new main_1.ListReducer(baseline).sum(1, 3)).toBe(5);
    });
    it(`Should return 10`, () => {
        expect(new main_1.ListReducer(test1).sum(2, 4)).toBe(10);
    });
    it(`Should return 15`, () => {
        expect(new main_1.ListReducer(test2).sum(2, 6)).toBe(15);
    });
    it(`Should return 25`, () => {
        expect(new main_1.ListReducer(test3).sum(0, 5)).toBe(25);
    });
});
