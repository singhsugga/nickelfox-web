var body = $('body');
var menu = $('.main-menu');
var main_menu_list = $('li.text-wave-on-click');
var expertiseHoverTimeout = null;
var scrollBarWidth;
var close_hamburger = $('#hmbrgr-icon-x');
var hamburger = $('#hmbrgr-icon-black');
// $(window).on('load', function () {
//     $(window).scrollTop(0);
// });

$(window).on('resize', function () {
    getScrollBarWidth();
});

$(document).ready(function () {
    getScrollBarWidth();

    // FOR PREVENTING RELOAD ON SAME PAGE OF LINK IS CLICKED
    $("a").each(function () {
        if (window.location.href == this.href) {
            var scope = $(this).attr('data-scope')
            this.onclick = function () {
                if (scope == 'main-menu') {
                    toggle_menu();
                } else {
                    $("html, body").animate({ scrollTop: 0 }, 300, 'swing');
                }
                return false
            };
        }
    });
    
    $('[data-toggle="tooltip"]').tooltip({
        trigger : 'hover'
    }).on('click',function () {
        $(this).tooltip('hide');
    });

    $('#main-menu').on('click', function (e) {
        if ($(this).is(e.target)) {
            toggle_menu();
        }
    });

    $('.text-wave-on-load').addClass('text-wave-active');
    //========== case study ===========//
    var cs_anim_triggers = $('.cs-anim-trg-1,.cs-anim-trg-2')
    var shrinking_divs = cs_anim_triggers.children().not('.no-animation');
    var growing_divs = shrinking_divs.children().not('.no-animation');
    cs_anim_triggers.hover(
        function () {
            growing_divs.addClass('cs_grow_anim')
            shrinking_divs.addClass('cs_srink_anim')
        },
        function () {
            growing_divs.removeClass('cs_grow_anim')
            shrinking_divs.removeClass('cs_srink_anim')
        }
    )

    //========== expertise section ===========//
    var timer_1, timer_2;
    $('.content').mouseenter(function () {
        var slide = $(this).attr('data-slide');
        $('.bg').removeClass('show').addClass('hide');
        $('.bg-' + slide).addClass('show');
        $('.bg-video').removeClass('show');
        $('.bg-video-' + slide).addClass('show');
        $('.content').removeClass('show').addClass('hide');
        $(this).addClass('show');
        $(this).find('.services__tile_list_content_wpr').addClass('slide-up');
        $(this).find('.arrow__btn').addClass('expertise__btn__hover')
        $(this).find('.slide__up__content__wpr').addClass('slide-up')

    }).mouseleave(function () {

        $('.bg').removeClass('show').removeClass('hide');
        $('.bg-video').removeClass('show');
        $('.content').removeClass('show').removeClass('hide');
        $(this).find('.services__tile_list_content_wpr').removeClass('slide-up');
        $(this).find('.expertise__btn__hover').removeClass('expertise__btn__hover');
        $(this).find('.slide__up__content__wpr').removeClass('slide-up');
    });

    $('#expertise').mouseenter(function () {
        var elem = $(this);
        expertiseHoverTimeout = setTimeout(function () {
            elem.addClass('active');
        }, 300);
    }).mouseleave(function () {
        var elem = $(this);
        elem.removeClass('active');
        clearTimeout(expertiseHoverTimeout);
    });


    $(document).on('click', '#apply-btn', function (e) {
        var modal_type = '';
        var modal_markup = '';
        if (this.id == 'apply-btn') {
            //for careers page
            modal_type = 'apply';
            var modal_markup = `<div id="apply-modal-wpr" class="d-flex pop-up-modal px-3 align-items-center justify-content-center">
        <div id="apply-modal" class="d-flex flex-column px-3 align-items-center text-center justify-content-center ">
        <span class="text-white" id="modal-dismiss"></span>
        <div class="py-5">
        <p class=" fs-14 fw-300 fs-xl-18 m-0">Send your resume to: <a class="text-white" href="mailto:careers@nickelfox.com"><b>careers@nickelfox.com<b></a></p>
        <button id="dismiss-apply-modal" class="btn__normal btn__normal--light py-4 cursor w-50 fs-12 px-5 mt-5">ok</button></div>
        </div>
        </div>`;
        }
        e.preventDefault();
        $(body).addClass('scroll-disabled');
        $(body).append(modal_markup);
        setTimeout(function () {
            $('#' + modal_type + '-modal-wpr').addClass('active');
            $('#' + modal_type + '-modal').addClass('active');
        }, 50);

        $('#' + modal_type + '-modal-wpr').on('click', function (e) {
            if ($(this).is(e.target) || e.target.id === 'dismiss-' + modal_type + '-modal') {
                $(body).removeClass('scroll-disabled');
                $(this).removeClass('active');
                $('#' + modal_type + '-modal').removeClass('active');
                setTimeout(function () {
                    $(this).remove();
                }.bind(this), 350)
            }
        });

    });
});


//========== main menu section ===========//
function toggle_menu() {
    menu.toggleClass('main-menu-active'); //toggle main menu
    close_hamburger.toggleClass('active');
    hamburger.toggleClass('inactive');
    if (window.is_dark_nav_active) {
        $('#hmbrgr-icon-white').toggleClass('show');
        $('#nfx-logo-white').toggleClass('show');
        $('#hmbrgr-icon-black').toggleClass('hide');
        $('#nfx-logo-black').toggleClass('hide');
    }
    // scroll bar hide hack to deal with sudden jerks 
    $('body').toggleClass('scroll-disabled');
    if ($('#body').hasClass('scroll-disabled')) {
        $('#body,#navbar,#menu-wpr').css('margin-right', scrollBarWidth);
    } else {
        $('#body,#navbar,#menu-wpr').css('margin-right', 0);
    }

    main_menu_list.toggleClass('text-wave-active');// toggle main menu links animation
}

function getScrollBarWidth() {
    scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;// scrollbar width on all devices
}