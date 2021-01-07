var name1 = prompt("Enter Player1 name: ");
var name2 = prompt("Enter Player2 name: ");

document.querySelectorAll("p")[0].innerHTML = name1;
document.querySelectorAll("p")[1].innerHTML = name2;

var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage; // images/dice1.png -> images/dice2.png

var image1 = document.querySelectorAll("img")[0]; // selectorAll is plural thus [0] is used to get first image element

image1.setAttribute("src" , randomImageSource);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/"+ randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];//this is secong image element
image2.setAttribute("src" , randomImageSource2);//set attribute requires two parameters first one is which we have to change and the second one is what we want to change to

if(randomNumber1 === randomNumber2)
{
  document.querySelector("h1").innerHTML =  "Draw!!";
}
else if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = name1 + " Wins";
}
else if(randomNumber2 > randomNumber1)
{
  document.querySelector("h1").innerHTML = name2 + " Wins";
}




// Note -> attributes are in orange colour in HTML . for ex class id href etc
