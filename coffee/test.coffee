# Get requried files
bsFunctions = require('../dist/bs-functions')
assert = require('assert')

# Test Math in BSFunctioin library
describe 'Math', ->
  
  # Test addition
  describe 'addition', ->
    it '2 + 3 should return 5', ->
      assert.equal bsFunctions.add(2,3) , 5
    it '5 + -8 should return -3', ->
      assert.equal bsFunctions.add(5,-8) , -3
    it '3 + -3 should return 0', ->
      assert.equal bsFunctions.add(3,-3) , 0
    it '5 + 5 should return 10', ->
      assert.equal bsFunctions.add(5,5) , 10
      
  # Test subtraction  
  describe 'subtraction', ->
    it '5 - 3 should return 2', ->
      assert.equal bsFunctions.subtract(5,3) , 2
    it '16 - 8 should return 8', ->
      assert.equal bsFunctions.subtract(16,8) , 8
    it '3 - 7 should return -4', ->
      assert.equal bsFunctions.subtract(3,7) , -4
    it '5 - 5 should return 0', ->
      assert.equal bsFunctions.subtract(5,5) , 0
  
  # Test multiplication
  describe 'multiplication', ->
    it '3 * 3 should return 9', ->
      assert.equal bsFunctions.multiply(3,3) , 9
    it '16 * 2 should return 32', ->
      assert.equal bsFunctions.multiply(16,2) , 32
    it '11 * 11 should return 121', ->
      assert.equal bsFunctions.multiply(11,11) , 121
    it '5 * 5 should return 25', ->
      assert.equal bsFunctions.multiply(5,5) , 25
  
  # Test division
  describe 'division', ->
    it '3 / 3 should return 1', ->
      assert.equal bsFunctions.divide(3,3) , 1
    it '16 / 2 should return 8', ->
      assert.equal bsFunctions.divide(16,2) , 8
    it '2 / 1 should return 2', ->
      assert.equal bsFunctions.divide(2,1) , 2
    it '10 / 5 should return 2', ->
      assert.equal bsFunctions.divide(10,5) , 2