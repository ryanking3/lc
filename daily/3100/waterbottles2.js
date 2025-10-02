"use strict";
function maxBottlesDrunk(numBottles, numExchange) {
    let ogAmount = numBottles;
    while (numExchange <= numBottles) {
        numBottles -= numExchange;
        numBottles++;
        numExchange++;
    }
    console.log("numb" + numBottles);
    console.log("og" + ogAmount);
    //numExchange bottles of water then exchange them for a full bottle. Keep repeating this step until you cannot exchange bottles anymore.
    return numBottles + ogAmount;
}
;
let aa = 10;
let bb = 3;
console.log(maxBottlesDrunk(aa, bb));
