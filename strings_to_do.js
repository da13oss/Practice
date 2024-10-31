//Remove Blanks

function removeBlanks(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            result += str[i];
        }
    }
    return result;
}

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));  // "PlayThatFunkyMusic"
console.log(removeBlanks("I can not BELIEVE it's not BUTTER"));  // "IcannotBELIEVEit'snotBUTTER"
//This function iterates through the string and builds a new string, omitting spaces.

//Get Digits

function getDigits(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (!isNaN(str[i]) && str[i] !== " ") {
            result += str[i];
        }
    }
    return Number(result);
}

console.log(getDigits("abc8c0d1ngd0j0!8"));  // 801008
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));  // 1357924680
//This function extracts digits from the string and constructs the integer from them.

//Acronyms

function acronym(str) {
    var words = str.split(" ");
    var acronym = "";
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            acronym += words[i][0].toUpperCase();
        }
    }
    return acronym;
}

console.log(acronym(" there's no free lunch - gotta pay yer way. "));  // "TNFL-GPYW"
console.log(acronym("Live from New York, it's Saturday Night!"));  // "LFNYISN"
//This function splits the string into words, then builds the acronym from the first letters.

//Count Non-Spaces

function countNonSpaces(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            count++;
        }
    }
    return count;
}

console.log(countNonSpaces("Honey pie, you are driving me crazy"));  // 29
console.log(countNonSpaces("Hello world !"));  // 11
//This function counts the number of non-space characters in the string.

//Remove Shorter Strings

function removeShorterStrings(arr, minLength) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length >= minLength) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));  // ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3));  // ['There', 'bug', 'the', 'system']
//This function filters out strings shorter than the given length and returns the filtered array.