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





//========================================





//========================================





//========================================





//========================================





//========================================

