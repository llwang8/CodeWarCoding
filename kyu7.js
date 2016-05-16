//codeWar 7 kyu

//Vasya and Book

function bookIsDay(pages,days){
  // ...
  console.log("pages: " + pages);
  console.log("days: " + days);
  var sumOfPages = 0;
  for (var i=0; i<days.length; i++){
    if (pages - sumOfPages <= days[i]){
      console.log("i+1: " + (i+1));
      return i + 1;
    }
    sumOfPages += days[i];
  }
  console.log("left to read: " + (pages-sumOfPages));
  if (sumOfPages < pages){
    return bookIsDay((pages-sumOfPages), days);
  }
}

var days = [10, 10, 10, 10, 10, 10, 10], pages = 100;
//var days = [15, 20, 20, 15, 10, 30, 45], pages = 100
var temp = bookIsDay(pages, days);
console.log(temp);


//========================================
//Help Sukuzi rake his garden!
function rakeGarden(garden) {
  var rakedGarden, i;
  rakedGarden = garden.split(" ");
  for (i=0; i<rakedGarden.length; i++){
    if (rakedGarden[i] != "gravel" && rakedGarden[i] != "rock"){
      rakedGarden[i] = "gravel";
    }
  }
  console.log(rakedGarden);
  return rakedGarden.join(" ");
}

var garden1 = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel';
 rakeGarden(garden1);


function rakeGarden2(garden){
  return garden.replace(/\b(?!(gravel|rock)\b)\w+\b/g, 'gravel');
}

function rakeGarden3(garden){
  var rakedGarden;
  rakeGarden = garden.split(' ').map(function(item){
    if (item == "rock") return "rock";
    return "gravel";
  }).join(' ');
}

//========================================
//Cross Product of Vectors
function validateArguments(arg){
  if ((Object.prototype.toString.call(arg) !== "[object Array]") || arg.length != 3){
    return false;
  }
  return true;
}

function crossProduct (vector1, vector2) {
  var i, y, z, result = [];
  if (!vector1 || !validateArguments(vector1) || !vector2 || !validateArguments(vector2)){
    throw new Error "Arguments are not 3D vectors!";
  }
  for (i=0; i<3; i++){
    y = (i + 1 >= 3) ? i + 1 - 3 : i + 1;
    z = (i + 2 >= 3) ? i + 2 - 3 : i + 2;
    result.push(vector1[y] * vector2[z] - vector1[z] * vector2[y]);
  }
  return result;
}
crossProduct([1,0,0]);
toString.call([1,0,0]);

function crossProduct1 (vector1, vector2) {
  var result = [], x, y, z;
  if (!validateArguments(vector1) || !validateArguments(vestor2)){
    throw new error ("Arguments are not 3D vectors!");
  }
  x = vector1[1] * vector2[2] - vector1[2] * vector2[1];
  y = vector1[2] * vector2[0] - vector1[0] * vector2[2];
  z = vector1[0] * vector2[1] - vector1[1] * vector2[0];
  result.push(x);
  result.push(y);
  result.push(z);
  return result;
}

//========================================
// Permutation Average
function permutationAverage(n){
  var result = 0, length, numSet;
  numSet = permutationRecursive(n);
  length = numSet.size;
  numSet.forEach(function(item){
    result += parseInt(item);
  });
  //console.log(result/length);
  return Math.round(result/length);
}

function permutationRecursive (n) {
  var i, str, length, lastChar, allCharsExceptLast,
      permuAllCharsExceptLast, permutation, permuResult = new Set();
  str = n.toString();
  length = str.length;
  if (length <= 1) {
    return new Set(str);
  }
  lastChar = str.charAt(length-1);
  allCharsExceptLast = str.slice(0, -1);
  permuAllCharsExceptLast = permutationRecursive(allCharsExceptLast);
  permuAllCharsExceptLast.forEach(function(permuItem){
    for (i=0; i<=allCharsExceptLast.length; i++){
      permutation = permuItem.slice(0,i) + lastChar + permuItem.slice(i);
      permuResult.add(permutation);
    }
  });
  return permuResult;
}

permutationAverage(61019);

function permutationAverageArr(n){
  var result, length, numArr;
  numArr = [...permutationRecursive(n)];
  console.log("numArr: " + numArr);
  console.log(toString.call(numArr));
  length = numArr.length;
  result = numArr.reduce(function(sum, item){
    return sum + parseInt(item);
  }, 0);
  //return result / length | 0;
  console.log(result);
  return Math.round(result/length);
}
function permutationRecursive1(n){
 var arr, i, j, str, singleN, restStr, length, newItem, permuResult = [], result = [];
 str = n.toString();
 length = str.length;
 if (length === 1) return [n];
 for (j=0; j<length; j++){
    singleN = str.charAt(j);
    if (j == 0) {
      restStr = str.slice(1);
    }else if (j == length-1){
      restStr = str.slice(0, j-1);
    }else {
      restStr = str.slice(0,j-1) + str.slice(j+1);
    }
   permuOneLessArr = permutationRecursive(restStr);
   permuOneLessArr.forEach(function(item){
      permuResult.push(parseInt(singleN + item));
      for (i=1; i<item.length; i++){
        newItem = item.slice(0, i) + singleN + item.slice(i);
        permuResult.push(parseInt(newItem));
      }
      permuResult.push(parseInt(item + singleN));
    });
 }

 for (j=0; j<permuResult.length-1; j++){
  while (permuResult[j] == permuResult[j+1]){
    j++;
  }
  result.push(permuResult[j]);
 }
}

permutationAverage(737);


//========================================
//Zebulan's Nightmare

function zebulansNightmare(functionName) {
  // don't be like zebulan!
  var arr, newStr;
  arr = functionName.split("_");
  newStr = arr.map(function(item){
    return item.charAt(0).toUpperCase() + item.slice(1);
  }).join("");
  return newStr[0].toLowerCase(0) + newStr.slice(1);


//========================================
//kata Impossible I - The Impossible Lottery  ???

var lotteryTicket = [1,2,3,4,5,6,7,8,9,10];
var result = generateLottery();
console.log(checkLottery(lotteryTicket, result));

function generateLottery(){
  var random, arr = [];
  for (var i=1; i<=10; i++){
    random = Math.floor(Math.random() * 1000000 + 1);
    arr.push(random);
  }
  return arr;
}

function checkLottery(ticket, lottery){
  var msg, numMatch = 10,
      numNames = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

   ticket.forEach(function(item){
    if (lottery.indexOf(item) < 0){
      numMatch -= 1;
    }
    //console.log("ticket item: " + item + " numMatch lottery: " + numMatch);
  });

  if (numMatch < 10){
    switch (10 - numMatch){
      case 1:
        msg = "One number out of 10 does not match.  Lottery lost";
        break;
      case 10:
        msg = "Numbers do not match.  Lottery lost";
        break;
      default:
        msg = numNames[10-numMatch-2] + " numbers out of 10 do not match.  Lottery lost";
        break;
    }
  }else {
    for (var i=0; i<lottery.length; i++){
      if (lottery[i] !== ticket[i]){
        msg = "Numbers not in the correct order.  Lottery lost";
        return msg;
      }
    }
    msg = "All 10 numbers match up perfectly.  Lottery won!  You get 1000 trillion British pounds worth of money";
  }
  return msg;
}


//========================================
//Number climber   ???
function climb(n){
  var result = [n];
  if (n === 1 ){
    return result;
  }

  if (Number.isInteger((n - 1) / 2)){
    return result.concat(climb((n - 1) / 2)).sort(function(a, b){
      return a - b;
    });
  } else {
    return result.concat(climb(n / 2)).sort(function(a, b){
      return a - b;
    });
  }

}

function climb2(n){
  var result = [];
  while (n){
    result.push(n);
    n = n >> 1;
  }
  return result.reverse();
}

climb(10);


//========================================
//Coding 3min: Bug in Apple
function sc(apple){
  var x, y, row, colume;
  for (row=0; row<apple.length; row++){
    for (colume=0; colume<apple[row].length; colume++){
      if (apple[row][colume] == "B"){
        return [row, colume];
      }
    }
  }
  return null;
}

var apple=[
["B","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"]
];

sc(apple);


//========================================
// Credit Card Issuer
function getIssuer(number) {
  if (!number) {
    return "Unknown";
  }
  var numStr = number.toString();
  if ((numStr.length == 13 || numStr.length == 16) && numStr.charAt(0) == "4"){
    return "VISA"
  }else if (numStr.length == 15 && (numStr.slice(0,2) == "34" || numStr.slice(0,2) == "37")){
    return "AMEX";
  }else if (numStr.length == 16){
    if (numStr.slice(0, 4) == "6011"){
      return "Discover";
    }else if(numStr.slice(0, 2) == "51" || numStr.slice(0, 2) == "52" ||
            numStr.slice(0, 2) == "53" || numStr.slice(0, 2) == "54"
            || numStr.slice(0, 2) == "55"){
      return "Mastercard";
    }
  }
  return "Unknown";
}
getIssuer(5105105105105106);
getIssuer(5105105105105100);
getIssuer(6011111111111117);
getIssuer(378282246310005);
getIssuer(5111111111111111);
getIssuer(9111111111111111);
getIssuer(4111111111111111);


//========================================
//Understanding Closure - Basics
function buildFun(n){
  var res = [];
  function packFunc(num){
    return function(){
      return num;
    };
  }
  for (var i = 0; i< n; i++){
    res.push(packFunc(i));
  }
}

buildFun(5);


//========================================
//Math Object Madness

Math.prototype.ceil = function (x) {
  return parseInt(x);
};
Math.prototype.floor = function(x){
  return parseInt(x) + 1;
};
Math.prototype.round = function(x){
  return (x-parseInt(x)) > (x-parseInt(x)+1) ? parseInt(x)+1 : parseInt(x);
};
Math.prototype.abs = function(x){
  return x >= 0 ? x : -x;
};
Math.prototype.max = function(args[]){
  return args.reduce(function(max, cur){
    return max > cur ? max : cur;
  });
};
Math.prototype.min = function(args[]){
  //var args = Array.prototype.slice.call(arguments);
  return args.reduce(function(min, cur){
    return min < cur ? min : cur;
  });
};
Math.prototype.pow(x, y) = function(x,y){
  var result = 1;
  for (var i=1; i<=y; i++){
    result *= x;
  }
  return result;
};



//========================================
// Algorithmic predicament - Bug Fixing #9

function highestAge2(group1, group2){
  var highestName,
  maxAge = 0,
  maxAgeName = "",
  newGroup = {},
  combGroup = group1.concat(group2);
  combGroup.sort(function(objA, objB){
    if (objA.name > objB.name){
      return 1;
    }else if (objA.name < objB.name){
      return -1;
    }else {
      return 0;
    }
  });
  //console.log(JSON.stringify(combGroup));

  for(var i=0;i<combGroup.length;i++){
    //console.log(combGroup[i].name);
    if(!newGroup[combGroup[i].name])
      newGroup[combGroup[i].name] = combGroup[i].age;
    else
      newGroup[combGroup[i].name] += combGroup[i].age;
  }
  //console.log(JSON.stringify(newGroup));

  for (name in newGroup){
    if (maxAge < newGroup[name]){
      maxAge = newGroup[name];
      maxAgeName = name;
    }
  }
  highestName = maxAgeName;
  return maxAgeName;

}

highestAge([{name:'kay',age:1},{name:'john',age:13},{name:'kay',age:76}],
           [{name:'john',age:1},{name:'alice',age:77}]);


function highestAge(group1, group2){
  var highestName = {name:'',age:-1},
  newGroup = [],
  combGroup = group1.concat(group2);

  for(var i=0;i<combGroup.length;i++) {
    if(indexOfProp(combGroup[i].name, newGroup) < 0){
      newGroup.push(combGroup[i])
    }
    else {
      newGroup[indexOfProp(combGroup[i].name, newGroup)].age += combGroup[i].age;
    }
  }
  newGroup = newGroup.sort((p,c) => p.name > c.name ? 1 : p.name < c.name ? -1 : 0)

  highestName = newGroup[0];
  for(var i=1;i<newGroup.length;i++){
    if(newGroup[i].age > highestName.age){
      highestName = newGroup[i];
    }
  }

  return highestName.name;
}

function indexOfProp(value, arrObj){
  if (!arrObj) {
    return -1;
  }
  for(var i=0;i<arrObj.length;i++){
    if(arrObj[i].name == value){
      return i;
    }
  }
  return -1;
}

highestAge([{name:'kay',age:1},{name:'john',age:130},{name:'kay',age:76}],
           [{name:'john',age:1},{name:'alice',age:76}]);

highestAge([{name:'kay',age:1},{name:'john',age:13},{name:'kay',age:76}],
           [{name:'john',age:1},{name:'alice',age:77}]);

highestAge([{name:'kay',age:1},{name:'john',age:13},{name:'kay',age:76}],
           [{name:'john',age:1},{name:'alice',age:76}]);

//========================================
//Reducing Problem - Bug Fixing #8

function calculateTotal(team1, team2) {
  /*
  if (!team1){
    return false;
  }
  if (!team2){
    return true;
  }
  */
  function reduceTotal(arr){
    return arr.reduce(function(total, cur){
      return total + cur;
    }, 0);
  }
  return reduceTotal(team1) > reduceTotal(team2);
}

function calculateTotal1(team1, team2){
  var t1s = team1.reduce((t, c) => t + c, 0);
  var t2s = team2.reduct((t, c) => t + c, 0);
}
function calculateTotal2(team1, team2){
  var f = ((t, c) => t + c);
  return team1.reduce(f, 0) > team2.reduce(f, 0);
}
function calculateTotal3(team1, team2){
  const sum = (a) => a.reduct((a, b) => a + b, 0);
  calculateTotal = (team1, team2) => sum(team1) > sum(team2);
}

calculateTotal([1,2,2],[1,0,0]);

//========================================
//Class conumdrum - Bug Fixing #7
var List = function(type){
    this.type = type;
    this.items = [];
    this.count = 0;
  }

List.prototype.add = function(item){
    if(typeof item != this.type){
      return "This item is not of type: " + this.type;
    }
    this.items.push(item);
    this.count ++;
    return this;
}
List.prototype.count = function(){
  return this.count;
}

 var myList = new List('string');
 myList.add('Hello').count;
 myList.add(5);
 myList.add(' ').add('World!').count;

//========================================
//Failed Filter - Bug Fixing #3
function filterWords(phrase){
  var replaceWord;
  if (phrase.search(/([a-zA-Z]+ish)/) > 0){
    replaceWord = "awesomeish";
  }else {
    replaceWord = "awesome";
  }
  return phrase.replace(/\b(bad(ish)?|mean(ish)?|ugly(ish)?|horrible(ish)?|hideous(ish)?)\b/gi, replaceWord);
  //return phrase.replace(/(\bbad\b|\bmean(ish)?\b|\bugly\b|\bhorrible\b|\bhideous\b)/gi,'awesome');

}

filterWords("You're Bad! timmy!")
//========================================



//========================================


//========================================



//========================================




//========================================



//========================================



//========================================



//========================================



//========================================





