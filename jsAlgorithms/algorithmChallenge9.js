//eval on line 6 is vunerable to string injection acttacks.
function truncateString(str, num) {
  var startPoint = 0;
  var letters = num;
  var trunc = "";
    if (isNaN(num)) { letters = eval(num);
    }
       if (letters<4) {
           if (str.length>letters) {
           trunc = str.substr(0,letters);  
           return trunc + "...";
           }
           else return str;
       }
       else {
           if (str.length>letters) {
           trunc = str.substr(0,letters-3);  
           return trunc + "...";
           }
           else return str;
       } 
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
