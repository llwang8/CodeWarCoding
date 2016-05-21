//codeWar 6 kyu

//Who likes it?
function likes(names) {
  // TODD
  var n = names.length;
  if (n == 0) {
     return "no one likes this";
  }else if (n == 1) {
     return names[0] + " likes this";
  }else if (names.length == 2) {
     return names[0] + " and " + names[1] + " like this";
  }else if (names.length == 3) {
     return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  }else {
      return names[0] + ", " + names[1] + " and " + (n-2) + " others like this";
  }

}


//Checking Group
 function groupCheck(s){
   var  i, char, latestBracket,
       groupStack = [],
       groupOpeners = ["(", "{", "["],
       groupClosers = [')', ']', '}'];
       openToClose = {
         "(": ")",
         "{": "}",
         "[": "]"
       };
   if (s.length === 0){
     return true;
   }
   for (i=0; i<s.length; i++){
     char = s.charAt(i);
     if (groupOpeners.indexOf(char) >= 0){
       groupStack.push(char);
     }else if (groupClosers.indexOf(char) >= 0){
       if (groupStack.length){
         latestBracket = groupStack.pop();
         if(openToClose[latestBracket] !== char){
           return false;
         }
       }else {
        return false;
       }
     }
   }
   return groupStack.length === 0;
 }

groupCheck("()");
groupCheck("{(})");
groupCheck("[])");


//========================================
//Title Case
function titleCase(title, minorWords) {
  var i, result =[], titleArr, minorWordsArr;
  if (!title){
    return title;
  }else {
    titleArr = title.split(" ")
  }
  if (minorWords) {
    minorWordsArr= minorWords.split(" ");
  }

  //result = titleArr.map(function(item){
  titleArr.forEach(function(item){
    if (!minorWordsArr ||
        (minorWordsArr.indexOf(item.toLowerCase()) < 0 &&
         minorWordsArr.indexOf(item.toUpperCase()) < 0 &&
         minorWordsArr.indexOf(capitalizeStr(item)) < 0)){
      //return capitalizeStr(item);
      result.push(capitalizeStr(item));
    }else{
      //return item;
      result.push(item.toLowerCase());
    }
  });

  result = result.join(" ");
  return result.charAt(0).toUpperCase() + result.slice(1);
}

function capitalizeStr(str){
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

titleCase('THE WIND IN THE WILLOWS', 'The In');
titleCase('a clash of KINGS', 'a an the of');


//========================================
//Your order, please

function order(words){
  if (words.length == 0){
    return "";
  }

  var arr = words.split(" "), regx = /[\d]/g,
      i, index, result = [];

  for (i=0; i<arr.length; i++){
    index = arr[i].match(regx);
    //console.log(JSON.stringify(index.concat(arr[i])));
    result.push(index.concat(arr[i]));
  }

  result.sort(function(a, b){
    if (a[0] > b[0]){
        return 1;
    }else if (a[0] == b[0]){
        return 0;
    }else {
        return -1;
    }
  });

  //console.log("after sort: " + JSON.stringify(result));
  return result.map(function(item){
    return item[1];
  }).join(" ");

}

function order2(words){
    return words.split(' ').sort(function(a, b){
        return a.match(/d+/g) - b.match(/d+/g);
    }).join(' ');
}

order("is2 Thi1s T4est 3a");


//========================================
//Shop Inventory Manager





//========================================
//Unique In Order
var uniqueInOrder=function(iterable){
  var result = [];
  var arr = [];
  if (typeof iterable == "string"){
    arr = iterable.split("");
  }
  arr = iterable;
  for (var i=0; i<arr.length; i++){
    while (arr[i] === arr [i + 1]){
      i++;
    }
    result.push(arr[i]);
  }
  return result;
};

uniqueInOrder("aabbcccd");

//========================================
//Calculate Hypotenuse of Right-angled triangle

function calculateHypotenuse(a,b){
  // TODO: complete calculateHypotenuse so that it returns the hypotenuse length
  // for a triangle with sides of length a, b, and c, where c is the hypotenuse.
  // The solution should verify that inputs are valid numbers (both above zero).
  if (isNaN(a) || typeof a != "number" || a <= 0 || isNaN(b) || typeof b != "number" || b <= 0){
    throw new Error("Invalid Input");
  }
  return Math.sqrt(a * a + b * b).toFixed(3);

}

calculateHypotenuse(3, 4);

//========================================
//"this"  is an other problem
function NamedOne(first, last) {
// -- SHOULD be changed --
    this.firstName = first;
    this.lastName = last;
    Object.defineProperty(this, "fullName", {
      set: function(value){
        var nameArr = value.split(' ');
        if (nameArr.length === 2){
          this.firstName = nameArr[0];
          this.lastName = nameArr[1];
        }
      },
      get: function(){
        return this.firstName + " " + this.lastName;
      }
    });
}

var namedOne = new NamedOne("Naomi","Wang")
namedOne.firstName // -> "Naomi"
namedOne.lastName  // -> "Wang"
namedOne.fullName  // -> "Naomi Wang"

namedOne.firstName = "John"
namedOne.firstName // -> "John"
namedOne.lastName = "Doe"
namedOne.lastName  // -> "Doe"

namedOne.fullName;




//========================================
//closures and Scope
function createFunctions(n) {
  var callbacks = [];

  for (var i=0; i<n; i++) {
    (function(num){
      callbacks.push(function() {
      return num;
      });
    })(i);

  }

  return callbacks;
}


//"this" is an other solution
function OnceNamedOne(first, last) {
// -- SHOULD be changed --
    this.firstName = first;
    this.lastName = last;
    this.fullName = this.firstName + ' ' + this.lastName;
    return Object.freeze(this);
}


//========================================
//Hex class

function Hex(value){
  //...

  this.valueOf = function(){
    var regx = /^0[xX][A-F-a-f]+/;
    if (regx.test(value)){
      return parseInt(value, 16);
    }
    return parseInt(value, 10);
  };

  this.toString = function(){
     return "0x" + value.valueOf().toString(16).toUpperCase();
   };

  this.toJSON = function(){
    return "0x" + value.valueOf().toString(16).toUpperCase();
  };

  this.plus = function(m){
    return "0x" + (value.valueOf() + m.valueOf()).toString(16).toUpperCase();
  };

  this.minus = function(m){
      return "0x" + (value.valueOf() - m.valueOf()).toString(16).toUpperCase();
  };

}

Hex.parse = function(string){
  var regx = /^0[xX][A-F-a-f]+/;
  if (regx.test(string)){
    return parseInt(string, 16);
  }else {
    return parseInt(("0x" + string), 16);
  }
};

FF = new Hex(31);

FF.toString(); // "0xFF"
FF + 1; // 256
FF.toJSON(); //"0xFF"
FF.minus(1).toString(); // "0xFE"
FF.minus(FF).valueOf() == 0; // "Should be zero"
new Hex(10).plus(5).toString(); // "0xF"

Hex.parse("FF"); //255
Hex.parse("0xFF"); //255

var regx = /^0[xX][A-F-a-f]+/;
regx.test("FF");

parseInt("0x1F", 16);

//===========================
//Closest pair of points

// Calculate a pair of closest points
function closestPair( points ){
  var arr = points.slice(0);
      minDistance = 0,
      minDistancePair = [];
      curDistance = 0;

  for (var i = 0; i < arr.length - 1; i++){
    for (var j = i + 1; j < arr.length; j++){
      curDistance = distanceBetweenTwoPoints(arr[i], arr[j]);
      if (minDistance > curDistance){
        minDistance = curDistance;
        minDistancePair = [arr[i], arr[j]];
      }
    }
  }

  return minDistancePair;
}

function distanceBetweenTwoPoints([x1, y1], [x2, y2]){
  return Math.sqrt((x2-x1)(x2-x1) + (y2-y1)(y2-y1));
}



//========================
//Reach Me and Sum
function sumDigNthTerm(initval, patternl, nthterm) {
    var count = 1, curVal = initval, i = 0;
    while (count < nthterm) {
      curVal += patternl[i];
      console.log(curVal);
      count++;
      if (i === patternl.length - 1){
        i = 0;
      }else {
        i++;
      }
    }
    return curVal.toString().split('').reduce(function(sum, d){
      return sum + parseInt(d);
    }, 0);
}

sumDigNthTerm(10, [2, 1, 3], 6);

//============================
//Shortest code:bug in apple
function sc1(apple){
  var i,j, l=apple.length;
  for(i=0; i<l; i++){
    for (j=0; j<apple[i].length; j++){
      if (apple[i][j] === "B") return [i, j];
    }
  }
}

function sc2(a){
  for (var i in a){
    for (var j in a[i]){
      if (a[i][j] === "B") return [+i, +j];
    }
  }
}

function sc(a){
  var i, j;
  for (i in a){
    j = a[i].indexOf("B");
    if (j >= 0) return [+i, +j];
  }
}

//====================
//Get All Possible Anagrams from a Hash
function getWords(hash){
  var letters = [], combination = [], result = [];
  for (var key in hash){
    var i = parseInt(key);
    while (i > 0){
      letters.concat(hash[key]);
      i--;
    }
  }
  combination = anagram(letters);
  for (var i = 0; i < combination.length; i++){
    while (combination[i] === combination[i+1]){
      i++;
    }
    result.push(combination[i]);
  }
}

function anagram(arr){
  var i, j, item, newArr, result = [];
  for (i=0; i<arr.length; i++){
    item = arr[i];
    newArr = arr.slice(0);
    newArr.splice(i, 1);
    console.log(newArr);
    for (j=0; j<=newArr.length; j++){
      newArr.splice(j, 0, item);
      console.log(newArr);
      result.push(newArr.sort().join(""));
    }
  }
  console.log(result);
  return result;
}

anagram(["a", "b", "c"]);


//========================
//Needles in a haystack
function search(haystack, needle) {
  var result = [];
  var regx = new RegExp(needle);
  for (var key in haystack){
    if (typeof haystack[key] == "object"){
      result.concat(search(haystack[key], needle));
    }else {
      if (regx.test(haystack[key])){
          result.push(key);
       }
    }
    //JSON.stringify(result);
  }
  return result.sort();
}

var obj = {
  site: "Codewars",
  description: "Lorem ipsum dolor sit...",
  obj2: {
    str: "Yeah, Codewars!",
    num: 123,
    obj3: {
      something: "Ph'nglui mglw'nafh Codewars R'lyeh wgah'nagl fhtagn.Gotha fm'latgh h'gof'nn, geb chtenff"
    }
  }
};

var results = search(obj.obj2.obj3, "Codewars");
console.log(results);

console.log(typeof obj.obj2 == "object");
//results = ["obj2.obj3.something", "obj2.str", "site"]







