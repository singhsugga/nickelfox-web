$(function () {
    // Initialization
    var controller = new ScrollMagic.Controller();

    var cs_study_carousel = new ScrollMagic.Scene({
        triggerElement: '#cs_study_target',
        triggerHook: 0.9,
        reverse: false
    }).setClassToggle('#cs_study_target #cs-study-carousel', 'slide-up').addTo(controller);

    var what_we_do_section = new ScrollMagic.Scene({
        triggerElement: '#what-we-do',
        triggerHook: 0.7,
        reverse: false
    }).setClassToggle('#what-we-do .text-wave-on-enter', 'text-wave-active').addTo(controller);

    var trusted_by_section = new ScrollMagic.Scene({
        triggerElement: '#companies',
        triggerHook: 0.65,
        reverse: false
    }).setClassToggle('#companies .companies__tile__img__wpr', 'reveal').addTo(controller);

    var press_section = new ScrollMagic.Scene({
        triggerElement: '#press',
        triggerHook: 0.55,
        reverse: false
    }).setClassToggle('#press .press-list ul li', 'reveal').addTo(controller);
});