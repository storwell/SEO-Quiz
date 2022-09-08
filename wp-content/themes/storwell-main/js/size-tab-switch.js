/*
* Tab switch for size - video/  illustration/image
* */

let imageVideo;

let changeSwitch = function (imageVideoID, switchID) {
    let allSwitches = imageVideo[imageVideoID].getElementsByClassName('switch');
    let displayContent = imageVideo[imageVideoID].getElementsByClassName('displayContent');
    for (let i = 0; i < allSwitches.length; i++) {
        allSwitches[i].classList.remove("switchSelected");
        displayContent[i].classList.remove("displayContentSelected");
    }
    imageVideo[imageVideoID].getElementsByClassName('switch')[switchID].classList.add("switchSelected");
    imageVideo[imageVideoID].getElementsByClassName('displayContent')[switchID].classList.add("displayContentSelected");

    // set position for sliders after tab change
    jQuery('.photosSlider').slick('setPosition');
}

window.addEventListener('load', function() {
    imageVideo = document.getElementsByClassName("imageVideo");
    for (let i = 0; i < imageVideo.length; i++) {
        let switches =  imageVideo[i].getElementsByClassName('switch');
        let displayContent =  imageVideo[i].getElementsByClassName('displayContent');
        for (let j = 0; j < switches.length; j++) {
            switches[j].addEventListener('click', function(){
                changeSwitch(i,j);
            }, false);
        }
    }
}, false);



