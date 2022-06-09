var toggle_btn
var big_wrapper
const main = document.querySelector('main')

let dark = false /* False - Light theme and True - Dark theme */
function declare() {
    toggle_btn = document.querySelector('.toggle-btn')
    big_wrapper = document.querySelector('.big-wrapper')
}
declare()
function toggleAnimation() {
    // Clone
    dark = !dark
    let clone = big_wrapper.cloneNode(true);  /* deep parameter */
    if (dark) {
        clone.classList.add('dark')
        clone.classList.remove('light')
    }
    else {
        clone.classList.add('light')
        clone.classList.remove('dark')
    }
    clone.classList.add('copy')
    main.appendChild(clone)

    clone.addEventListener('animationend', () => {
        big_wrapper.remove();
        clone.classList.remove('copy')

        // Reset variables
        declare()
        events()
        menuToggle()
    })
}
function events() {
    toggle_btn.addEventListener('click', toggleAnimation)
}
events()

function menuToggle() {
    const menuBtn = document.querySelector('.menu-btn')
    const navLinks = document.querySelector('ul')
    menuBtn.addEventListener('click', function () {
        navLinks.classList.toggle('mobile-menu')
    })
}
menuToggle()

/* Deep parameter 
true - clone the node, its attributes and its descendants
flase - default. clone only the node and its attributes
*/