function flattenArray(arr, out) {
	
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] instanceof Array) {
			flattenArray(arr[i], out);
		} else {
			out.push(arr[i]);
		}
	}
	
	return out;
}

let arr1 = [1,[2,3]];
let arr2 = [[1], 2, [3, [4], 5, [6, [7, [8]]]], 9];
let arr3 = [1, [2, 3], [4, 5, [6, 7], 8, [9], [[[10]]]]];

console.log("Arbitrarily nested arr1: ", arr1);
console.log("Arbitrarily nested arr2: ", arr2);
console.log("Arbitrarily nested arr3: ", arr3);

arr1 = flattenArray(arr1, []);
arr2 = flattenArray(arr2, []);
arr3 = flattenArray(arr3, []);

console.log("Flattened arr1: ", arr1);
console.log("Flattened arr2: ", arr2);
console.log("Flattened arr3: ", arr3);