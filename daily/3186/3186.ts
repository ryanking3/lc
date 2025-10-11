function maximumTotalDamage(power: number[]): number {
        const cnt = new Map<number, number>();
    for (const x of power) cnt.set(x, (cnt.get(x) ?? 0) + 1);

    const arr = Array.from(cnt.keys()).sort((a, b) => a - b);
    const n = arr.length;

    if (n === 1) return arr[0] * (cnt.get(arr[0])!);

    const dp: number[] = new Array(n + 1).fill(0);
    dp[0] = 0;
    dp[1] = arr[0] * (cnt.get(arr[0])!);

    if (arr[1] - arr[0] > 2) {
        dp[2] = dp[1] + arr[1] * (cnt.get(arr[1])!);
    } else {
        dp[2] = Math.max(dp[1], arr[1] * (cnt.get(arr[1])!));
    }

    for (let i = 3; i <= n; i++) {
        const a_im1 = arr[i - 1], a_im2 = arr[i - 2], a_im3 = arr[i - 3];
        if ((a_im1 - a_im2 > 2) && (a_im1 - a_im3 > 2)) {
            dp[i] = dp[i - 1] + a_im1 * (cnt.get(a_im1)!);
        } else if ((a_im1 - a_im3 > 2) && (a_im1 - a_im2 < 3)) {
            dp[i] = Math.max(dp[i - 2] + a_im1 * (cnt.get(a_im1)!), dp[i - 1]);
        } else if ((a_im1 - a_im3 < 3) && (a_im1 - a_im2 < 3)) {
            dp[i] = Math.max(dp[i - 3] + a_im1 * (cnt.get(a_im1)!), dp[i - 1]);
        }
    }
    return dp[n];
};
