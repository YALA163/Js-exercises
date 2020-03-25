//variables 
// are case-sensitive
// cannot start with number
//cannot start with a space or hyphen(-)
//cannot be a reserved word
 //primtive datatypes

let a = 1;
let b =2;
let c =3;
name = 'John';//string boolean
let age = 30;//number lteral

let message = name + ' \'has\' '+ age ;
 
 age /=5;

console.log(age);
console.log(a);
console.log(b);
console.log(c);
console.log(message);
//Reference Datatypes
//Array literals
 const numbers = new Array(1,2,3,4,5,6);
 numbers[2]= 9;
 const colors =["red; yellow,green"];
 console.log(numbers);
 console.log(colors);
 colors.push('white');
 colors.pop('white');
 //objects literals

 const person = [{
    firstname:'Gatore',
    lastname:'jimmy',
    age:26,
    girlfriends: ['neema', 'chrissa'],
    adress:{
        street:'K714st',
        city:'Kidaho',
        state:'Rwanda'
    }
    
},
    {
        firstname:'Kamikazi',
        lastname:'Neema',
        age:21,
    Boyfriends: ['jimmy', 'Habibu'],
        adress:{
            street:'K563st',
            city:'Kigali',
            state:'Rwanda'
            
        }
         
    }
]   
 //Functions
 

 function abTest(a, b) {
  // Only change code below this line
if (a < 0 || b > 0) {
    return undefined;
  }


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(-1,5));
 
 //Dot Notation
 console.log(person.adress);

 

 person.email = 'jimmygatore@outlook.fr';
 console.log(person);
 


 //If Statements

//Switch Statements


function switchOfStuff(val) {
    var answer = "";
  
    // Only change code below this line
  
    switch (val) {
      case"a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case"c":
        answer = "cat";
        break;
     default://by default
        answer ="stuff";
        break;
    }
  return answer;
    
  }
  
  console.log(switchOfStuff(b));
  function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line
  switch(val){
    case 1:
    case 2:
    case 3:
      answer="Low";
      break;
    case 4:
    case 5:
    case 6:
    answer="Mid";
    break;
    case 7:
    case 8:
    case 9:
    answer="High";
    break;
  }
  
  
    // Only change code above this line
    return answer;
  }
  
  console.log(sequentialSizes(1));
  console.log(sequentialSizes(4));
  console.log(sequentialSizes(7));
  
  //Objects
  var myDog = {
    "name": "Whiskers",
      "legs": 4,
      "tails": 1,
      "friends": ["Water", "Dogs"]
      };
  console.log(myDog);
// Object Properties with Dot Notation 

//There are two ways to access the properties of an object: dot notation (.) 
//and bracket notation ([]), similar to an array.

// dot notation (.) 

var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

var hatValue =testObj.hat; // Change this line
var shirtValue =testObj.shirt;    // Change this line
console.log(testObj);

//Bracket notation ([])

var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
var entreeValue =testObj["an entree"];   // Change this line
var drinkValue  = testObj["the drink"];  // Change this line
console.log(testObj["an entree"]);
console.log(testObj["the drink"]);

//Object Properties with Variables
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line

var playerNumber=12;       
var player = testObj[playerNumber];    
console.log(testObj[playerNumber]);

var playerNumber=16;     
var player = testObj[playerNumber];  
console.log(testObj[playerNumber]);

//delete properties
delete testObj.playerNumbers;

//Using Objects for Lookups
//bjects can be thought of as a key/value storage, like a dictionary. 
//If you have tabular data, you can use an object to "lookup" values rather than
// switch statement or an if/else chain. This is most useful when you know that
//your input data is limited to a certain range.
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
   //phoneticLookup  was  Variable repleced by lookup
   var lookup={
     "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
   result = lookup[val];

  // Only change code above this line
  return result;
}

console.log(phoneticLookup("alpha"));


var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Only change code below this line
 if(myObj.hasOwnProperty(checkProp)==true){
  return  myObj[checkProp];
 }else{
   return "Not found"
 }
  // Only change code above this line
}

console.log(checkObj("house"));

//JSON CRASH COURSE
//Javascript object Notation
//Manipulating Complex Objects
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Deep Purple",
    "title": "Smoke on the water",
    "release_year": 1976,
    "formats": [ 
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];
//myMusic= JSON.stringify(myMusic);
//myMusic= JSON.parse(myMusic);
//console.log(myMusic);
//console.log(myMusic[0]);
//console.log(myMusic[1].artist);
//for (var i =0;i<myMusic.length;i++){
 // console.log(myMusic[i].artist);
//}

var output = "";
for(var i=0;i<myMusic.length;i++){
output += "<li>"+myMusic[i].release_year+"</li>";
}
document.getElementById("myMusic").innerHTML = output;

//Accessing Nested Arrays
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

// Only change code below this line

var secondTree = myPlants[1].list[1];
 console.log(myPlants[1].list[1]);

//Record Collection
 
 var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};

// Only change code below this line
function updateRecords(id, prop, value) {
  if(value === "") delete collection[id][prop];
  else if(prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }

  console.log(collection)
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
updateRecords(5439, "tracks", "Take a Chance on Me");
updateRecords(2468, "tracks", "Free");

//Iterate with JavaScript While Loops
  var myArray = [];
  var i = 10;

  while (i <= 5){
    myArray.push(i);
    i++;
  }
  //2nd condition

  var myArray = [];
var i = 5;
while(i >= 0) {
  myArray.push(i);
  i--;
}
  console.log(i, myArray);

  //Count Backwards With a For Loop
  var myArray = [];
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
  }
  console.log(myArray);

  //Nesting For Loops
  function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
   for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        product = product * arr[i][j];
      }
    }
    // Only change code above this line
    return product;
  }
  
 console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));

 //Iterate with JavaScript Do...While Loops
 
 // Setup
 var myArray = [];
 var i = 10;
 
 // Only change code below this line
  do{
   myArray.push(i);
   i++;
 
 }while (i < 5)
 console.log(i,myArray);