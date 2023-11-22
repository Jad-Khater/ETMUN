(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        nav : true,
        loop: true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });
    
})(jQuery);
(function ($) {
    "use strict";

    let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");

//Format: Date(year, month, day, hour, minute)
//Year is counter from 0 to 11
let endDate = new Date(2023,11,30,9,0);
//Output value in milliseconds
let endTime = endDate.getTime();

function countdown(){
    let todayDate = new Date();
    //Output value in milliseconds
    let todayTime = todayDate.getTime();

    let remainingTime = endTime - todayTime;

    //60sec => 1000 milliseconds
    let oneMin = 60 * 1000;
    //1hr => 60 minutes
    let oneHr = 60 * oneMin;
    //1 day => 24 hours
    let oneDay = 24 * oneHr;

    //Function to format number if it is single digit
    let addZeroes = num => num < 10 ? `0${num}` : num;

    //If end dat is before today date
    if(endTime < todayTime){
        clearInterval(i);
        document.querySelector(".countdown").innerHTML = `<h1>Countdown had expired!</h1>`;
    }
    //If end date is not before today date
    else{
        //Calculating remaining days, hrs,mins ,secs
        let daysLeft = Math.floor(remainingTime / oneDay);
        let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
        let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
        let secsLeft = Math.floor((remainingTime % oneMin) / 1000);

        //Displaying Valurs
        dayBox.textContent = addZeroes(daysLeft);
        hrBox.textContent = addZeroes(hrsLeft);
        minBox.textContent = addZeroes(minsLeft);
        secBox.textContent = addZeroes(secsLeft);
    }
}

    let dayBoxTop = document.getElementById("day-box-top");
    let dayBoxBottom = document.getElementById("day-box-bottom");
    let hrBoxTop = document.getElementById("hr-box-top");
    let hrBoxBottom = document.getElementById("hr-box-bottom");
    let minBoxTop = document.getElementById("min-box-top");
    let minBoxBottom = document.getElementById("min-box-bottom");
    let secBoxTop = document.getElementById("sec-box-top");
    let secBoxBottom = document.getElementById("sec-box-bottom");

    function countdown() {
        let todayDate = new Date();
        let todayTime = todayDate.getTime();

        let remainingTime = endTime - todayTime;

        let oneMin = 60 * 1000;
        let oneHr = 60 * oneMin;
        let oneDay = 24 * oneHr;

        let addZeroes = num => num < 10 ? `0${num}` : num;

        if (endTime < todayTime) {
            clearInterval(i);
            document.querySelector(".countdown").innerHTML = `<h1>Countdown had expired!</h1>`;
        } else {
            let daysLeft = Math.floor(remainingTime / oneDay);
            let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
            let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
            let secsLeft = Math.floor((remainingTime % oneMin) / 1000);

            updateFlipAnimation(dayBoxTop, dayBoxBottom, addZeroes(daysLeft));
            updateFlipAnimation(hrBoxTop, hrBoxBottom, addZeroes(hrsLeft));
            updateFlipAnimation(minBoxTop, minBoxBottom, addZeroes(minsLeft));
            updateFlipAnimation(secBoxTop, secBoxBottom, addZeroes(secsLeft));
        }
    }

    function updateFlipAnimation(topElement, bottomElement, value) {
        let topValue = topElement.innerText;
        let bottomValue = bottomElement.innerText;

        if (topValue !== value) {
            animateFlip(topElement, value);
        }

        if (bottomValue !== value) {
            animateFlip(bottomElement, value);
        }
    }

    function animateFlip(element, value) {
        gsap.to(element, {
            duration: 0.4,
            rotationX: '-180deg',
            transformPerspective: 300,
            ease: Quart.easeOut,
            onComplete: function () {
                element.innerText = value;
                gsap.set(element, {rotationX: 0});
            }
        });
    }

    let i = setInterval(countdown, 1000);
    countdown();

})(jQuery);
