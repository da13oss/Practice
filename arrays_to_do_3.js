//Remove Negatives

function removeNegatives(arr) {
    var index = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            arr[index++] = arr[i];
        }
    }
    arr.length = index;
    return arr;
}

console.log(removeNegatives([1, -2, 3, -4, 5]));  // [1, 3, 5]
//This function removes negative values from the array, preserving the order of non - negative values.

//Second - to - Last

function secondToLast(arr) {
    if (arr.length < 2) return null;
    return arr[arr.length - 2];
}

console.log(secondToLast([42, true, 4, "Kate", 7]));  // "Kate"
console.log(secondToLast([1]));  // null
//This function returns the second - to - last element of the array, or null if the array is too short.

//Second - Largest

function secondLargest(arr) {
    if (arr.length < 2) return null;

    var max = arr[0];
    var secondMax = -Infinity;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] != max) {
            secondMax = arr[i];
        }
    }

    return secondMax;
}

console.log(secondLargest([42, 1, 4, Math.PI, 7]));  // 7
console.log(secondLargest([1]));  // null
//This function returns the second - largest element of the array, or null if the array is too short.

//Nth - to - Last

function nthToLast(arr, n) {
    if (n > arr.length) return null;
    return arr[arr.length - n];
}

console.log(nthToLast([5, 2, 3, 6, 4, 9, 7], 3));  // 4
console.log(nthToLast([1, 2], 3));  // null
//This function returns the element that is N - from - array’s - end, or null if the array is too short.

//Nth - Largest

function nthLargest(arr, N) {
    if (N > arr.length) return null;

    for (var i = 0; i < N; i++) {
        var maxIndex = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[maxIndex];
        arr[maxIndex] = temp;
    }

    return arr[N - 1];
}

console.log(nthLargest([42, 1, 4, Math.PI, 7], 2));  // 7
console.log(nthLargest([1], 2));  // null
//This function returns the Nth - largest element of the array, or null if the array is too short.

//Skyline Heights

function skylineHeights(arr) {
    var visibleBuildings = [];
    var maxHeight = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxHeight) {
            visibleBuildings.push(arr[i]);
            maxHeight = arr[i];
        }
    }

    return visibleBuildings;
}

console.log(skylineHeights([-1, 1, 1, 7, 3]));  // [1, 7]
console.log(skylineHeights([0, 4]));  // [4]
