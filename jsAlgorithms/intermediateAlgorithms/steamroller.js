function steamrollArray(arr) {
    return arr.reduce((flattenedArray, element) => 
      Array.isArray(element) ? 
        flattenedArray.concat(steamrollArray(element)) : 
        flattenedArray.concat(element),
    []);
    // Or use modern flat method with a depth of 3
    // return arr.flat(3);
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);

  //flatten a deeply nested array.