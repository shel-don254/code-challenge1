//speed Detector algorithm
function checkSpeed(speed) {
  speed;
  if (speed <= 70) {
    return "okay";
  } else if (speed >= 70) {
    let diffrence = speed - 70;
    let dimeritPoints = Math.floor(diggrence / 5);
    let total = `${demeritPoints} Demerit Point`;
    if (demeritsPoints > 0 && demeritPoints <= 12) {
      judgement = "warning issued";
    } else if (demeritsPoints > 12) {
      judgement = "lincense suspended";
    }
    console.log(total);
    return judgement;
  }
}
//prompts user to input speed using prompt-sync extension
const prompt = require("prompt-sync")();
const speed = prompt("Enter car speed:");
//Returns vehicle speed, Demerit points(if any),and a judgment
console.log(`${Number(speed)} km/s`);
console.log(speedDetector(Number(speed)));
