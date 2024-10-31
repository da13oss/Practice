//Push Front



function pushFront(arr, val) {
    for (var i = arr.length; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = val;
    return arr;
}

console.log(pushFront([5, 7, 2, 3], 8));  // [8, 5, 7, 2, 3]
console.log(pushFront([99], 7));  // [7, 99]
/*This function inserts a value at the beginning of the array by shifting all elements one position to the right.*/

//Pop Front



function popFront(arr) {
    var val = arr[0];
    for (var i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    arr.length = arr.length - 1;
    console.log(arr);
    return val;
}

console.log(popFront([0, 5, 10, 15]));  // 0, with [5, 10, 15]
console.log(popFront([4, 5, 7, 9]));  // 4, with [5, 7, 9]
/*This function removes and returns the value at the beginning of the array by shifting all elements one position to the left.*/

//Insert At



function insertAt(arr, index, val) {
    for (var i = arr.length; i > index; i--) {
        arr[i] = arr[i - 1];
    }
    arr[index] = val;
    return arr;
}

console.log(insertAt([100, 200, 5], 2, 311));  // [100, 200, 311, 5]
console.log(insertAt([9, 33, 7], 1, 42));  // [9, 42, 33, 7]
/*This function inserts a value into the array at the given index by shifting elements to the right.*/

//BONUS: Remove At



function removeAt(arr, index) {
    var val = arr[index];
    for (var i = index; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;
    console.log(arr);
    return val;
}

console.log(removeAt([1000, 3, 204, 77], 1));  // 3, with [1000, 204, 77]
console.log(removeAt([8, 20, 55, 44, 98], 3));  // 44, with [8, 20, 55, 98]
/*This function removes and returns the value at the given index by shifting elements to the left.*/

//BONUS: Swap Pairs



function swapPairs(arr) {
    for (var i = 0; i < arr.length - 1; i += 2) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    return arr;
}

console.log(swapPairs([1, 2, 3, 4]));  // [2, 1, 4, 3]
console.log(swapPairs(["Brendan", true, 42]));  // [true, "Brendan", 42]
/*This function swaps positions of successive pairs of values in the array.*/

//BONUS: Remove Duplicates



function removeDupes(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(removeDupes([-2, -2, 3.14, 5, 5, 10]));  // [-2, 3.14, 5, 10]
console.log(removeDupes([9, 19, 19, 19, 19, 19, 29]));  // [9, 19, 29]
/*This function removes duplicate values from a sorted array by creating a new array with only unique values./*