var onScrollHandler = () => {
    var newImageUrl = yourImageElement.src;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 100) {
        newImageUrl = "spaceFrame1.png"
    }
    if (scrollTop > 200) {
        newImageUrl = "spaceFrame2.png"
    }
    if (scrollTop > 300) {
        newImageUrl = "spaceFrame3.png"
    }
    if (scrollTop > 400) {
        newImageUrl = "spaceFrame4.png"
    }
    if (scrollTop > 500) {
        newImageUrl = "spaceFrame5.png"
    }
    if (scrollTop > 600) {
        newImageUrl = "spaceFrame6.png"
    }
    if (scrollTop > 700) {
        newImageUrl = "spaceFrame7.png"
    }
    if (scrollTop > 800) {
        newImageUrl = "spaceFrame8.png"
    }
    yourImageElement.src = newImageUrl;
};
object.addEventListener ("scroll", onScrollHandler);
