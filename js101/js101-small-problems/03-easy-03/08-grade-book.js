function getGrade(score1, score2, score3) {
  let avgScore = (score1 + score2 + score3) / 3;

  if (avgScore < 60) {
    return 'F';
  } else if (avgScore < 70) {
    return 'D';
  } else if (avgScore < 80) {
    return 'C';
  } else if (avgScore < 90) {
    return 'B';
  } else if (avgScore <= 100) {
    return 'A';
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
