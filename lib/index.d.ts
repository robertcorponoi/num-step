/**
 * Takes an array of numbers and returns them one by one each iteration and increasing the previous one
 * by a specified value each iteration.
 */
export default class NumStep {
    /**
     * Keeps track of the current iteration of the arguments.
     *
     * This is only updated once every argument has been incremented.
     *
     * @private
     *
     * @property {number}
     */
    private _iteration;
    /**
     * Within the arguments, this keeps track of which argument was previously incremented so that we know which
     * one to increment next.
     *
     * @private
     *
     * @property {number}
     */
    private _previous;
    /**
     * The numbers to iterate through.
     *
     * @private
     *
     * @property {Array<number>}
     */
    private _numbers;
    /**
     * @param {Array<number>} numbers The numbers to iterate through.
     */
    constructor(numbers: Array<number>);
    /**
     * Returns the current iteration.
     *
     * @returns {number}
     */
    get iteration(): number;
    /**
     * Steps through the numbers, iterates the previous value, and returns the current value that needs to
     * be returned.
     *
     * @param {number} [steps=1] The amount of steps to take through the numbers.
     *
     * @returns {number}
     */
    step(steps?: number): number;
}
