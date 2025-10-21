function groupThePeople(groupSizes: number[]): number[][] {
    let groups: number[][] = [];
    let indicesToSize: Record<number, number[]> = {};
    for (let i = 0; i < groupSizes.length; i++) {
        if (!indicesToSize[groupSizes[i]]) {
            indicesToSize[groupSizes[i]] = [];
        }

        indicesToSize[groupSizes[i]].push(i);
    }


    for (const [size, group] of Object.entries(indicesToSize)) {

        const sz = Number(size);
        for(let i = 0; i < group.length; i+= sz){
            groups.push(group.slice(i, i + sz));
        }
    }
    return groups;
};
let groupSizes = [3, 3, 3, 3, 3, 1, 3, 3, 3, 3];

console.log(groupThePeople(groupSizes));