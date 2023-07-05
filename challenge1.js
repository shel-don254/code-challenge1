function gradeMarks(marks) {
  let grade;
  //checks if input is within the range
  if (marks >= 0 && marks <= 100) {
    //places the marks input into grede category returns the assigned grade
    if (marks > 79 && marks <= 100) {
      grade = "A";
    } else if (marks >= 60 && marks <= 79) {
      grade = "B";
    } else if (marks >= 50 && marks <= 59) {
      grade = "C";
    } else if (marks >= 40 && marks <= 49) {
      grade = "D";
    } else if (marks >= 0 && marks < 40) {
      grade = "E";
    } else {
      return "invalid input!";
    }
    return `Grade:${grade}`;
  }
}

//prompts user to input using prompt-sync extension because it is the stack required
const prompt = require("prompt-sync")();
const marks = prompt("Enter student marks");

console.log(Number(marks));
console.log(gradeMarks(Number(marks)));
