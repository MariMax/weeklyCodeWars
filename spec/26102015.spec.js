'use strict';
let concatenator = require('../src/concatArrays.js');
describe('concat arrays', function() {

  it('concat arrays of the same lenght', function() {
    expect(concatenator([1, 2, 3], [4, 5, 6])).toEqual([5, 7, 9]);
  });

  it('concat arrays when second array is longer', function() {
    expect(concatenator([1, 2, 3], ['abc', 'def', 4, 'ghi'])).toEqual(['1abc', '2def', 7, 'ghi']);
  });

  it('concat arrays when first array is longer', function() {
    expect(concatenator([1, 2, 3, 4, 6], ['abc', 'def', 4, 'ghi'])).toEqual(['1abc', '2def', 7, '4ghi', 6]);
  });

  it('concat arrays when first array is empty', function() {
    expect(concatenator([], ['abc', 'def', 4, 'ghi'])).toEqual(['abc', 'def', 4, 'ghi']);
  });

  it('concat arrays when second array is empty', function() {
    expect(concatenator(['abc', 'def', 4, 'ghi'], [])).toEqual(['abc', 'def', 4, 'ghi']);
  });

  it('concat arrays when second array is not array at all', function() {
    expect(concatenator(['abc', 'def', 4, 'ghi'], null)).toEqual(['abc', 'def', 4, 'ghi']);
  });

  it('concat arrays when second array is any object', function() {
    expect(concatenator(['abc', 'def', 4, 'ghi'], {})).toEqual(['abc', 'def', 4, 'ghi']);
  });

  it('concat arrays when first array is not array at all', function() {
    expect(concatenator(['abc', 'def', 4, 'ghi'], 'hello world')).toEqual(['abc', 'def', 4, 'ghi']);
  });

  it('concat arrays when first array is undefined', function() {
    expect(concatenator(['abc', 'def', 4, 'ghi'], undefined)).toEqual(['abc', 'def', 4, 'ghi']);
  });
});