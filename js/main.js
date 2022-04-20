$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 4
        },
        1000: {
            items: 8
        }
    }
})

window.addEventListener('DOMContentLoaded', () => {
    jQuery(window).scroll(function() {
        if (jQuery(window).scrollTop() > 0) {
            jQuery('header#header').css("background-color", "black");              
        } else {
            jQuery('header#header').css("background-color", "transparent");
        }
    });
}); 