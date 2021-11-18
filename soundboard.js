window.onload = function() {
    const chalkboard = document.querySelector(".chalkboard");
    const neon = document.querySelector(".neon");
    const ocean = document.querySelector(".ocean");

    function playSound(sound) {
        var audio = new Audio(sound + ".wav");
        audio.play();
    }

    // pass in variable to play sound based on the query selector object
    chalkboard.addEventListener("click", () => { playSound("chalkboard"); });
    neon.addEventListener("click", () => { playSound("neon_light"); });
    ocean.addEventListener("click", () => { playSound("ocean3"); });

    chalkboard.addEventListener("mouseenter", () => { playSound("chalkboard"); });
    neon.addEventListener("mouseenter", () => { playSound("neon_light"); });
    ocean.addEventListener("mouseenter", () => { playSound("ocean3"); });
};