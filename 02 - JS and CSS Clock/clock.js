// const secondHand = document.querySelector(".second-hand");
// const minHand = document.querySelector(".min-hand");
// const hourHand = document.querySelector(".hour-hand");

// function setDate() {
//   const now = new Date();
//   const seconds = now.getSeconds();
//   console.log(seconds);
//   const mins = now.getMinutes();
//   //   console.log(mins);
//   const hours = now.getHours();
//   //   console.log(hours);

//   const secondsDegree = seconds * (360 / 60) + 90;
//   const minutesDegree = mins * (360 / 60) + 90;
//   const hoursDegree = hours * (360 / 12) + 90;
//   secondHand.style.transform = `rotate(${secondsDegree}deg)`;
//   minHand.style.transform = `rotate (${minutesDegree}deg)`;
//   hourHand.style.transform = `rotate (${hoursDegree}deg)`;
// }

// setInterval(setDate, 1000);

const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hours = now.getHours();

  console.log("hours : " + hours);
  console.log("mins : " + mins);
  console.log("seconds : " + seconds);

  const secondsDegree = seconds * (360 / 60) + 90;
  const minsDegree = mins * (360 / 60) + 90;
  const hoursDegree = hours * (360 / 12) + 90;

  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  minsHand.style.transform = `rotate(${minsDegree}deg)`;
  hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
}
setInterval(setDate, 1000);
