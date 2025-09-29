"use strict";
//Given an array of points on the X-Y plane points where points[i] = [xi, yi],
//return the area of the largest triangle that can be formed by any three different points. 
//Answers within 10-5 of the actual answer will be accepted.
function largestTriangleArea(points) {
    let maxArea = 0;
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            for (let k = j + 1; k < points.length; k++) {
                const area = Math.abs((points[i][0] * (points[j][1] - points[k][1]) +
                    points[j][0] * (points[k][1] - points[i][1]) +
                    points[k][0] * (points[i][1] - points[j][1])) / 2);
                maxArea = Math.max(maxArea, area);
            }
        }
    }
    return maxArea;
}
;
let points = [[0, 0], [0, 1], [1, 0], [0, 2], [2, 0]];
console.log(largestTriangleArea(points));
