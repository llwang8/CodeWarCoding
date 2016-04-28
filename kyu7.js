//codeWar 7 kyu

//Vasya and Book

function bookIsDay(pages,days){
  // ...
  console.log("pages: " + pages);
  console.log("days: " + days);
  var sumOfPages = 0;
  for (var i=0; i<days.length; i++){
    if (pages - sumOfPages <= days[i]){
      console.log("i: " + i);
      return (i+1);
    }
    sumOfPages += days[i];
  }
  console.log(pages-sumOfPages);
  if (sumOfPages < pages){
    bookIsDay((pages-sumOfPages), days);
  }
}

var days = [10, 10, 10, 10, 10, 10, 10], pages = 100;
bookIsDay(pages, days);