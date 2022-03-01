var vid = document.getElementById("myVideo");
var audio = document.getElementById("my_audio");
var audio_end = document.getElementById("my_audio1");
var game_screen = document.getElementById("game_screen");

var i = 1.5;
var j = 1;
icon1 = document.getElementById("icon1");
icon2 = document.getElementById("icon2");
icon3 = document.getElementById("icon3");

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

game_screen.addEventListener("click", (e) => {
  audio.play();
  if (j == 2) {
    icon1.style = "display:none";
  } else if (j == 3) {
    icon2.style = "display:none";
  } else if (j == 4) {
    icon3.style = "display:none";
    openForm();
    audio_end.play();
  }

  vid.play();
});

window.addEventListener("load", (e) => {
  vid.play();
  icon1.style = "display:none";
  vid.addEventListener("timeupdate", function () {
    if (this.currentTime >= i) {
      if (j == 1) {
        icon1.style = "display:block";
      } else if (j == 2) {
        icon2.style = "display:block";
      } else if (j == 3) {
        icon3.style = "display:block";
      }

      vid.pause();
      if (j == 1) {
        i = i + 3.0;
      } else if (j == 2) {
        i = i + 3.5;
      } else {
        i = i + 3.0;
      }

      j++;
    }
  });
});
