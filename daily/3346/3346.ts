function maxFrequency(nums: number[], k: number, numOperations: number): number {
    const M = Math.max(...nums);
    const dp: number[] = new Array(M + 1).fill(0);
    let prev = 0, ans = 0;

    for (const i of nums) {
        dp[i]++;
    }

    let curr = 0;
    for (let i = 0; i < k && i <= M; i++) {
        curr += dp[i];
    }

    for (let i = 0; i <= M; i++) {
        curr -= dp[i];
        if (i + k <= M) {
            curr += dp[i + k];
        }
        if (i > 0) {
            prev += dp[i - 1];
        }
        if (i > k + 1) {
            prev -= dp[i - k - 1];
        }
        ans = Math.max(ans, dp[i] + Math.min(numOperations, prev + curr));
    }

    return ans;
};

let nums3 = [1,4,5], k1 = 1, numOperations1 = 2;
let nums4 = [5,11,20,20], k2 = 5, numOperations2 = 1

console.log(maxFrequency(nums3, k1, numOperations1));
console.log(maxFrequency(nums4, k2, numOperations2));