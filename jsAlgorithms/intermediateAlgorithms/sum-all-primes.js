function sumPrimes(limit) {
	let primes = [];
	for (let i = 1; i <= limit; i++) {
	  if (isPrime(i)) {
		primes.push(i);
	  }
	}
	return sum(primes);
  }
  
  const isPrime = (num) => {
	if (num <= 3) {
	  return num > 1;
	}
	else if (num % 2 === 0 || num % 3 === 0) {
	  return false;
	}
	let j = 5;
	   while (j*j <= num) {
		 if (num % j === 0 || num % (j + 2) === 0) {
		   return false
		 }
		 j += 6;
	   }
	return true;
  }
  
  const sum = (numbers) => {
	return numbers.reduce((total, num) => {
	  return total + num;
	});
  }
  
  sumPrimes(73156);