/**
 * Asked by Goldman Sachs
 * 
 * Given a list of numbers `L`, implement a method `sum(i, j)`,
 * which returns the sum from the sublist `L[i:j]` (including `i`,
 * but excluding `j`.
 * 
 * @example
 * L = [1, 2, 3, 4, 5];
 * `sum(1, 3)` should return `sum([2, 3])` which is `5`
 * 
 * You can assume that you can do some pre-processing. `sum()` should be
 * optimized over the pre-processing step
 */

export class ListReducer {
	numList: number[];

	constructor (numList: number[]) {
		this.numList = numList;
	}

	public sum (i: number, j: number): number {
		return this.numList
			.slice(i, j)
			.reduce((a, b) => a + b);
	}
}

