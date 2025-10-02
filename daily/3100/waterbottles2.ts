function maxBottlesDrunk(numBottles: number, numExchange: number): number {
    let ogAmount = numBottles;
    let operationcounter = 0;
    while(numExchange <= numBottles){
      numBottles -= numExchange;
      numBottles++;
      numExchange++;
      operationcounter++;
    }
    return operationcounter + ogAmount;
};


