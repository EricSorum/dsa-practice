/*
So every other column has three rows
So take first three chars in first row
no take first char then every four chars... until when?
divide string by 4, round up - that gives you the number of columns
but not 4 aactually would need to find value based on number of rows...
or is the number of rows actually the same asthe interval/index?

If I was very clever, I could write this as a recursive function.
*/

var convert = function(s, numRows) {
   let newStr = '';
   
   // Find the 
   const numColumns = Math.floor(s.length/numRows);
   //  Round up for any remainder.
   numColumns += s.length%numRows ? 1 : 0;

   for (let i = 0; i < s.length; i++) {

   }
};