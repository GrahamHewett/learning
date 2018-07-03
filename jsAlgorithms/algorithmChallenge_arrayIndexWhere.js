
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a,b){
  return a-b 
  });
  var index = arr.indexOf(num); 
  return index;
}

getIndexToIns([40, 60], 50);
