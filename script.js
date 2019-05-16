// javaScript code for extra-feature
let scrollHeight = Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,
	document.body.offsetHeight, document.documentElement.offsetHeight,
	document.body.clientHeight, document.documentElement.clientHeight
);

const cach = {
    pageX:0,
    pageY:0,
    yPosition:0,
    offset:0
}


let extra = document.getElementsByClassName('extra-feature')[0];
let position = extra.getBoundingClientRect();
let element = document.getElementsByClassName('child-spotlight')[0];
let posTop = position.top + 50,
    posLeft = position.left + 14;
element.style.cssText = `width: ${position.width}px; height: ${position.height}px; position: absolute; top: ${posTop}px; left: ${posLeft}px`;


let isFirst = true;
let speed = 20;
const spotlight = document.querySelector(".spotlight");
spotlight.style.height = 100 + scrollHeight + 'px';
let spotlightSize = "transparent 0px, rgba(0, 0, 0, 1) 0px)";

window.addEventListener("mousemove", e => {
    requestAnimationFrame(() => updateSpotlight(e));
});

window.addEventListener("scroll", ()=>{
    cach.pageY = cach.yPosition + window.pageYOffset;
    cach.offset =  window.pageYOffset;
    requestAnimationFrame(() => updateSpotlight(cach,"scroll"));
})

function updateSpotlight(e,event) {
    const xPos = e.pageX / window.innerWidth * 100;
    const yPos = e.pageY  / scrollHeight  * 100 ;
    if(event!="scroll"){
    cach.pageX = e.pageX;
    cach.pageY = e.pageY;
    cach.yPosition = e.pageY - cach.offset;
    }
    spotlight.style.backgroundImage = `radial-gradient(circle at ${xPos}% ${yPos}%, ${spotlightSize}`;
}
element.addEventListener('click', function() {
    sunflower.style.animationName = 'wind-power';
    spotlight.style.animationName = 'wind-power-racing';
    document.getElementById('extra-feature-bottom').innerHTML = 'А лучше бы боялся :)';
    setTimeout(function() {
        spotlight.style.display = 'none';   
        document.body.style.cursor = '';
        childSpotLight.style.display = 'none';
        spotlightSize = "transparent 0px, rgba(0, 0, 0, 1) 0px)";
    }, 1980);
});

childSpotLight = document.getElementsByClassName('child-spotlight')[0];
function extraFeature() {
    spotlight.style.display = 'block';
    spotlight.style.animationName = 'wind-power-racing-on';
    document.body.style.cursor = 'none';
    setTimeout(function() {
        spotlightSize = "transparent 80px, rgba(0, 0, 0, 1) 110px)";
        sunflower.style.animationName = 'none';
        childSpotLight.style.display = 'block';
        document.getElementById('extra-feature-bottom').innerHTML = 'Подсолнух :)';
    }, 2000);
}






