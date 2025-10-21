function recoverOrder(order: number[], friends: number[]): number[] {

    let ans: number[] = [];

    for(let i = 0; i < order.length; i++){
        if(friends.includes(order[i])){
            ans.push(order[i]);
        }
    }
    return ans;
};


let order = [3, 1, 2, 5, 4], friends = [1, 3, 4];

console.log(recoverOrder(order, friends));
