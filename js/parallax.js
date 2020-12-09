const parallax = document.querySelector('.back1');
parallax.style.height = '70vh' /* sets height based on the height of the page */ 

window.addEventListener("scroll", function () { /* this works when user scrolls */
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px"; /* slowly moves the photo while scrolled */
})