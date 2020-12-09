const burger = document.querySelector('.burger'); 
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li'); /* select items from the list */

burger.addEventListener('click', foo)
/* listens to the click of the user  */
function foo() {
    navLinks.classList.toggle("open");
} /* when user click, this part of the code opens the "burger" */

