/* eslint-disable */

import "./style.css";
const card = document.querySelector(".card");
const number = document.querySelector(".number");
let newCard = document.getElementById("btn");
window.onload = () => {
  //updateCard();
  newCard.addEventListener("click", updateCard);
  //document.querySelector(".card").className = "card " + generateRandomSuit();
  //document.querySelector(".number").innerHTML = generateRandomValue();
};

let generateRandomSuit = () => {
  let suits = ["hearts", "diamonds", "clubs", "spades"];
  let indexSuit = Math.floor(Math.random() * suits.length);
  return suits[indexSuit];
};
console.log(generateRandomSuit());

let generateRandomValue = () => {
  let values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexValues = Math.floor(Math.random() * values.length);
  return values[indexValues];
};
console.log(generateRandomValue());

function updateCard() {
  card.className = "card " + generateRandomSuit();
  number.innerHTML = generateRandomValue();
}
