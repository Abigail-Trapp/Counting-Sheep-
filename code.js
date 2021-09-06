var countSheep = function (num){ //function is countSheep argument is num
    //your code here
    let allSheep = "" // placeholder for result
  for (var i = 1; i <= num; i++){ // loop through all numbers that end with entry for num
    allSheep += (`${i} sheep...`.toString()) // placholder equals and increments result each time 
  }
    return allSheep // outputs result instead of undefined 
  }

// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
