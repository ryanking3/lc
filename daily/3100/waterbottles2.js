"use strict";
function maxBottlesDrunk(numBottles, numExchange) {
    let ogAmount = numBottles;
    let operationcounter = 0;
    while (numExchange <= numBottles) {
        numBottles -= numExchange;
        numBottles++;
        numExchange++;
        operationcounter++;
    }
    return operationcounter + ogAmount;
}
;
