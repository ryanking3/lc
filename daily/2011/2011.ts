function finalValueAfterOperations(operations: string[]): number {

let x = 0;
for(let i = 0; i < operations.length; i++){
  if(operations[i] === "X++" || operations[i] === "++X"){
    x++;
  }else if(operations[i] === "X--" || operations[i] === "--X"){
    x--;
  }
}
return x;


};

let operations = ["--X","X++","X++"];

let operations2 = ["++X","++X","X++"];

let operations3 = ["X++","++X","--X","X--"];
console.log("test");
console.log(finalValueAfterOperations(operations));
console.log(finalValueAfterOperations(operations2));
console.log(finalValueAfterOperations(operations3));
