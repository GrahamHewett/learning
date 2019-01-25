function myReplace(sentence, toReplace, replaceWith) {
  let amendedReplace = toReplace[0] === toReplace[0].toUpperCase() ?
    replaceWith[0].toUpperCase() + replaceWith.slice(1) :
    replaceWith;
  return sentence.replace(toReplace, amendedReplace);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// Intermediate Algorithm Scripting: Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"