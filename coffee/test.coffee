# Get requried files
coffee = require('../dist/bs-functions-coffee')
ecma   = require('../dist/bs-functions-ecma')
assert = require('assert')


# Test Math in Coffee BSFunctioin library
describe 'Coffee', ->
  
  # Test addition
  describe 'addition', ->
    it '2 + 3 should return 5', ->
      assert.equal coffee.add(2,3) , 5
    it '5 + -8 should return -3', ->
      assert.equal coffee.add(5,-8) , -3
    it '3 + -3 should return 0', ->
      assert.equal coffee.add(3,-3) , 0
    it '5 + 5 should return 10', ->
      assert.equal coffee.add(5,5) , 10
      
  # Test subtraction  
  describe 'subtraction', ->
    it '5 - 3 should return 2', ->
      assert.equal coffee.subtract(5,3) , 2
    it '16 - 8 should return 8', ->
      assert.equal coffee.subtract(16,8) , 8
    it '3 - 7 should return -4', ->
      assert.equal coffee.subtract(3,7) , -4
    it '5 - 5 should return 0', ->
      assert.equal coffee.subtract(5,5) , 0
  
  # Test multiplication
  describe 'multiplication', ->
    it '3 * 3 should return 9', ->
      assert.equal coffee.multiply(3,3) , 9
    it '16 * 2 should return 32', ->
      assert.equal coffee.multiply(16,2) , 32
    it '11 * 11 should return 121', ->
      assert.equal coffee.multiply(11,11) , 121
    it '5 * 5 should return 25', ->
      assert.equal coffee.multiply(5,5) , 25
  
  # Test division
  describe 'division', ->
    it '3 / 3 should return 1', ->
      assert.equal coffee.divide(3,3) , 1
    it '16 / 2 should return 8', ->
      assert.equal coffee.divide(16,2) , 8
    it '2 / 1 should return 2', ->
      assert.equal coffee.divide(2,1) , 2
    it '10 / 5 should return 2', ->
      assert.equal coffee.divide(10,5) , 2
      
      
# Test Math in ECMA BSFunctioin library
describe 'ECMA6', ->
  
  # Test addition
  describe 'addition', ->
    it '2 + 3 should return 5', ->
      assert.equal ecma.add(2,3) , 5
    it '5 + -8 should return -3', ->
      assert.equal ecma.add(5,-8) , -3
    it '3 + -3 should return 0', ->
      assert.equal ecma.add(3,-3) , 0
    it '5 + 5 should return 10', ->
      assert.equal ecma.add(5,5) , 10
      
  # Test subtraction  
  describe 'subtraction', ->
    it '5 - 3 should return 2', ->
      assert.equal ecma.subtract(5,3) , 2
    it '16 - 8 should return 8', ->
      assert.equal ecma.subtract(16,8) , 8
    it '3 - 7 should return -4', ->
      assert.equal ecma.subtract(3,7) , -4
    it '5 - 5 should return 0', ->
      assert.equal ecma.subtract(5,5) , 0
  
  # Test multiplication
  describe 'multiplication', ->
    it '3 * 3 should return 9', ->
      assert.equal ecma.multiply(3,3) , 9
    it '16 * 2 should return 32', ->
      assert.equal ecma.multiply(16,2) , 32
    it '11 * 11 should return 121', ->
      assert.equal ecma.multiply(11,11) , 121
    it '5 * 5 should return 25', ->
      assert.equal ecma.multiply(5,5) , 25
  
  # Test division
  describe 'division', ->
    it '3 / 3 should return 1', ->
      assert.equal ecma.divide(3,3) , 1
    it '16 / 2 should return 8', ->
      assert.equal ecma.divide(16,2) , 8
    it '2 / 1 should return 2', ->
      assert.equal ecma.divide(2,1) , 2
    it '10 / 5 should return 2', ->
      assert.equal ecma.divide(10,5) , 2