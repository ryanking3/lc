"use strict";
/* given two version strings, version1 and version2, compare them.. a version string consists of revisions seperated by dots '.'. the value of the revision is its integer conversion ignoring leading zeros.
 * to compare version strings, compare their revisions values in left to right order. if one of the version stringfs has fewer revisions, treat the mission revision values as 0
 * return the following
 * if version1 < version2 return -1
 * if version1 > version2 return 1
 * otherwise return 0
 *
 * Example 1:

Input: version1 = "1.2", version2 = "1.10"

Output: -1

Explanation:

version1's second revision is "2" and version2's second revision is "10": 2 < 10, so version1 < version2.

Example 2:

Input: version1 = "1.01", version2 = "1.001"

Output: 0

Explanation:

Ignoring leading zeroes, both "01" and "001" represent the same integer "1".

Example 3:

Input: version1 = "1.0", version2 = "1.0.0.0"

Output: 0

Explanation:

version1 has less revisions, which means every missing revision are treated as "0".

 

Constraints:

1 <= version1.length, version2.length <= 500
version1 and version2 only contain digits and '.'.
version1 and version2 are valid version numbers.
All the given revisions in version1 and version2 can be stored in a 32-bit integer.


*/
function compareVersion(version1, version2) {
    const v1 = version1.split('.').map(num => parseInt(num));
    const v2 = version2.split('.').map(num => parseInt(num));
    const maxLength = Math.max(v1.length, v2.length);
    for (let i = 0; i < maxLength; i++) {
        const rev1 = i < v1.length ? v1[i] : 0;
        const rev2 = i < v2.length ? v2[i] : 0;
        if (rev1 < rev2)
            return -1;
        if (rev1 > rev2)
            return 1;
    }
    return 0;
}
// Example usage:
console.log(compareVersion("1.2", "1.10")); // Output: -1
console.log(compareVersion("1.01", "1.001")); // Output: 0
console.log(compareVersion("1.0", "1.0.0.0")); // Output: 0 
console.log(compareVersion("1.0.1", "1")); // Output: 1 
