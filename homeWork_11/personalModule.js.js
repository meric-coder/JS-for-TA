const CurrentDate = new Date();
module.exports.date = CurrentDate;

module.exports.showMessage = function(name) {
  const hour = CurrentDate.getHours();

  switch(true)
 {
    case hour >= 5 && hour < 11:
   return "Good Morning" + name;
   case hour >= 11 && hour <= 17:
      return "Good day" + name;
      case hour >=17 && hour < 23:
         return "Good evening" + name;
         case hour >=23 || hour < 5:
            return "Good night" + name;

 }
}

