//codeWar 6 kyu

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
     console.log("char: " + char);
     console.log(groupOpeners.indexOf(char));
     if (groupOpeners.indexOf(char) > 0){
       groupStack.push(char);
       console.log("stack:" + groupStack);
     }else if (groupClosers.indexOf(char) > 0){
       if (groupStack.length){
         latestBracket = groupStack.pop();
         console.log("latestBracket: " + latestBracket);
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

//groupCheck("()");
groupCheck("{(})");
//groupCheck("[])");



