//Global scope:
var beatles = ['Paul', 'George', 'John', 'Ringo'];

function printNames(names) {
    console.log(names[2])
}

printNames(beatles);

//Local Scope:

function printNames(names) {
    var beatles = ['Paul', 'George', 'John', 'Ringo']; //Will return undefinded because it is in the local scope not global scope
    console.log(names[2])

}

printNames(beatles);