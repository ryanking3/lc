"use strict";
/*
 * Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

If the fractional part is repeating, enclose the repeating part in parentheses.

If multiple answers are possible, return any of them.

It is guaranteed that the length of the answer string is less than 104 for all the given inputs.

 

Example 1:

Input: numerator = 1, denominator = 2
Output: "0.5"
Example 2:

Input: numerator = 2, denominator = 1
Output: "2"
Example 3:

Input: numerator = 4, denominator = 333
Output: "0.(012)"
 

Constraints:

-231 <= numerator, denominator <= 231 - 1
denominator != 0
*/
function fractionToDecimal(numerator, denominator) {
    if (numerator === 0)
        return "0";
    let result = "";
    // Determine the sign
    if (Math.sign(numerator) !== Math.sign(denominator)) {
        result += "-";
    }
    // Work with absolute values to avoid negative issues
    const num = Math.abs(numerator);
    const den = Math.abs(denominator);
    // Append the integer part
    result += Math.floor(num / den).toString();
    let remainder = num % den;
    if (remainder === 0)
        return result; // No fractional part
    result += ".";
    const map = new Map();
    let fractionalPart = "";
    let index = 0;
    while (remainder !== 0) {
        if (map.has(remainder)) {
            const repeatIndex = map.get(remainder);
            fractionalPart = fractionalPart.slice(0, repeatIndex) + "(" + fractionalPart.slice(repeatIndex) + ")";
            break;
        }
        map.set(remainder, index);
        remainder *= 10;
        fractionalPart += Math.floor(remainder / den).toString();
        remainder = remainder % den;
        index++;
    }
    result += fractionalPart;
    return result;
}
;
// the time complexity is O(n) where n is the length of the fractional part 
// the space complexity is O(n) where n is the length of the fractional parentheses
