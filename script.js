// new file
var scrollHeight = Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,
	document.body.offsetHeight, document.documentElement.offsetHeight,
	document.body.clientHeight, document.documentElement.clientHeight
);
// var torch = document.getElementById('moon');
// torch.style.height = scrollHeight + 'px';
// document.body.addEventListener('mousemove', function(e) {
// 	var top = e.pageY;
// 	var left = e.pageX;
	
// 	torch.style.clip = "rect("+(top-100)+'px,'+left+'px,'+top+'px,'+(left-100)+"px)";
// });

// window.onscroll = function() {
// 	var scrolled = window.pageYOffset || document.documentElement.scrollTop;  
// }

const spotlight = document.querySelector(".spotlight");
spotlight.style.height = scrollHeight + 'px';
    let spotlightSize = "transparent 80px, rgba(0, 0, 0, 0.95) 110px)";

    window.addEventListener("mousemove", e => {
      requestAnimationFrame(() => updateSpotlight(e));
    });

    function updateSpotlight(e) {
      const xPos = e.pageX / window.innerWidth * 100;
	  const yPos = e.pageY / scrollHeight * 100;
	  console.log(xPos, yPos);
      spotlight.style.backgroundImage = `radial-gradient(circle at ${xPos}% ${yPos}%, ${spotlightSize}`;
    }