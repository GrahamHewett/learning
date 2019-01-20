
function chunkArrayInGroups(arr, size) {
newarr = [];
for (i = 0; i < arr.length; i += size) {
newarr.push(arr.slice(i,i+size));
}
return newarr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);