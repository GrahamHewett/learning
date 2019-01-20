function rot13(str) {
var code =[];
for (i=0; i<str.length; i++) {
  var decide = str.charCodeAt(i);
    if (decide>64 && decide <78) {
    code.push(String.fromCharCode(str.charCodeAt(i) + 13));
    }
    else if (decide>77 && decide<91) { 
    code.push(String.fromCharCode(str.charCodeAt(i) - 13));
}
    else {code.push(String.fromCharCode(str.charCodeAt(i)));
}
}
  var result = code.join('');
  return result;
}

// Change the inputs below to test
rot13("SERR CVMMN");
