(function() {
  var assert, coffee, ecma;

  coffee = require('../dist/bs-functions-coffee');

  ecma = require('../dist/bs-functions-ecma');

  assert = require('assert');

  describe('Coffee', function() {
    describe('addition', function() {
      it('2 + 3 should return 5', function() {
        return assert.equal(coffee.add(2, 3), 5);
      });
      it('5 + -8 should return -3', function() {
        return assert.equal(coffee.add(5, -8), -3);
      });
      it('3 + -3 should return 0', function() {
        return assert.equal(coffee.add(3, -3), 0);
      });
      return it('5 + 5 should return 10', function() {
        return assert.equal(coffee.add(5, 5), 10);
      });
    });
    describe('subtraction', function() {
      it('5 - 3 should return 2', function() {
        return assert.equal(coffee.subtract(5, 3), 2);
      });
      it('16 - 8 should return 8', function() {
        return assert.equal(coffee.subtract(16, 8), 8);
      });
      it('3 - 7 should return -4', function() {
        return assert.equal(coffee.subtract(3, 7), -4);
      });
      return it('5 - 5 should return 0', function() {
        return assert.equal(coffee.subtract(5, 5), 0);
      });
    });
    describe('multiplication', function() {
      it('3 * 3 should return 9', function() {
        return assert.equal(coffee.multiply(3, 3), 9);
      });
      it('16 * 2 should return 32', function() {
        return assert.equal(coffee.multiply(16, 2), 32);
      });
      it('11 * 11 should return 121', function() {
        return assert.equal(coffee.multiply(11, 11), 121);
      });
      return it('5 * 5 should return 25', function() {
        return assert.equal(coffee.multiply(5, 5), 25);
      });
    });
    return describe('division', function() {
      it('3 / 3 should return 1', function() {
        return assert.equal(coffee.divide(3, 3), 1);
      });
      it('16 / 2 should return 8', function() {
        return assert.equal(coffee.divide(16, 2), 8);
      });
      it('2 / 1 should return 2', function() {
        return assert.equal(coffee.divide(2, 1), 2);
      });
      return it('10 / 5 should return 2', function() {
        return assert.equal(coffee.divide(10, 5), 2);
      });
    });
  });

  describe('ECMA6', function() {
    describe('addition', function() {
      it('2 + 3 should return 5', function() {
        return assert.equal(ecma.add(2, 3), 5);
      });
      it('5 + -8 should return -3', function() {
        return assert.equal(ecma.add(5, -8), -3);
      });
      it('3 + -3 should return 0', function() {
        return assert.equal(ecma.add(3, -3), 0);
      });
      return it('5 + 5 should return 10', function() {
        return assert.equal(ecma.add(5, 5), 10);
      });
    });
    describe('subtraction', function() {
      it('5 - 3 should return 2', function() {
        return assert.equal(ecma.subtract(5, 3), 2);
      });
      it('16 - 8 should return 8', function() {
        return assert.equal(ecma.subtract(16, 8), 8);
      });
      it('3 - 7 should return -4', function() {
        return assert.equal(ecma.subtract(3, 7), -4);
      });
      return it('5 - 5 should return 0', function() {
        return assert.equal(ecma.subtract(5, 5), 0);
      });
    });
    describe('multiplication', function() {
      it('3 * 3 should return 9', function() {
        return assert.equal(ecma.multiply(3, 3), 9);
      });
      it('16 * 2 should return 32', function() {
        return assert.equal(ecma.multiply(16, 2), 32);
      });
      it('11 * 11 should return 121', function() {
        return assert.equal(ecma.multiply(11, 11), 121);
      });
      return it('5 * 5 should return 25', function() {
        return assert.equal(ecma.multiply(5, 5), 25);
      });
    });
    return describe('division', function() {
      it('3 / 3 should return 1', function() {
        return assert.equal(ecma.divide(3, 3), 1);
      });
      it('16 / 2 should return 8', function() {
        return assert.equal(ecma.divide(16, 2), 8);
      });
      it('2 / 1 should return 2', function() {
        return assert.equal(ecma.divide(2, 1), 2);
      });
      return it('10 / 5 should return 2', function() {
        return assert.equal(ecma.divide(10, 5), 2);
      });
    });
  });

}).call(this);

//# sourceMappingURL=test.js.map
