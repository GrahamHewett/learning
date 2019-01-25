function steamrollArray(arr) {
    return arr.reduce((acc, el, index) => {
        typeof el === 'object' ? 
          acc.push(...el) :
          acc.push(el);
        return acc
    }, []);
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);
  //recursion needs to be added