//Reverse

function reverseArray(arr) {
    var left = 0;
    var right = arr.length - 1;
    while (left < right) {
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));  // [5, 4, 3, 2, 1]
//This function reverses the array in-place by swapping elements from the two ends of the array.

//Rotate Array

function rotateArr(arr, shiftBy) {
    var len = arr.length;
    shiftBy = ((shiftBy % len) + len) % len;  // Handle negative and large shiftBy

    var count = 0;
    while (count < shiftBy) {
        var temp = arr[len - 1];
        for (var i = len - 1; i > 0; i--) {
            arr[i] = arr[i - 1];
        }
        arr[0] = temp;
        count++;
    }
    return arr;
}

console.log(rotateArr([1, 2, 3], 1));  // [3, 1, 2]
console.log(rotateArr([1, 2, 3], -1));  // [2, 3, 1]
//This function shifts array values by the given offset, wrapping around any values that shift off the end.

//Filter Range

function filterRange(arr, min, max) {
    var index = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= min && arr[i] <= max) {
            arr[index++] = arr[i];
        }
    }
    arr.length = index;
    return arr;
}

console.log(filterRange([1, 2, 3, 4, 5], 2, 4));  // [2, 3, 4]
//This function retains only the values within the specified range, modifying the array in-place.

//Concat

function arrConcat(arr1, arr2) {
    var newArr = [];
    for (var i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i]);
    }
    for (var j = 0; j < arr2.length; j++) {
        newArr.push(arr2[j]);
    }
    return newArr;
}

console.log(arrConcat(['a', 'b'], [1, 2]));  // ['a', 'b', 1, 2]
//This function concatenates two arrays, creating a new array with elements from both input arrays.