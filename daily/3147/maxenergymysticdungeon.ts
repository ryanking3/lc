function maximumEnergy(energy: number[], k: number): number {
    const n = energy.length;
    const dp = [...energy];
    for (let i = n - k - 1; i >= 0; i--){
        dp[i] += dp[i + k];
    }
    return Math.max(...dp);
};


function maximumEnergy2(energy: number[], k: number): number {
  return Math.max(...energy.map((e, i) => e + (energy[i + k] || 0)));
};

let energy = [-2,-3,-1], k = 2;

console.log(maximumEnergy2(energy, k));
