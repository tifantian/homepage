var elementLight = document.querySelector(".elementLight"); 
elementLight.addEventListener("click", function() {
    elementLight.classList.add('spotlight');
    document.body.style.cursor = "none";
    featureLight();
});

function featureLight() {
    console.log("РАБОТАЕТ");
    const spotlight = document.querySelector(".spotlight");
    let spotlightSize = "transparent 100px, rgba(0, 0, 0, 0.85) 160px)";

    window.addEventListener("mousemove", e => {
      requestAnimationFrame(() => updateSpotlight(e));
    });

    window.addEventListener("mousedown", e => {
      spotlightSize = "transparent 80px, rgba(0, 0, 0, 0.95) 110px)";
      requestAnimationFrame(() => updateSpotlight(e));
    });

    window.addEventListener("mouseup", e => {
      spotlightSize = "transparent 100px, rgba(0, 0, 0, 0.85) 160px)";
      requestAnimationFrame(() => updateSpotlight(e));
    });
    function updateSpotlight(e) {
        const xPos = e.pageX / window.innerWidth * 100;
        const yPos = e.pageY / window.innerHeight * 100;
        spotlight.style.backgroundImage = `radial-gradient(circle at ${xPos}% ${yPos}%, ${spotlightSize}`;
      } 
  
}