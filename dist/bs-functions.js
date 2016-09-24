(function() {
  var BSFunctions;

  BSFunctions = (function() {
    function BSFunctions() {}

    BSFunctions.prototype.add = function(x, y) {
      return x + y;
    };

    BSFunctions.prototype.subtract = function(x, y) {
      return x - y;
    };

    BSFunctions.prototype.multiply = function(x, y) {
      return x * y;
    };

    BSFunctions.prototype.divide = function(x, y) {
      return x / y;
    };

    return BSFunctions;

  })();

  module.exports = new BSFunctions;

}).call(this);
