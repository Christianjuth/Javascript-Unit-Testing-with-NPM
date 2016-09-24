(function() {
  var assert, bsFunctions;

  bsFunctions = require('../dist/bs-functions');

  assert = require('assert');

  describe('Math', function() {
    describe('addition', function() {
      it('2 + 3 should return 5', function() {
        return assert.equal(bsFunctions.add(2, 3), 5);
      });
      it('5 + -8 should return -3', function() {
        return assert.equal(bsFunctions.add(5, -8), -3);
      });
      it('3 + -3 should return 0', function() {
        return assert.equal(bsFunctions.add(3, -3), 0);
      });
      return it('5 + 5 should return 10', function() {
        return assert.equal(bsFunctions.add(5, 5), 10);
      });
    });
    describe('subtraction', function() {
      it('5 - 3 should return 2', function() {
        return assert.equal(bsFunctions.subtract(5, 3), 2);
      });
      it('16 - 8 should return 8', function() {
        return assert.equal(bsFunctions.subtract(16, 8), 8);
      });
      it('3 - 7 should return -4', function() {
        return assert.equal(bsFunctions.subtract(3, 7), -4);
      });
      return it('5 - 5 should return 0', function() {
        return assert.equal(bsFunctions.subtract(5, 5), 0);
      });
    });
    describe('multiplication', function() {
      it('3 * 3 should return 9', function() {
        return assert.equal(bsFunctions.multiply(3, 3), 9);
      });
      it('16 * 2 should return 32', function() {
        return assert.equal(bsFunctions.multiply(16, 2), 32);
      });
      it('11 * 11 should return 121', function() {
        return assert.equal(bsFunctions.multiply(11, 11), 121);
      });
      return it('5 * 5 should return 25', function() {
        return assert.equal(bsFunctions.multiply(5, 5), 25);
      });
    });
    return describe('division', function() {
      it('3 / 3 should return 1', function() {
        return assert.equal(bsFunctions.divide(3, 3), 1);
      });
      it('16 / 2 should return 8', function() {
        return assert.equal(bsFunctions.divide(16, 2), 8);
      });
      it('2 / 1 should return 2', function() {
        return assert.equal(bsFunctions.divide(2, 1), 2);
      });
      return it('10 / 5 should return 2', function() {
        return assert.equal(bsFunctions.divide(10, 5), 2);
      });
    });
  });

}).call(this);
