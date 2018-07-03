 :beginner: Basic Code Solution:

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}

:rocket: Run Code 695
Code Explanation:

    Create an array of arguments using Array.prototype.slice.call() and store it in the variable args. We’ll use this to check against arr.

    Start a basic for loop to iterate through arr. Nest another for loop inside the first, changing the integer variable j and arr to args. This second loop will iterate through args .

    Within the second loop create an if statement, checking strictly === that the current val of arr[i] is equal to args[j].

    If the value at the current index is equal in both arrays, use delete to remove it from arr.

    Outside of the nested loops: return the modified array using the Boolean object as a filter for any null's created by the delete operator.

Relevant Links

    arguments 1.3k
    Array.filter() 440
    delete 545
    Boolean 136

:sunflower: Intermediate Code Solution:

function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}

:rocket: Run Code 342
Code Explanation:

    Declare a variable named args and set it equal to a new Array object from() the arguments passed into the function. On the same or next line, use the slice() method on args starting from the second index, 1. This separates the arguments used for filtering into their own array of args.

    Return the filtered array, using includes() in the callback function to check if val is not in args; returning true to keep the value in the original array or false to remove it.

Relevant Links

    arguments 1.3k
    Array.slice() 125
    Array.includes() 758
