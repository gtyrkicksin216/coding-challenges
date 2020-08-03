/**
 * This problem was asked by Twitter.
 *
 * A permutation can be specified by an array `P`, where `P[i]` represents the location of the element at `i` in the permutation.
 * For example, `[2, 1, 0]` represents the permutation where elements at the index 0 and 2 are swapped.
 *
 * Given an array and a permutation, apply the permutation to the array.
 * For example, given the array `["a", "b", "c"]` and the permutation `[2, 1, 0]`, return `["c", "b", "a"]`.
 */

import { ArrayPermutation } from './main';

const baseline = {
	values: ['a', 'b', 'c'],
	permutation: [2, 1, 0],
	expectedResult: ['c', 'b', 'a'],
};
const test1 = {
	values: [false, 'elephant', 'books'],
	permutation: [2, 0, 1],
	expectedResult: ['books', false, 'elephant'],
};
const test2 = {
	values: [false, 5, 8],
	permutation: [0, 2, 1],
	expectedResult: [false, 8, 5],
};
const test3 = {
	values: ['world', 'hello', 6],
	permutation: [1, 0, 2],
	expectedResult: ['hello', 'world', 6],
};

describe(`Array Permutation`, () => {
	it(`Should return ${baseline.expectedResult}`, () => {
		expect(new ArrayPermutation(baseline.permutation, baseline.values).getResult()).toEqual(baseline.expectedResult);
	});

	it(`Should return ${test1.expectedResult}`, () => {
		expect(new ArrayPermutation(test1.permutation, test1.values).getResult()).toEqual(test1.expectedResult);
	});

	it(`Should return ${test2.expectedResult}`, () => {
		expect(new ArrayPermutation(test2.permutation, test2.values).getResult()).toEqual(test2.expectedResult);
	});

	it(`Should return ${test3.expectedResult}`, () => {
		expect(new ArrayPermutation(test3.permutation, test3.values).getResult()).toEqual(test3.expectedResult);
	});
});
