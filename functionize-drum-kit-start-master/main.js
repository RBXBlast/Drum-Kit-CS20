// DRUM KIT (Modified Wes Bos JS30 Challenge)

// Listen for key events on the page
document.addEventListener("keydown", playSound);
// Add transition end listeners
document.getElementById("A").addEventListener("transitionend", removePlaying);
document.getElementById("S").addEventListener("transitionend", removePlaying);
document.getElementById("D").addEventListener("transitionend", removePlaying);
document.getElementById("F").addEventListener("transitionend", removePlaying);
document.getElementById("G").addEventListener("transitionend", removePlaying);
document.getElementById("H").addEventListener("transitionend", removePlaying);
document.getElementById("J").addEventListener("transitionend", removePlaying);
document.getElementById("K").addEventListener("transitionend", removePlaying);
document.getElementById("L").addEventListener("transitionend", removePlaying);

// Transition End FUnction
function removePlaying(event) {
  event.target.classList.remove("playing");
}
// Event Function
function playSound(event) {
  console.log(event.keyCode);

  if (event.keyCode == 65) {
    playAudio("A", "clap");
  } else if (event.keyCode == 83) {
    playAudio("S", "hihat");
  } else if (event.keyCode == 68) {
    playAudio("D", "kick");
  } else if (event.keyCode == 70) {
    playAudio("F", "openhat");
  } else if (event.keyCode == 71) {
    playAudio("G", "boom");
  } else if (event.keyCode == 72) {
    playAudio("H", "ride");
  } else if (event.keyCode == 74) {
    playAudio("J", "snare");
  } else if (event.keyCode == 75) {
    playAudio("K", "tom");
  } else if (event.keyCode == 76) {
    playAudio("L", "tink");
  }
}

function playAudio(letter, action) {
  let audio = document.getElementById(action);
  audio.currentTime = 0;
  audio.play();
  document.getElementById(letter).classList.add("playing");
}
