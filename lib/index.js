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

var NumStep =
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
  function NumStep(numbers) {
    _classCallCheck(this, NumStep);

    _defineProperty(this, "_iteration", 0);

    _defineProperty(this, "_previous", 0);

    _defineProperty(this, "_numbers", void 0);

    this._numbers = numbers;
  }
  /**
   * Returns the current iteration.
   * 
   * @returns {number}
   */


  _createClass(NumStep, [{
    key: "step",

    /**
     * Steps through the numbers, iterates the previous value, and returns the current value that needs to
     * be returned.
     * 
     * @param {number} [steps=1] The amount of steps to take through the numbers.
     * 
     * @returns {number}
     */
    value: function step() {
      var steps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var stepsNormalized = steps - 1;
      this._previous += stepsNormalized;
      this._previous = stepsNormalized % this._numbers.length;
      this._iteration = Math.floor(stepsNormalized / this._numbers.length);
      return this._numbers[this._previous] + this._iteration;
    }
  }, {
    key: "iteration",
    get: function get() {
      return this._iteration;
    }
  }]);

  return NumStep;
}();

exports["default"] = NumStep;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJOdW1TdGVwIiwibnVtYmVycyIsIl9udW1iZXJzIiwic3RlcHMiLCJzdGVwc05vcm1hbGl6ZWQiLCJfcHJldmlvdXMiLCJsZW5ndGgiLCJfaXRlcmF0aW9uIiwiTWF0aCIsImZsb29yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJcUJBLE87OztBQUNuQjs7Ozs7Ozs7OztBQVdBOzs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7QUFTQTs7O0FBR0EsbUJBQVlDLE9BQVosRUFBb0M7QUFBQTs7QUFBQSx3Q0F4QlAsQ0F3Qk87O0FBQUEsdUNBZFIsQ0FjUTs7QUFBQTs7QUFFbEMsU0FBS0MsUUFBTCxHQUFnQkQsT0FBaEI7QUFFRDtBQUVEOzs7Ozs7Ozs7O0FBT0E7Ozs7Ozs7OzJCQVFnQztBQUFBLFVBQTNCRSxLQUEyQix1RUFBWCxDQUFXO0FBQzlCLFVBQU1DLGVBQXVCLEdBQUdELEtBQUssR0FBRyxDQUF4QztBQUVBLFdBQUtFLFNBQUwsSUFBa0JELGVBQWxCO0FBQ0EsV0FBS0MsU0FBTCxHQUFpQkQsZUFBZSxHQUFHLEtBQUtGLFFBQUwsQ0FBY0ksTUFBakQ7QUFFQSxXQUFLQyxVQUFMLEdBQWtCQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsZUFBZSxHQUFHLEtBQUtGLFFBQUwsQ0FBY0ksTUFBM0MsQ0FBbEI7QUFFQSxhQUFPLEtBQUtKLFFBQUwsQ0FBYyxLQUFLRyxTQUFuQixJQUFnQyxLQUFLRSxVQUE1QztBQUNEOzs7d0JBbkJ1QjtBQUFFLGFBQU8sS0FBS0EsVUFBWjtBQUF5Qjs7Ozs7OztBQW9CcEQiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbi8qKlxyXG4gKiBUYWtlcyBhbiBhcnJheSBvZiBudW1iZXJzIGFuZCByZXR1cm5zIHRoZW0gb25lIGJ5IG9uZSBlYWNoIGl0ZXJhdGlvbiBhbmQgaW5jcmVhc2luZyB0aGUgcHJldmlvdXMgb25lXHJcbiAqIGJ5IGEgc3BlY2lmaWVkIHZhbHVlIGVhY2ggaXRlcmF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTnVtU3RlcCB7XHJcbiAgLyoqXHJcbiAgICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgaXRlcmF0aW9uIG9mIHRoZSBhcmd1bWVudHMuXHJcbiAgICogXHJcbiAgICogVGhpcyBpcyBvbmx5IHVwZGF0ZWQgb25jZSBldmVyeSBhcmd1bWVudCBoYXMgYmVlbiBpbmNyZW1lbnRlZC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2l0ZXJhdGlvbjogbnVtYmVyID0gMDtcclxuXHJcbiAgLyoqXHJcbiAgICogV2l0aGluIHRoZSBhcmd1bWVudHMsIHRoaXMga2VlcHMgdHJhY2sgb2Ygd2hpY2ggYXJndW1lbnQgd2FzIHByZXZpb3VzbHkgaW5jcmVtZW50ZWQgc28gdGhhdCB3ZSBrbm93IHdoaWNoXHJcbiAgICogb25lIHRvIGluY3JlbWVudCBuZXh0LlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfcHJldmlvdXM6IG51bWJlciA9IDA7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBudW1iZXJzIHRvIGl0ZXJhdGUgdGhyb3VnaC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7QXJyYXk8bnVtYmVyPn1cclxuICAgKi9cclxuICBwcml2YXRlIF9udW1iZXJzOiBBcnJheTxudW1iZXI+O1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IG51bWJlcnMgVGhlIG51bWJlcnMgdG8gaXRlcmF0ZSB0aHJvdWdoLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG51bWJlcnM6IEFycmF5PG51bWJlcj4pIHtcclxuXHJcbiAgICB0aGlzLl9udW1iZXJzID0gbnVtYmVycztcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGl0ZXJhdGlvbi5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIGdldCBpdGVyYXRpb24oKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2l0ZXJhdGlvbjsgfVxyXG5cclxuICAvKipcclxuICAgKiBTdGVwcyB0aHJvdWdoIHRoZSBudW1iZXJzLCBpdGVyYXRlcyB0aGUgcHJldmlvdXMgdmFsdWUsIGFuZCByZXR1cm5zIHRoZSBjdXJyZW50IHZhbHVlIHRoYXQgbmVlZHMgdG9cclxuICAgKiBiZSByZXR1cm5lZC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gW3N0ZXBzPTFdIFRoZSBhbW91bnQgb2Ygc3RlcHMgdG8gdGFrZSB0aHJvdWdoIHRoZSBudW1iZXJzLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgc3RlcChzdGVwczogbnVtYmVyID0gMSk6IG51bWJlciB7XHJcbiAgICBjb25zdCBzdGVwc05vcm1hbGl6ZWQ6IG51bWJlciA9IHN0ZXBzIC0gMTtcclxuXHJcbiAgICB0aGlzLl9wcmV2aW91cyArPSBzdGVwc05vcm1hbGl6ZWQ7XHJcbiAgICB0aGlzLl9wcmV2aW91cyA9IHN0ZXBzTm9ybWFsaXplZCAlIHRoaXMuX251bWJlcnMubGVuZ3RoO1xyXG5cclxuICAgIHRoaXMuX2l0ZXJhdGlvbiA9IE1hdGguZmxvb3Ioc3RlcHNOb3JtYWxpemVkIC8gdGhpcy5fbnVtYmVycy5sZW5ndGgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9udW1iZXJzW3RoaXMuX3ByZXZpb3VzXSArIHRoaXMuX2l0ZXJhdGlvbjtcclxuICB9XHJcbn07Il19