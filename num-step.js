function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

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

export default NumSteps;
