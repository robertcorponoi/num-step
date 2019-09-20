'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Keeps track of the numbers passed to the main module.
 *
 * This enables the main function to have memory of the previous state of the values without having to convert
 * it to a class.
 */
exports.default = {
    /**
     * Keeps track of the current iteration of the arguments.
     *
     * This is only updated once every argument has been incremented.
     *
     * @property {number}
     */
    iteration: 0,
    /**
     * Within the arguments, this keeps track of which argument was previously incremented so that we know which
     * one to increment next.
     *
     * @property {number}
     */
    previous: 0,
    /**
     * The arguments to increment.
     *
     * @property {Array<number>}
     */
    numbers: [],
};
//# sourceMappingURL=memory.js.map