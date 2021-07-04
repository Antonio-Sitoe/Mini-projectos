// get all keys
const keys = document.querySelectorAll(".key");

// play notes
function playNote(event) {
  let audioKeyCode = getKeyCode(event);

  // keybord key pressed
  const key = document.querySelector(`.key[data-key = "${audioKeyCode}"]`);

  // if key exists
  const isKeyExist = key;
  if (!isKeyExist) return;

  addPlayClass(key);
  // play audio
  playAudio(audioKeyCode);
}

function addPlayClass(key) {
  key.classList.add("playing");
}

function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key = "${audioKeyCode}"]`);

  audio.currentTime = 0;
  audio.play();
}

function getKeyCode(event) {
  // get keycode
  let keyCode;

  const isKeybord = event.type === "keydown";

  if (isKeybord) {
    keyCode = event.keyCode;
  } else {
    keyCode = event.target.dataset.key;
  }
  return keyCode;
}
function removePlayingClass(event) {
  event.target.classList.remove("playing");
}

// click no mouse
keys.forEach((key) => {
  key.addEventListener("click", playNote);
  key.addEventListener("transitionend", removePlayingClass);
});

// clicar no keybord
// o event - na hora que executar o keydown.
window.addEventListener("keydown", playNote);
