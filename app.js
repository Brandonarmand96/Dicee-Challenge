var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "images/dice" + randomNumber1 + ".png";
var randomImage2 = "images/dice" + randomNumber2 + ".png";
var diceImage1 = document.querySelectorAll("img")[0];
var diceImage2 = document.querySelectorAll("img")[1];
diceImage1.setAttribute("src", randomImage1);
diceImage2.setAttribute("src", randomImage2);
if (randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = "Player 1 Wins"
}else if (randomNumber2 > randomNumber1){
    document.querySelector('h1').innerHTML = "Player 2 Wins"
}else {
    document.querySelector('h1').innerHTML = "Draw"
}