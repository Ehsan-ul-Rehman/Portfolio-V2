// const header = document.querySelector('.header');

// header.style.backgroundPosition = '0 0';

// header.animate(
//     { backgroundPosition: ['0 0', '0 -150px'] },
//     {
//         duration: 15000, // Adjust the duration as needed
//         iterations: Infinity,
//         direction: 'alternate',
//         easing: 'linear'
//     }
// );



document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('[data-collapse-toggle="navbar-default"]');
    const menu = document.getElementById('navbar-default');

    button.addEventListener('click', function () {
        const isExpanded = menu.getAttribute('aria-expanded') === 'true';

        menu.setAttribute('aria-expanded', !isExpanded);
        button.setAttribute('aria-expanded', !isExpanded);

        if (!isExpanded) {
            // If the menu is collapsed, expand it
            menu.classList.remove('hidden');
        } else {
            // If the menu is expanded, collapse it
            menu.classList.add('hidden');
        }
    });
});

// document.addEventListener('DOMContentLoaded', function () {
//     const header = document.querySelector('.header');
//     const hueValues = [0, 50, 100]; // Hue values in degrees

//     let currentHueIndex = 0;

//     function changeHue() {
//         const nextHue = hueValues[currentHueIndex];
//         header.style.filter = `hue-rotate(${nextHue}deg)`;

//         currentHueIndex = (currentHueIndex + 1) % hueValues.length;
//     }

//     setInterval(changeHue, 10000); // Change hue every 5 seconds
// });


function toggleTray() {
    var tray = document.getElementById('tray');
    tray.classList.toggle('tray-open');
}
function changeHueRotate(degrees) {
    const colorfulDivs = document.querySelectorAll('.colorful-div');
    colorfulDivs.forEach(div => {
        div.style.transition = 'filter 1s ease';
        div.style.filter = `hue-rotate(${degrees}deg)`;
    });

}



class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 8);
        this.type();
        this.isDeleting = false;
    }

    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if deleting
        if (this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // change color for data-text
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Initial Type Speed
        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 300;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}


//Swiper Slider Testimonials Start
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});
//Swiper Slider Testimonials End
