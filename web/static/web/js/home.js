var container = null;
var items = null;
var currentPos = 0;
var interval = null;

$(document).ready(function () {
    $('.companies-list ul').slick({
        dots: false,
        autoplay: false,
        centerMode: true,
        infinite: true,
        variableWidth: true,
        slidesToShow: 1,
        speed: 300,
    });

    $('.testimonial_slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed:200,
        prevArrow: $('#testimonial-controls .slick-pre'),
        nextArrow: $('#testimonial-controls .slick-nex'),
        fade: true,
        cssEase: 'linear'
      });

      $('.cs_study_slick_slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        prevArrow: $('#cs-study-carousel .slick-pre'),
        nextArrow: $('#cs-study-carousel .slick-nex'),
        appendDots: $('.case_study_indicators'),
        speed: 300,
        fade: true,
        cssEase: 'linear'
      });

 
});


function testimonial_prev() {
    $('#testimonials .carousel').carousel('prev')
}
function testimonial_next() {
    $('#testimonials .carousel').carousel('next');
}



