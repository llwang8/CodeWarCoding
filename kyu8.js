//codeWar 8kyu

//

function digitize(n) {
  //code here
  var arr = n.toString().split("").reverse();
  var newArr = [], i;
  for (i=0; i<arr.length; i++){
    newArr.push(parseInt(arr[i]));
  }
  return newArr;
}

function digitize2(n) {
  //code here
  return n.toString().split("").reverse().map(function(i){
        return parseInt;
  });

}

digitize(35231);






