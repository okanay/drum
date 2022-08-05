var buttons = document.querySelectorAll("button");


var audio = new Audio("");
function soundSwitch(checkValue){

  selecting(checkValue);
  switch (checkValue)
  {
    case "w":
    audio = new Audio("sounds/tom-1.mp3");
    break;
    case "a":
    audio = new Audio("sounds/tom-2.mp3");
    break;
    case "s":
    audio = new Audio("sounds/tom-3.mp3");
    break;
    case "d":
    audio = new Audio("sounds/tom-4.mp3");
    break;
    case "j":
    audio = new Audio("sounds/snare.mp3");
    break;
    case "k":
    audio = new Audio("sounds/kick-bass.mp3");
    break;
    case "l":
    audio = new Audio("sounds/crash.mp3");

  }

    audio.play();
}

for(var i = 0; i < buttons.length; i++){

buttons[i].addEventListener("click", function () {

  soundSwitch(this.innerHTML);

});
}

document.addEventListener("keydown", function(event) {

  soundSwitch(event.key);

});


function selecting(key){

// buttons.forEach(button => button.classList.remove("pressed"));


  var button = document.querySelector("." + key);

  if(button !== null){
      button.classList.add("pressed");

      setTimeout(function() {
        button.classList.remove("pressed")
      }, 100);
  }

}

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;

  this.fullName = function() {return this.firstName + " " + this.lastName;}
}
