const scrollImages = {
    1: '/images/spaceFrame1.png',
    2 : '/images/spaceFrame2.png',
    3 : '/images/spaceFrame3.png',
    4 : '/images/spaceFrame4.png',
    5 : '/images/spaceFrame5.png',
    6 : '/images/spaceFrame6.png',
    7 : '/images/spaceFrame7.png',
    8 : '/images/spaceFrame8.png',
}

// Global variable to control the scrolling behavior
const step = 30; // For each 30px, change an image
function trackScrollPosition() {
    const y = window.scrollY;
    const label = Math.min(Math.floor(y/step) + 1, 8);
    const imageToUse = scrollImages[label];
    // Change the background image
    document.getElementById("spaceimage").src=imageToUse;
}

$(document).ready(()=>{
    $(window).scroll(()=>{
        trackScrollPosition();
    })
})
