
function destroyer(arr) {
var value = 2;

result = arguments[0];

arr = arr.filter(function(item) { 
    return item !== value;
});

console.log(arr);  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
