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
//Hex class  ???

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
// Calculate a pair of closest points  ???
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
//Get All Possible Anagrams from a Hash   ???
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
  return result;
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
//Needles in a haystack  ???
function search(haystack, needle) {
  var result = [];
  var regx = new RegExp(needle);
  for (var key in haystack){
    console.log("key:" + key);
    if (typeof haystack[key] == "object"){
      console.log(search(haystack[key], needle));
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



//============================
//Paths in the Grid  ???
function numberOfRoutes(m, n){
  var i = 0, j = 0, count = 0;

  while (i <= m || j <=n ) {


  }
  return count;
}

numberOfRoutes(1, 1);

//=================
//Is Integer Array
function isIntArray(arr) {
  var result = true;
  if (!arr){
    return false;
  }
  arr.forEach(function(item){
    if (isNaN(item) || !Number.isInteger(item)){
      result = false;
    }
  });
  return result;
}

isIntArray([1, 2, 3, NaN]);


//=================
//Turkish National Identity Number

function checkValidTrNumber(n) {
  var str = n.toString(), i, sumOdd=0, sumEven=0, calTen, calEleven;
  if (str.length != 11){
    return false;
  }
  if (str[0] === "0"){
    return false;
  }
  for (i=0; i<=8; i+=2){
    sumOdd += +str[i];
  }
  for (i=1; i<=7; i+=2){
    sumEven += +str[i];
  }
  calTen = (sumOdd * 7 - sumEven) % 10;
  if (str[9] != calTen) {
    return false;
  }
  calEleven = (sumOdd + sumEven + calTen) % 10;
  if (str[10] != calEleven){
    return false;
  }
  return true;

}

//===============================
//Most improved - Puzzles #4
function calculateImproved(students){
   var newStudents = [], j;
   if (!students){
    return [];
   }

   for (var i=0; i<students.length; i++){
      student = students[i];
      student.improvement = calcuteImpFromMarks(student.marks);
      delete student.marks;
      //console.log(student);
   }

   students.sort(function(stuA, stuB){
     if (stuA.improvement != stuB.improvement) {
        return stuB.improvement - stuA.improvement;
     }
   });

   for (i=0; i<=students.length-2; i++){
      j = i;
      while (i<students.length-1 && students[i].improvement == students[i+1].improvement){
        i++;                  //watch for i not over limit
      }
      if(j !== i){
        sortAlphabet(j, i);
      }
   }

  function sortAlphabet(m, n){
    for (var p=m; p<=n; p++){
      for (var q=p+1; q<=n; q++){
        //console.log("p: " + students[p].name)
        //console.log("q: " + students[q].name)
        //console.log(students[p].name > students[q].name);
        if (students[p].name > students[q].name){// sort by obj.name
          swap(p, q);
        }
      }
    }
  }

  function swap(a, b){
    temp = students[a];
    students[a] = students[b];
    students[b] = temp;
  }

  return students;

}

function calcuteImpFromMarks(arr){
  var result = 0;
  if (!arr || arr[0] === 0 || arr[0] === null) { //watch for null, 0
    result = 0;
  }else {
    if (!arr[arr.length - 1]){
      arr[arr.length - 1] = 0;
    }
    result = (arr[arr.length - 1] - arr[0]) / arr[0] * 100;
  }

  return Math.round(result);
}



function Student(name, marks){
  this.name = name;
  this.marks = marks;
}

var names = ['Henry, Johns',
    'Timmy, Bug', 'George, King',
    'Finn, Wish', 'Lucy Act'],
    marks = [[0,100],[0,9],
    [0,0],[0,76],[0,null]];

var students = [];
for(var i=0;i<5;i++){
    students.push(new Student(names[i],marks[i]));
}

calculateImproved(students);

//=====================================
//Who won the election?

function getWinner(listOfBallots) {
  var i, max=0,
      maxKey = "",
      arr = listOfBallots.slice(0),
      ballotObj = {},
      limit = arr.length / 2;

  if(!arr){
    return null;
  }

  for (i=0; i<arr.length; i++){
    console.log(arr[i]);
    if(ballotObj[arr[i]]){
      ballotObj[arr[i]]++;
    }else{
      ballotObj[arr[i]] = 1;
    }
  }

  JSON.stringify(ballotObj);

  for (var key in ballotObj){
    if (max < ballotObj[key]){
      max = ballotObj[key];
      maxKey = key;
    }
  }

  if (max > limit){
    return maxKey;
  }else {
    return null;
  }

}

getWinner(["A", "A", "A", "B", "C", "B"]);

getWinner2(list){
  var result = {};
  var winNum = list.length / 2;
  list.forEach(function(char){
    ++result[char] || result[char] = 1;
  });
  var answer = Object.keys(result).filter(funciton(key){
    if (result[key] > winNum){
      return key;
    }
  });
  return answer[0] || null;
}

//==========================
//Dragon's Curve

Dragon2 = function(n) {
  var str= 'Fa', regx = /a|b/g;

  if (isNaN(n) || typeof n === 'undefined' || !Number.isInteger(n) || n < 0){
    return "";
  }

  while(n > 0){                               //iterative
    str = str.replace(regx, function(match){
      return (match === 'a') ? 'aRbFR' : 'LFaLb';
    });
    n--;
  }

  return str.replace(regx, "");

}

Dragon = function(n, str) {
  var regx = /a|b/g;
  str = str || 'Fa';

  if (isNaN(n) || typeof n === 'undefined' || !Number.isInteger(n) || n < 0){
    return "";
  }

  if (n === 0){
    return str.replace(regx, "");
  }else {
    str = str.replace(regx, function(match){
      return (match === 'a') ? 'aRbFR' : 'LFaLb';
    });

    return Dragon(n - 1, str);      //recursive
  }

}

Dragon(1);


//test
//replace 'a' with: 'aRbFR'
//replace 'b' with: 'LFaLb'

//var regx = /a|b/g;
//console.log('FaRbFR'.replace(regx, function(match){
//  return (match === 'a') ? 'aRbFR' : 'LFaLb';
//}));

//===========================
//Integers: Recreation One

function listSquared(m, n) {
    var result = [], sumOfSq;
    for (var i = m; i <= n; i++){
        sumOfDivSq = sumOfDivisorsSquares(i);
        if(Number.isInteger(Math.sqrt(sumOfDivSq))){
          result.push([i, sumOfDivSq]);
        }
    }
    return result;
}

function sumOfDivisorsSquares(num){
  var divisorsArr = [];
  for (var i = 1; i <= num; i++){
    if (num % i === 0){
      divisorsArr.push(i);
    }
  }
  console.log(divisorsArr);
  return divisorsArr.reduce(function(sum, cur){
    return sum + cur * cur;
  }, 0);
}

listSquared(1, 250);


//==========================
//



//==========================
//




//==========================
//




//==========================
//



//==========================
//



//==========================
//



//==========================
//



//==========================
//



//==========================
//



//==========================
//



//==========================
//



//==========================
//


