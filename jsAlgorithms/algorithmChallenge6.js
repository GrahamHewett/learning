function largestOfFour(arr) {
var array =[];
var reducer = function(prev, cur){
return prev+cur;
};
for (i=0; i<arr.length; i++){
array.push(arr[i].reduce(reducer));
}
return array;}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


function largestOfFour(arr) {
var array =[];
var reducer = function(prev, cur){
return Math.max(prev,cur);
};
for (i=0; i<arr.length; i++){
array.push(arr[i].reduce(reducer));
}
return array;}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);