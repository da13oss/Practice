function isCreditCardValid(digitArr) {
    var lastDigit = digitArr.pop();
    var sum = 0;

    for (var i = digitArr.length - 1; i >= 0; i--) {
        var num = digitArr[i];
        if ((digitArr.length - i) % 2 === 0) {
            num *= 2;
            if (num > 9) {
                num -= 9;
            }
        }
        sum += num;
    }

    sum += lastDigit;

    return sum % 10 === 0;
}

// Example calls:
console.log(isCreditCardValid([5, 2, 2, 8, 2]));  // true
console.log(isCreditCardValid([5, 2, 2, 8, 3]));  // false

//This function works as follows:
//Sets aside the last digit of the array.
//Iterates through the array from the back, multiplying every second digit by 2 and subtracting 9 
//if the result is greater than 9.

//Sums all the modified digits.
//Adds the last digit back to the sum.
//Checks if the final sum is a multiple of 10. If so, the credit card number is valid; otherwise, it’s not.