function confirmEnding(str, target) {
var startPoint = str.length - target.length;
var letters = target.length;
var check = str.substr(startPoint,letters);
if (check === target) {
return true;} 
else return false;
}

confirmEnding("Bastian", "an");
