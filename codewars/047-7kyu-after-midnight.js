/*
Write a function that takes a negative or positive integer, which represents the number of minutes before (-) or after (+) Sunday midnight, and returns the current day of the week and the current time in 24hr format ('hh:mm') as a string.

dayAndTime(0)       should return 'Sunday 00:00'
dayAndTime(-3)      should return 'Saturday 23:57'
dayAndTime(45)      should return 'Sunday 00:45'
dayAndTime(759)     should return 'Sunday 12:39'
dayAndTime(1236)    should return 'Sunday 20:36'
dayAndTime(1447)    should return 'Monday 00:07'
dayAndTime(7832)    should return 'Friday 10:32'
dayAndTime(18876)   should return 'Saturday 02:36'
dayAndTime(259180)  should return 'Thursday 23:40' 
dayAndTime(-349000) should return 'Tuesday 15:20'
*/

function dayAndTime(n) {
  while (n<0) n += 10080;
  while (n>10080) n %= 10080;
  var day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][Math.floor(n/60/24)];
  var time = new Date(1000 * 60 * n).toTimeString().substring(0, 5); 
  return `${day} ${time}`;
}

console.log(Object.keys(window));