let rgb = 255;

// use setInterval() to reduce rgb by 1 after every half a second, until background is all dark
let darkenBackground = setInterval(() => {
    if (rgb > 0) {
        rgb--;
        document.body.style.backgroundColor = `rgb(${rgb}, ${rgb}, ${rgb})`;
    } else {
        clearInterval(darkenBackground); // clears the interval in the end
    }
    }, 500
);
