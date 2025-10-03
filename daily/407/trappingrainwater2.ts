function trapRainWater(heightMap: number[][]): number {
    if (heightMap.length === 0 || heightMap[0].length === 0) return 0;

    const m = heightMap.length;
    const n = heightMap[0].length;
    const visited: boolean[][] = Array.from({ length: m }, () => Array(n).fill(false));
    const minHeap: [number, number, number][] = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
                minHeap.push([heightMap[i][j], i, j]);
                visited[i][j] = true;
            }
        }
    }

    minHeap.sort((a, b) => a[0] - b[0]);

    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let waterTrapped = 0;

    while (minHeap.length > 0) {
        const [height, x, y] = minHeap.shift()!;

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && nx < m && ny >= 0 && ny < n && !visited[nx][ny]) {
                visited[nx][ny] = true;
                waterTrapped += Math.max(0, height - heightMap[nx][ny]);
                minHeap.push([Math.max(height, heightMap[nx][ny]), nx, ny]);
                minHeap.sort((a, b) => a[0] - b[0]);
            }
        }
    }

    return waterTrapped;    


};

let heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]];
console.log(trapRainWater(heightMap));
