// after midnight:
// split string by ':'
// set array[0] to hours
// set array[1] to minutes
// find minutes with array[1] * 60, fixed to 2 decimal points
// append minutes to hours
// find delta minutes with hours * 60, using Math floor

function afterMidnight(time) {
  let timeArray = time.split(':');
  let hours = Number(timeArray[0]);
  let minutes = Number(timeArray[1]);

  minutes = Number((minutes / 60).toFixed(2));
  hours += minutes;

  let deltaMinutes = Math.floor(hours * 60);

  if (deltaMinutes === 1440) {
    return 0;
  } else {
    return deltaMinutes;
  }

  return deltaMinutes;
}

function beforeMidnight(time) {
  let timeArray = time.split(':');
  let hours = Number(timeArray[0]);
  let minutes = Number(timeArray[1]);

  minutes = Number((minutes / 60).toFixed(2));
  hours += minutes;

  let deltaMinutes = Math.floor((hours * 60) - 1440);

  if (deltaMinutes < 0) {
    deltaMinutes = -deltaMinutes;
  }

  if (deltaMinutes === 1440) {
    return 0;
  } else {
    return deltaMinutes;
  }
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
