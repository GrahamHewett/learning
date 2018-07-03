
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop) {
// Only change code below this line
    var value;
    for (var i = 0; i < contacts.length; i++) {
      if((contacts[i].firstName === firstName) && 
         (contacts[i].hasOwnProperty(prop))){
        value = contacts[i][prop];
        break;
    }
    if (contacts[i].hasOwnProperty(firstName) === false){
      value = "No such contact";
    }
    if (contacts[i].hasOwnProperty(prop) === false) {
      value = "No such property";
    }
    }
    return value;
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");


/* Wrong Example below
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
for (i=0; i<contacts.length; i++){
for (j=0; i<contacts[i].length; j++){
   if (contacts[i]!=firstName){return "No such contact";}
  else if (contacts[i][j]!=prop){return "No such property";}
  else return contacts[i][j];
}
}

// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
*/