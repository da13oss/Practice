function moveMinToFront(arr) {
    var minIndex = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i;
        }
    }
    var minVal = arr[minIndex];
    for (var j = minIndex; j > 0; j--) {
        arr[j] = arr[j - 1];
    }
    arr[0] = minVal;
    return arr;
}

console.log(moveMinToFront([4, 2, 1, 3, 5]));  // [1, 4, 2, 3, 5]
/*This function finds the minimum value in the array, 
then moves it to the front by shifting all preceding 
elements one position backward. The original order of 
the other elements remains unchanged.*/