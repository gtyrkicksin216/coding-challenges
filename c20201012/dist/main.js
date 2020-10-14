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
    constructor(values) {
        this.values = values;
    }
    getResultGivenIndex(index) {
        const distanceFromStartingValue = this.getClosestLargestValue([...this.values].sort((a, b) => a - b), index);
        return distanceFromStartingValue
            ? this.values.indexOf(distanceFromStartingValue)
            : null;
    }
    getClosestLargestValue(values, startingIndex) {
        var _a, _b;
        const largerValues = values.map(value => ({ value, distance: Math.abs(this.values.indexOf(value) - startingIndex) }))
            .filter(item => item.distance !== 0 && item.value > this.values[startingIndex]);
        return (_b = (_a = largerValues.find(value => value.distance === Math.min(...largerValues.map(a => a.distance)))) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : null;
    }
}
exports.ClosestLargerNumber = ClosestLargerNumber;
