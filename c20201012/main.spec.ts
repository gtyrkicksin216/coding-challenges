import { ClosestLargerNumber } from './main';

describe(`Find the closest larger number index`, () => {
	it(`Should return 3`, () => {
		console.time(`test 1`);
		const result = new ClosestLargerNumber([4, 1, 3, 5, 6]).getResultGivenIndex(0);
		expect(result).toEqual(3);
	});

	it(`Should return 2`, () => {
		const result = new ClosestLargerNumber([8, 6, 7, 5, 3, 0, 9]).getResultGivenIndex(1);
		expect(result).toEqual(2)
	});

	it(`Should return 1`, () => {
		const result = new ClosestLargerNumber([8, 3, 2, 1, 0, 23]).getResultGivenIndex(2);
		expect(result).toEqual(1);
	});

	it(``, () => {
		const result = new ClosestLargerNumber([1, 5, 3, 4, 7, 8, 9]).getResultGivenIndex(3);
		expect(result).toBe(4);
	});

	it(`Should return null`, () => {
		const result = new ClosestLargerNumber([1, 2, 3, 4, 5, 6]).getResultGivenIndex(5);
		expect(result).toBeNull();
	})
});
