'use strict';
/**
 * Takes an array of numbers and returns them one by one each iteration and increasing the previous one
 * by a specified value each iteration.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NumSteps =
/*#__PURE__*/
function () {
  /**
   * Keeps track of the current iteration of the arguments.
   * 
   * This is only updated once every argument has been incremented.
   * 
   * @private
   * 
   * @property {number}
   */

  /**
   * Within the arguments, this keeps track of which argument was previously incremented so that we know which
   * one to increment next.
   * 
   * @private
   * 
   * @property {number}
   */

  /**
   * The numbers to iterate through.
   * 
   * @private
   * 
   * @property {Array<number>}
   */

  /**
   * @param {Array<number>} numbers The numbers to iterate through.
   */
  function NumSteps(numbers) {
    _classCallCheck(this, NumSteps);

    _defineProperty(this, "_iteration", 0);

    _defineProperty(this, "_previous", 0);

    _defineProperty(this, "_numbers", void 0);

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


  _createClass(NumSteps, [{
    key: "step",
    value: function step() {
      var steps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var stepsNormalized = steps - 1;
      this._previous += stepsNormalized;
      this._previous = stepsNormalized % this._numbers.length;
      this._iteration = Math.floor(stepsNormalized / this._numbers.length);
      return this._numbers[this._previous] + this._iteration;
    }
  }]);

  return NumSteps;
}();

exports["default"] = NumSteps;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJOdW1TdGVwcyIsIm51bWJlcnMiLCJfbnVtYmVycyIsInN0ZXBzIiwic3RlcHNOb3JtYWxpemVkIiwiX3ByZXZpb3VzIiwibGVuZ3RoIiwiX2l0ZXJhdGlvbiIsIk1hdGgiLCJmbG9vciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSXFCQSxROzs7QUFFbkI7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7O0FBU0E7OztBQUdBLG9CQUFZQyxPQUFaLEVBQW9DO0FBQUE7O0FBQUEsd0NBeEJQLENBd0JPOztBQUFBLHVDQWRSLENBY1E7O0FBQUE7O0FBRWxDLFNBQUtDLFFBQUwsR0FBZ0JELE9BQWhCO0FBRUQ7QUFFRDs7Ozs7Ozs7Ozs7OzJCQVFnQztBQUFBLFVBQTNCRSxLQUEyQix1RUFBWCxDQUFXO0FBRTlCLFVBQU1DLGVBQXVCLEdBQUdELEtBQUssR0FBRyxDQUF4QztBQUVBLFdBQUtFLFNBQUwsSUFBa0JELGVBQWxCO0FBRUEsV0FBS0MsU0FBTCxHQUFpQkQsZUFBZSxHQUFHLEtBQUtGLFFBQUwsQ0FBY0ksTUFBakQ7QUFFQSxXQUFLQyxVQUFMLEdBQWtCQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsZUFBZSxHQUFHLEtBQUtGLFFBQUwsQ0FBY0ksTUFBM0MsQ0FBbEI7QUFFQSxhQUFPLEtBQUtKLFFBQUwsQ0FBYyxLQUFLRyxTQUFuQixJQUFnQyxLQUFLRSxVQUE1QztBQUVEOzs7Ozs7O0FBRUYiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbi8qKlxyXG4gKiBUYWtlcyBhbiBhcnJheSBvZiBudW1iZXJzIGFuZCByZXR1cm5zIHRoZW0gb25lIGJ5IG9uZSBlYWNoIGl0ZXJhdGlvbiBhbmQgaW5jcmVhc2luZyB0aGUgcHJldmlvdXMgb25lXHJcbiAqIGJ5IGEgc3BlY2lmaWVkIHZhbHVlIGVhY2ggaXRlcmF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTnVtU3RlcHMge1xyXG5cclxuICAvKipcclxuICAgKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBpdGVyYXRpb24gb2YgdGhlIGFyZ3VtZW50cy5cclxuICAgKiBcclxuICAgKiBUaGlzIGlzIG9ubHkgdXBkYXRlZCBvbmNlIGV2ZXJ5IGFyZ3VtZW50IGhhcyBiZWVuIGluY3JlbWVudGVkLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfaXRlcmF0aW9uOiBudW1iZXIgPSAwO1xyXG5cclxuICAvKipcclxuICAgKiBXaXRoaW4gdGhlIGFyZ3VtZW50cywgdGhpcyBrZWVwcyB0cmFjayBvZiB3aGljaCBhcmd1bWVudCB3YXMgcHJldmlvdXNseSBpbmNyZW1lbnRlZCBzbyB0aGF0IHdlIGtub3cgd2hpY2hcclxuICAgKiBvbmUgdG8gaW5jcmVtZW50IG5leHQuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge251bWJlcn1cclxuICAgKi9cclxuICBwcml2YXRlIF9wcmV2aW91czogbnVtYmVyID0gMDtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIG51bWJlcnMgdG8gaXRlcmF0ZSB0aHJvdWdoLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtBcnJheTxudW1iZXI+fVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX251bWJlcnM6IEFycmF5PG51bWJlcj47XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gbnVtYmVycyBUaGUgbnVtYmVycyB0byBpdGVyYXRlIHRocm91Z2guXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IobnVtYmVyczogQXJyYXk8bnVtYmVyPikge1xyXG5cclxuICAgIHRoaXMuX251bWJlcnMgPSBudW1iZXJzO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0ZXBzIHRocm91Z2ggdGhlIG51bWJlcnMsIGl0ZXJhdGVzIHRoZSBwcmV2aW91cyB2YWx1ZSwgYW5kIHJldHVybnMgdGhlIGN1cnJlbnQgdmFsdWUgdGhhdCBuZWVkcyB0b1xyXG4gICAqIGJlIHJldHVybmVkLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbc3RlcHM9MV0gVGhlIGFtb3VudCBvZiBzdGVwcyB0byB0YWtlIHRocm91Z2ggdGhlIG51bWJlcnMuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge251bWJlcn1cclxuICAgKi9cclxuICBzdGVwKHN0ZXBzOiBudW1iZXIgPSAxKTogbnVtYmVyIHtcclxuXHJcbiAgICBjb25zdCBzdGVwc05vcm1hbGl6ZWQ6IG51bWJlciA9IHN0ZXBzIC0gMTtcclxuXHJcbiAgICB0aGlzLl9wcmV2aW91cyArPSBzdGVwc05vcm1hbGl6ZWQ7XHJcblxyXG4gICAgdGhpcy5fcHJldmlvdXMgPSBzdGVwc05vcm1hbGl6ZWQgJSB0aGlzLl9udW1iZXJzLmxlbmd0aDtcclxuXHJcbiAgICB0aGlzLl9pdGVyYXRpb24gPSBNYXRoLmZsb29yKHN0ZXBzTm9ybWFsaXplZCAvIHRoaXMuX251bWJlcnMubGVuZ3RoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fbnVtYmVyc1t0aGlzLl9wcmV2aW91c10gKyB0aGlzLl9pdGVyYXRpb247XHJcblxyXG4gIH1cclxuXHJcbn07Il19