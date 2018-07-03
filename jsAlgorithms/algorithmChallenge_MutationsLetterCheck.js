Mutations

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    String.prototype.indexOf()


function mutation(arr) {
  var firstWord = arr[0];
  var word = firstWord.toLowerCase();
  var secondWord = arr[1];
  var test = secondWord.toLowerCase(); 
  var letters = test.split(""); //get individual lettes
  for (i=0; i<test.length; i++){
    var value = word.indexOf(letters[i]);
    if (value == -1) {return false;
    }
  } //close for loop
  return true;
} //close function

mutation(["Mary", "Army"]);
