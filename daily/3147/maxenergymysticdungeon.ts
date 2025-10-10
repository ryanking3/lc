function maximumEnergy(energy: number[], k: number): number {
    const n = energy.length;
    const dp = [...energy];
    for (let i = n - k - 1; i >= 0; i--){
        dp[i] += dp[i + k];
    }
    return Math.max(...dp);
};
