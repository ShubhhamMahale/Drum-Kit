var number = document.querySelectorAll(".drum").length
for (var i = 0; i < number; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleAudio);

  function handleAudio() {
    var innerHTML = this.innerHTML;
    sound(innerHTML);
    buttonAnimation(innerHTML);
  }
}


document.addEventListener("keypress", function(event) {
  sound(event.key);
  buttonAnimation(event.key);
  // alert(event.key);
});



function sound(x) {
  switch (x) {
    case ("w"):
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;


    case ("a"):
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case ("s"):
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case ("d"):
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case ("j"):
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case ("k"):
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case ("l"):
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
        break;

        default: console.log(key);

      }
}
  function buttonAnimation(y) {

    var buttonFlash = document.querySelector("." + y);

    buttonFlash.classList.add("pressed");

    setTimeout(function() {
      buttonFlash.classList.remove("pressed");
    }, 100);
  }
