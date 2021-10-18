import Player from './player.js';

let myPlayer = new Player();

let myButtonsPlay = document.querySelectorAll("a.ion-ios-play.play");

myButtonsPlay[0].addEventListener('click', function (event) {
    myPlayer.play()
});



