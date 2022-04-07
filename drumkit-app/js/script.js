function playList(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const keys = document.querySelector(`.keys[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    keys.classList.add("playing");
}

function removeTransition(e){
    if(e.propertyName !== "transform") return;
    this.classList.remove("playing");
}

const sound = document.querySelectorAll(".keys");
sound.forEach(keys => keys.addEventListener("transitionend", removeTransition));













window.addEventListener("keydown", playList);