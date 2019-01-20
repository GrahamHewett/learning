function bouncer(arr) {
  return arr.filter(Boolean);  
}

bouncer([7, "ate", "", false, 9]);


//Alternative
function bounceAlt(arr) {
  return arr.filter(function(v) { return !!v; });
}

