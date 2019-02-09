function translatePigLatin(str) {
	const re = /[aeiou]/
	const firstVowel = str.indexOf(str.match(re));
	const prefix = str.slice(firstVowel);
	const suffix = `${str.slice(0, firstVowel)}ay`;
	return re.test(str[0]) ?
	  `${str}way` : 
		re.test(str) ?
		`${prefix}${suffix}` :
		`${str}ay`;
  }
  
  translatePigLatin("lg");