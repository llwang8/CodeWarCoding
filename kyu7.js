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
    bookIsDay((pages-sumOfPages), days);
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
//kata Impossible I - The Impossible Lottery

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



//========================================




//========================================



//========================================




//========================================




//========================================



//========================================








