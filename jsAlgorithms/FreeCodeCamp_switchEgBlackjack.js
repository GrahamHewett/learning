
var count = 0;

function cc(card) {
  // Only change code below this line
switch (card){
  case 1:
  case 2:
  case 3:
  case 4:  
  case 5:
  case 6:  
    count++;
break;
  case 7:
  case 8:
  case 9:
 count=count;
break;
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
count--;
break;  
  }
  if (count<=0) return count + " Hold" ;
  else if (count>0) return count + " Bet" ;
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); 
//cc(3); 
//cc(7); 
//cc('K'); 
//cc('A');



// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
/*  switch(val) {
    case "alpha": 
      result = "Adams";
      break;
    case "bravo": 
      result = "Boston";
      break;
    case "charlie": 
      result = "Chicago";
      break;
    case "delta": 
      result = "Denver";
      break;
    case "echo": 
      result = "Easy";
      break;
    case "foxtrot": 
      result = "Frank";
  }
*/
var lookup = {
   alpha:"Adams",
   bravo:"Boston",
   charlie:"Chicago",
   delta:"Denver",
   echo:"Easy",
   foxtrot:"Frank"
};

result = lookup[val];
  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");
