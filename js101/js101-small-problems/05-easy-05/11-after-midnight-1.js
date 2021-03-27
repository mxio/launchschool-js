function timeOfDay(min) {
  const MIDNIGHT = 0;
  const BEFORE = 24;
  const MINUTES = 60;

  if (min < 0) {
    return calculateBeforeMidnight(min, BEFORE, MINUTES);
  } else {
    return calculateAfterMidnight(min, MIDNIGHT, MINUTES);
  }
}

function calculateBeforeMidnight(min, beforeConst, minutesConst) {
  let hoursFloat = (((beforeConst * minutesConst) + min) / minutesConst).toFixed(2);
  let hours = String(Number.parseInt(hoursFloat));
  let minutes = String(Math.ceil((hoursFloat - Number.parseInt(hoursFloat)) * minutesConst));

  if (-Number(hours) > beforeConst) {
    hours = String(Number.parseInt(Number(-hours) / beforeConst));
  }

  if (Number(minutes) < 0) {
    minutes = String(Number(minutes) + minutesConst);
  }

  if (hours.length < 2) {
    hours = '0' + hours;
  }

  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }

  return `${hours}:${minutes}`;
}

function calculateAfterMidnight(min, midnightConst, minutesConst) {
  let hoursFloat = (((midnightConst * minutesConst) + min) / minutesConst).toFixed(2);
  let hours = String(Number.parseInt(hoursFloat));
  let minutes = String(Math.ceil((hoursFloat - Number.parseInt(hoursFloat)) * minutesConst));

  if (Number(hours) > 24) {
    hours = String(Number.parseInt(Number(hours) / 24));
  }

  if (Number(minutes) > 60) {
    minutes = String(Number(minutes) / 60);
  }

  if (hours.length < 2) {
    hours = '0' + hours;
  }

  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }

  return `${hours}:${minutes}`;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
