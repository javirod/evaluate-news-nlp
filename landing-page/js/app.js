/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 *
*/

//create an HTMLCollectiono of all <section> elements in document object
let sectionList = document.getElementsByTagName('Section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// ---------- build the nav ----------
//Create for loop that goes through and creates an <li> element for every instance of <Section>
//assign class menu__link to each item and appends to previously created fragment

function buildNavbar() {
    const newFrag = document.createDocumentFragment();
    for (let i = 0; i < sectionList.length; i++) {
        const newItem = document.createElement('li');
        const newAnchor = document.createElement('a');
        newAnchor.href = `#${sectionList[i].id}`;
        newAnchor.textContent = `${sectionList[i].dataset.nav}`;
        newAnchor.className = `menu__link ${sectionList[i].id}`;
        newItem.appendChild(newAnchor)
        newFrag.appendChild(newItem);
    };
    const ul = document.querySelector('ul');
    ul.appendChild(newFrag);
}


// ---------- Add class 'active' to section when near top of viewport ----------
//also remove 'active' class when not in viewport
function activeSection() {
    for (let i = 0; i < sectionList.length; i++) {
        let box = sectionList[i].getBoundingClientRect();
        const navbarActive = document.querySelector(`.${sectionList[i].id}`);
        if (box.top <= 150 && box.bottom >= 150) {
            sectionList[i].classList.add('your-active-class');
            navbarActive.classList.add('active');
        }
        else {
            sectionList[i].classList.remove('your-active-class');
            navbarActive.classList.remove('active');
        }
    }
}

// ---------- Scroll to anchor ID using scrollTO event ----------

function navbarScroll() {
    const clickedElem = event.target;
    if (clickedElem.classList[0] == 'menu__link') {
        event.preventDefault();
        destSection = document.getElementById(`${clickedElem.classList[1]}`);
        const sectionBegin = destSection.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: sectionBegin,
            behavior: "smooth"
        })
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
document.addEventListener("DOMContentLoaded", function () {
    buildNavbar();
});

// Scroll to section on link click
document.addEventListener("click", function(event) {
    navbarScroll();
});

// Set sections as active
document.addEventListener("scroll", function() {
    activeSection();
});

