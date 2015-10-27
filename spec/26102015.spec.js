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

    it('concat arrays when second array is string', function() {
        expect(concatenator(['abc', 'def', 4, 'ghi'], 'hello world')).toEqual(['abc', 'def', 4, 'ghi']);
    });

    it('concat arrays when second array is undefined', function() {
        expect(concatenator(['abc', 'def', 4, 'ghi'], undefined)).toEqual(['abc', 'def', 4, 'ghi']);
    });

    it('concat arrays when second array contains zeros', function() {
        expect(concatenator(['abc', 'def', 4, 'ghi'], [0, 0, 0, 0, 'hi'])).toEqual(['abc0', 'def0', 4, 'ghi0', 'hi']);
    });

    it('concat arrays when long array consists only from zeros', function() {
        expect(concatenator(['abc', 'def', 4, 'ghi'], [0, 0, 0, 0, 0, 0])).toEqual(['abc0', 'def0', 4, 'ghi0', 0, 0]);
    });

    it('concat arrays when long array consists null', function() {
        expect(concatenator(['abc', 'def', 4, 'ghi'], [0, 0, 0, 0, 0, 0, null])).toEqual(['abc0', 'def0', 4, 'ghi0', 0, 0, null]);
    });

    it('concat arrays when long array consists null', function() {
        expect(concatenator(['abc', 'def', 4, 'ghi'], [0, 0, 0, undefined, 0, 0, null])).toEqual(['abc0', 'def0', 4, 'ghi', 0, 0, null]);
    });

    it('concat arrays when both arrays consists undefined in the same place', function() {
        expect(concatenator(['abc', 'def', undefined, 'ghi'], [0, 0, undefined, 0, undefined, 0, 0, null])).toEqual(['abc0', 'def0', undefined, 'ghi0', undefined, 0, 0, null]);
    });

    it('concat arrays when the first value undefined and the second is not undefined', function() {
        expect(concatenator(['abc', undefined], [0, 0])).toEqual(['abc0', 0]);
    });

    it('concat arrays when the second value undefined and the first is not undefined', function() {
        expect(concatenator(['abc', 0], [0, undefined])).toEqual(['abc0', 0]);
    });

    it('concat arrays when last element in both arrays undefined', function() {
        expect(concatenator(['abc', undefined], [0, undefined])).toEqual(['abc0', undefined]);
    });

    it('concat arrays with empty strings in first array', function() {
        expect(concatenator(['abc', ''], [0, 0])).toEqual(['abc0', '0']);
    });

    it('concat arrays with empty strings in second array', function() {
        expect(concatenator(['abc', 0], [0, ''])).toEqual(['abc0', '0']);
    });
});