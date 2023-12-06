let rgb = 0;

// whiten the background gradually using requestAnimationFrame
let whitenBackground = function() {
    if (rgb <= 255) {
        rgb++;
        document.body.style.backgroundColor = `rgb(${rgb}, ${rgb}, ${rgb})`;
    }
    requestAnimationFrame(whitenBackground);
};

// call requestAnimationFrame for the first time
requestAnimationFrame(whitenBackground);
