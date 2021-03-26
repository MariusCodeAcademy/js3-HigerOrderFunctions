/* 
1. Write a JavaScript program which prints the elements of the following array.
Note : Use nested for loops.
Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Sample Output :
"row 0"
" 1"
" 2"
" 1"
" 24"
"row 1"

2. We have the following arrays :
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]
Write a JavaScript program to display the colors in the following way :
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."

3. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
Sample array :
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output :
[4, 5, 8, 10, 12, 13]

4. Write a JavaScript program to find duplicate values in a JavaScript array.

5. Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened a single level.
Sample Data :
console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
[1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
[1, 2, 3, [[4]], 5, 6]

6. Write a JavaScript function to find the difference of two arrays. 
Test Data :
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
["6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["3", "10", "100"]

7. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array. 
Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
Expected result : [15, -22, 47]

8. Write a JavaScript function to merge two arrays and removes all duplicates elements. 

Test data :
var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(merge_array(array1, array2));
[3, 2, 30, 1]

9. Write a JavaScript function to remove a specific element from an array. 

Test data :
console.log(remove_array_element([2, 5, 9, 6], 5));
[2, 9, 6]

10. /** 
  * Task description: Write a method that makes a deep compare of two objects 
  * Expected Result: True if objects are equal, false if objects are different ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true 
  * @param {Object} firstObj - Object of any values
  * @param {Object} secondObj - Object of any values
  * @returns {boolean} 
*/
export const isEqualDeep = (element) => {
  throw new Error(`put your solution here ${element}`);
};
const data = { a: 1, b: { c: 1 } };
const data2 = { a: 1, b: { c: 1 } };
const data3 = { a: 1, b: { c: 2 } };
console.log(isEqualDeep(data, data2)); // true
console.log(isEqualDeep(data, data3)); // false
