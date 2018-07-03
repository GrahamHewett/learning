function palindrome(str) {
  // Good luck!
    var str1 = str.toLowerCase();
    var str2 = str1.toLowerCase().replace(/[^a-z0-9]/g, "");
    var strRev = str2.split("");
    var strRev1 = strRev.reverse();
    var strRev2 = strRev1.join("");
    if (str2 === strRev2) return true;
    else return false;
}

palindrome("A man, a plan, a canal. Panama");
