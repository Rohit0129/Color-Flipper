const colors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "#f15025",
  "#345995",
  "#03cea4",
  "#eac435",
  "#272838",
  "#f3de8a",
  "#0c090d",
  "#ffa07a",
  "#e9967a",
  "#fa8072",
  "#f08080",
  "#800000 ",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  //   console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
