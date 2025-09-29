//you are given an array nums consisting of positive integers. return the total frequency in nums such that those elemnts all have the maximum frequency the freq of an element is the number of times it appears in the array


function maxFrequencyElements(nums: number[]): number {
    const frequencyMap: { [key: number]: number } = {};
    let maxFrequency = 0;
    let totalMaxFrequencyElements = 0;

    // Count the frequency of each element
    for (const num of nums) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        if (frequencyMap[num] > maxFrequency) {
            maxFrequency = frequencyMap[num];
        }
    }

    // Sum the frequencies of elements that have the maximum frequency
    for (const freq of Object.values(frequencyMap)) {
        if (freq === maxFrequency) {
            totalMaxFrequencyElements += freq;
        }
    }

    return totalMaxFrequencyElements;
}
