function checkStraightLine(coordinates: number[][]): boolean {

    const [x0, y0] = coordinates[0];
    const [x1, y1] = coordinates[1];
    for (let i = 2; i < coordinates.length; i++){
        const [x, y] = coordinates[i];
        if ((y1 - y0) * (x - x0) !== (y - y0) * (x1 - x0)){
            return false;
        }
    }
    return true;

};
let coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];

console.log(checkStraightLine(coordinates));
