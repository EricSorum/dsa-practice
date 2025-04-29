/*
https://leetcode.com/problems/excel-sheet-column-title/description/

Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

Input: columnNumber = 28
Output: "AB"

*/

var convertToTitle = function(columnNumber) {

    const modulus = columnNumber%26;
    const quotient = columnNumber/26;
    // find char codes based on these

    let answerString = "";
    // concat new letters to string

};