function smallestCommons(arr) {
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	let factors = [];
	for (let i = min; i <= max; i++) {
	  factors.push(i);
	}
	return arr;
  }
  
  
  smallestCommons([1,5]);