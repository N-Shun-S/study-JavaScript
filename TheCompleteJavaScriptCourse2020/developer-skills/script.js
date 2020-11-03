'use strict';
//console.log('ts');

/*
Developer Skills & Editor Setup
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. 
Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."
Your tasks:
1. Create a function'print Forecast ' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data2:[12,5,-5,0,4]
GOOD LUCK 😀
*/

//細分化して解決していく（下記参照）

//Understanding the problem
//- Array transformed to string, separated by ...
//- What is the X days? X is index + 1

//Breaking up into sub-problems
//- Transform array into string
//- Transform each element to string with oC
//- Strings needs to contain day (index + 1)
//- Add ... between elements and start and end of string

const arrData1 = [17, 21, 23];
const arrData2 = [12, 5, -5, 0, 4];

const printForecast = arr => {
  let text = '';
  arr.forEach(function (value, index) {
    text += `${arr[index]}oC in ${index + 1} days ... `;
  });
  console.log(' ... ' + text);
};
printForecast(arrData1);
printForecast(arrData2);
