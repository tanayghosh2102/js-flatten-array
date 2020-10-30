function flattenArray(arr, out) {
	
	// Loop through each element in arr.
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] instanceof Array) { // Check if the element is an instance of Array type.
			flattenArray(arr[i], out); // If it's an array recursively loop through the nested array.
		} else {
			out.push(arr[i]); // If it's not an array, push it to the output array.
		}
	}
	
	return out;
}

// Test suites
let arr1 = [1,[2,3]];
let arr2 = [[1], 2, [3, [4], 5, [6, [7, [8]]]], 9];
let arr3 = [1, [2, 3], [4, 5, [6, 7], 8, [9], [[[10]]]]];
let arr4 = [[1],[[2]], [[[3]]], [[4]], [5]];

console.log("Arbitrarily nested arr1: ", arr1);
console.log("Arbitrarily nested arr2: ", arr2);
console.log("Arbitrarily nested arr3: ", arr3);
console.log("Arbitrarily nested arr4: ", arr4);

arr1 = flattenArray(arr1, []);
arr2 = flattenArray(arr2, []);
arr3 = flattenArray(arr3, []);
arr4 = flattenArray(arr4, []);

console.log("Flattened arr1: ", arr1);
console.log("Flattened arr2: ", arr2);
console.log("Flattened arr3: ", arr3);
console.log("Flattened arr4: ", arr4);