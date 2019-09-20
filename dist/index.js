'use strict';
/**
 * Takes an array of numbers and returns them one by one each iteration and increasing the previous one
 * by a specified value each iteration.
 */
module.exports = class NumSteps {
    /**
     * @param {Array<number>} numbers The numbers to iterate through.
     */
    constructor(numbers) {
        /**
         * Keeps track of the current iteration of the arguments.
         *
         * This is only updated once every argument has been incremented.
         *
         * @private
         *
         * @property {number}
         */
        this._iteration = 0;
        /**
         * Within the arguments, this keeps track of which argument was previously incremented so that we know which
         * one to increment next.
         *
         * @private
         *
         * @property {number}
         */
        this._previous = 0;
        this._numbers = numbers;
    }
    /**
     * Steps through the numbers, iterates the previous value, and returns the current value that needs to
     * be returned.
     *
     * @param {number} [steps=1] The amount of steps to take through the numbers.
     *
     * @returns {number}
     */
    step(steps = 1) {
        const stepsNormalized = steps - 1;
        this._previous += stepsNormalized;
        this._previous = stepsNormalized % this._numbers.length;
        this._iteration = Math.floor(stepsNormalized / this._numbers.length);
        return this._numbers[this._previous] + this._iteration;
    }
};
//# sourceMappingURL=index.js.map