"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BSFunctions = function () {
  function BSFunctions() {
    _classCallCheck(this, BSFunctions);
  }

  _createClass(BSFunctions, [{
    key: "add",
    value: function add(x, y) {
      return x + y;
    }
  }, {
    key: "subtract",
    value: function subtract(x, y) {
      return x - y;
    }
  }, {
    key: "multiply",
    value: function multiply(x, y) {
      return x * y;
    }
  }, {
    key: "divide",
    value: function divide(x, y) {
      return x / y;
    }
  }]);

  return BSFunctions;
}();

module.exports = new BSFunctions();
//# sourceMappingURL=bs-functions-ecma.js.map
