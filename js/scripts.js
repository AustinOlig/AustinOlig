//file: scripts.js!!!!
var music = document.getElementById("bg-music");
var mute = document.getElementById("mute-button");
music.volume = 0.1;

window.onload = function() {   
  music.muted = false;
  music.play();
}
  
function isPlaying(music) { return !music.paused; }

function toggleMusic() {
  if (isPlaying(music)) {
      music.pause();
      mute.innerHTML = "<span class=\"icon\"><i class=\"fas fa-volume-off\"></i></span>";
  } else {      
      music.play();
      mute.innerHTML = "<span class=\"icon\"><i class=\"fas fa-volume-up\"></i></span>";
  }
}

/* CSCI 3230U - CSS Frameworks */
$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
});
