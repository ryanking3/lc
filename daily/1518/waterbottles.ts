function waterBottles(numBottles: number, numExchange: number): number {

  let consumedBottles = 0;

  while(numBottles < numExchange){
    consumedBottles += numExchange;
    numBottles -= numExchange;
    numBottles += 1;
  }

  return consumedBottles + numBottles;

};

console.log(waterBottles(9, 3)); // Output: 13
console.log(waterBottles(15, 4));
