var longestWord = 1;
function findLongestWord(str) {
  var wordArray = str.split(" ");
  for (i = 0; i < wordArray.length; i++) {
  var checkWord = wordArray[i].length;
  if (checkWord>longestWord){
  longestWord = checkWord;}
}
  return longestWord;
}

findLongestWord("May the force be with you");
