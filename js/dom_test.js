const ENABLE_CONTROLS = true

let myDiv = document.getElementById("placeholder");

if (ENABLE_CONTROLS) {
    myDiv.innerHTML = ' <section class="fixed-bottom py-3 current-track"> \
    <div class="current-track__actions"> \
    \
        <a class="ion-ios-skipbackward"></a>\
    \
        <a class="ion-ios-play play"></a>\
    \
        <a class="ion-ios-skipforward"></a>\
    \
    </div>\
    \
    <div class="current-track__progress">\
    \
        <div class="current-track__progress__start">0:01</div>\
    \
        <div class="current-track__progress__bar">\
    \
            <div id="song-progress"></div>\
    \
        </div>\
    \
        <div class="current-track__progress__finish">3:07</div>\
    \
    </div>\
    \
    <div class="current-track__options">\
    \
        <a href="#" class="lyrics">Lyrics</a>\
    \
        <span class="controls">\
    \
            <a href="#" class="control">\
                <i class="ion-navicon"></i>\
            </a>\
    \
            <a href="#" class="control">\
                <i class="ion-shuffle"></i>\
            </a>\
    \
            <a href="#" class="control">\
                <i class="fa fa-refresh"></i>\
            </a>\
    \
            <a href="#" class="control devices">\
                <i class="ion-iphone"></i>\
                <span>Devices Available</span>\
            </a>\
    \
            <a href="#" class="control volume">\
    \
                <i class="ion-volume-high"></i>\
    \
                <div id="song-volume"></div>\
    \
            </a>\
    \
        </span>\
    \
    </div>\
    </section>'
}

