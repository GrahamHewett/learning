function truthCheck(collection, pre) {
    return collection.every(obj => obj[pre])
}

function truthCheck(collection, pre) {
    let values =[];
    for(let index in collection) {
      values.push(!!collection[index][pre]); //!! same as Boolean() converts expression into a boolean
    }
    return !values.includes(false);
}

function truthCheck(collection, pre) {
    let values =[];
    for(let index in collection) {
      values.push(collection[index][pre]);
    }
    return (
      !values.includes(undefined) && 
      !values.includes(0) &&
      !values.includes('') &&
      !values.includes(NaN) &&
      !values.includes(null)
    );
}

// Intermediate Algorithm Scripting: Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

// Remember, you can access object properties through either dot notation or [] notation.