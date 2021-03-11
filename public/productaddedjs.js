//parallax effect on background image

const parallax = document.getElementById("forestBackground");
window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
});