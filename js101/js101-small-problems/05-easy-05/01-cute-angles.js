// Given number
// Remove floating point and get integer
// Set degrees to integer
// Get floating point
// Set minutes = floating point * 60 with no floating point
// Set minutesFloatingPoint = minutes * 60 and get floating point only
// Set seconds =  minutesFloatingPoint * 60
// return string of degrees, minutes and seconds

function dms(num) {
  let degrees = Math.floor(num).toFixed(0);
  let floatingPoint = num % 1;
  let minutes = String(Math.floor(floatingPoint * 60));
  let minutesFloatingPoint = (num % 1) * 60;
  let seconds = String(Math.floor((minutesFloatingPoint % 1) * 60).toFixed(0));

  return `${degrees}°${leadingZeroes(minutes)}'${leadingZeroes(seconds)}"`;
}

function leadingZeroes(time) {
  if (time.length === 1) {
    return '0' + time;
  } else if (time.length > 1) {
    return time;
  }
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

console.log(dms(-1));   // -1°00'00"
console.log(dms(400));  // 400°00'00"
console.log(dms(-40));  // -40°00'00"
//console.log(dms(-420)); // 420°00'00"
