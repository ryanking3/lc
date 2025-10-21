function numJewelsInStones(jewels: string, stones: string): number {
    let ans = 0;


    for(const c of stones){
        if(jewels.includes(c)){
            ans++;
        }
    }

    return ans;
};

let jewels = "aA", stones = "aAAbbbb"

console.log(numJewelsInStones(jewels, stones));