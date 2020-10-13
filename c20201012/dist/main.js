"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClosestLargerNumber = void 0;
class ClosestLargerNumber {
    constructor(startingIndex, values) {
        this.values = values;
        this.startingIndex = startingIndex;
    }
    getResult() {
        const valueAtStartingIndex = this.values[this.startingIndex];
        const sortedAscending = this.values.sort((a, b) => a - b);
        console.log(sortedAscending);
        const sortedIndex = sortedAscending.findIndex(value => value === valueAtStartingIndex);
        console.log(this.values.findIndex(value => value === sortedAscending[sortedIndex]));
        return this.values.findIndex(value => value > valueAtStartingIndex);
    }
}
exports.ClosestLargerNumber = ClosestLargerNumber;
// const closest = new ClosestLargerNumber(0, [4, 1, 3, 5, 6]);
const closest = new ClosestLargerNumber(1, [8, 6, 7, 5, 3, 0, 9]);
console.log(closest.getResult());
