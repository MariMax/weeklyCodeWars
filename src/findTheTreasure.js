/**
 * Created by Maxim_Milovanov on 11/2/2015.
 */
'use strict';

let findTheTreasure = (targetObject, objectMap) => {
    //wrong input or wrong way
    if (objectMap.length === 0||targetObject[objectMap[0]]===undefined) return null;
    //we found the treasure
    if (objectMap.length===1&&targetObject.hasOwnProperty(objectMap[0])){
        return targetObject[objectMap[0]];
    }
    //keep looking for a treasure
    let nextLevel = targetObject[objectMap[0]];
    objectMap.shift();

    return findTheTreasure(nextLevel, objectMap);
};
module.exports = findTheTreasure;
