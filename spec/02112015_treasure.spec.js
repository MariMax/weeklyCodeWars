/**
 * Created by Maxim_Milovanov on 11/2/2015.
 */
'use strict';
let findTreasure = require('../src/findTheTreasure.js');
describe('object map', function() {

  var testObject;

  beforeEach(function() {
        testObject = {
            response: {
                data: [
                    {
                        element: 'element1',
                        name: 'testabc'
                    },
                    {
                        element: 'element2',
                        name: 'testaudf'
                    }
                ],
                config : {}
            },
            response2: [
                {
                    element: 'element1',
                    name: 'testudf'
                },
                {
                    element: 'element2',
                    name: 'uddf'
                },
                {
                    element: null
                },
                {
                    element: undefined
                }
            ]
        };
    });

  it('normal map', function() {
    var map = ['response','data', 0, 'element'];
    expect(findTreasure(testObject, map)).toEqual('element1');
  });

  it('wrong way', function() {
    var map = ['response','data2', 3, 'element'];
    expect(findTreasure(testObject, map)).toEqual(null);
  });

  it('empty treasure', function() {
    var map = ['response2', 2, 'element'];
    expect(findTreasure(testObject, map)).toEqual(null);
  });

  it('undefined treasure', function() {
    var map = ['response2', 3, 'element'];
    expect(findTreasure(testObject, map)).toEqual(undefined);
  });
});