"use strict";
function checkStraightLine(coordinates) {
    if (coordinates.length = 2) {
        return true;
    }
    for (let x = 0; x < coordinates.length; x++) {
        for (let y = 0; y < coordinates[0].length; y++) {
            if (coordinates[x][0] === coordinates[y][0]) {
                return true;
            }
            if (coordinates[x][1] === coordinates[y][1]) {
                return true;
            }
        }
    }
    const slope = (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0]);
    return coordinates.every((point, index) => {
        if (index === 0 || index === 1)
            return true;
        return (point[1] - coordinates[0][1]) / (point[0] - coordinates[0][0]) === slope;
    });
}
;
let coordinates = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]];
console.log(checkStraightLine(coordinates));
