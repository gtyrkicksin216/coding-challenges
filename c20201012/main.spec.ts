import { ClosestLargerNumber } from './main';

describe(`Find the closest larger number index`, () => {
	it(`Should return 3`, () => {
		const result = new ClosestLargerNumber(0, [4, 1, 3, 5, 6]).getResult();
		expect(result).toEqual(3);
	});

	it(`Should return 2`, () => {
		const result = new ClosestLargerNumber(1, [8, 6, 7, 5, 3, 0, 9]).getResult();
		expect(result).toEqual(2)
	});

	it(`Should return 1`, () => {
		const result = new ClosestLargerNumber(2, [8, 3, 2, 1, 0, 23]).getResult();
		expect(result).toEqual(1);
	});

	it(`Should return null`, () => {
		const result = new ClosestLargerNumber(5, [1, 2, 3, 4, 5, 6]).getResult();
		expect(result).toBeNull();
	})
});
