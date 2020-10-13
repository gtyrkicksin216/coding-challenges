/**
 * Asked by Google
 * 
 * Given an array of numbers and index `i`
 * return the index of the nearest larger number of
 * the number at index `i`, where distance is
 * measured in array indicies.
 * 
 * For example, given `[4, 1, 3, 5, 6]` and
 * index `0`, you should return `3`.
 * 
 * If two distances to larger numers are equal,
 * then return any one of them. If the array at `i`
 * doesn't have a nearest larger integer, then return
 * `null`
 * 
 * Follow-up: If you can preprocess the array, can
 * you do this in constant time.
 */

export class ClosestLargerNumber {
	private values: number[];
	private startingIndex: number;

	constructor (startingIndex: number, values: number[]) {
		this.values = values;
		this.startingIndex = startingIndex;
	}

	public getResult (): number | null | undefined {
		const startingValue: number = this.values[this.startingIndex];
		const sortedValues: number[] = [...this.values].sort((a, b) => a - b);
		const nextLargest = sortedValues[sortedValues.findIndex(value => value === startingValue) + 1];
		const nextLargestIndex: number = this.values.findIndex(value => value === nextLargest);

		return nextLargestIndex !== -1
			? nextLargestIndex
			: null;
	}
}
