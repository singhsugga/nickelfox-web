$(function () {
    var has_scrolled = false;
    var $dark_sections = null;
    var ranges = [];
    var $nfx_logo_white = $('#nfx-logo-white');
    var $nfx_logo_black = $('#nfx-logo-black');
    var $hmbrgr_icon_white = $('#hmbrgr-icon-white');
    var $hmbrgr_icon_black = $('#hmbrgr-icon-black');
    var is_dark_nav_active = false;
    var $scrollTop;
    window.is_dark_nav_active = false;
    // initialize
    init_();
    first_time_load_exec();
    $(window).on('resize', function () {
        init_();
    });

    $(window).scroll(function (e) {
        has_scrolled = true;
        $scrollTop = $(this).scrollTop();
    });

    setInterval(check_range, 100);
    function check_range() {
        if (has_scrolled) {
            has_scrolled = false;
            var on_black_section = false;
            for (let i = 0; i < ranges.length; i++) {
                if ($scrollTop + 50 >= ranges[i].top && $scrollTop + 50 <= ranges[i].bottom) {
                    on_black_section = true;
                    break;
                }
            }

            if (on_black_section && !is_dark_nav_active) {
                is_dark_nav_active = true;
                window.is_dark_nav_active = true;
                activate_dark_nav();
            } else if (!on_black_section && is_dark_nav_active) {
                is_dark_nav_active = false;
                window.is_dark_nav_active = false;
                deactivate_dark_nav();
            }

        }
    }


    function init_() {
        if ($('#expertise-mobile').css('display') == 'none') {
            $('#expertise-mobile').removeClass('dark_section');
        } else {
            $('#expertise-mobile').addClass('dark_section');
        }

        if ($('#expertise').css('display') == 'none') {
            $('#expertise').removeClass('dark_section');
        } else {
            $('#expertise').addClass('dark_section')
        }
        ranges = [];
        $dark_sections = null;
        $dark_sections = get_dark_sections();
        set_ranges_object_array();
    }

    function get_dark_sections() {
        return $('.dark_section');
    }

    function set_ranges_object_array() {
        $dark_sections.each(function () {
            var $element = $(this);
            var element_top = $element.position().top;
            var element_bottom = element_top + $element.height();
            ranges.push({ top: Math.round(element_top), bottom: Math.round(element_bottom) })
        });
    }

    function first_time_load_exec() {
        has_scrolled = true;
        $scrollTop = $(window).scrollTop();
    }

    function activate_dark_nav() {
        $hmbrgr_icon_white.addClass('show');
        $nfx_logo_white.addClass('show');
        $nfx_logo_black.addClass('hide');
        $hmbrgr_icon_black.addClass('hide');
    }

    function deactivate_dark_nav() {
        $hmbrgr_icon_white.removeClass('show');
        $nfx_logo_white.removeClass('show');
        $nfx_logo_black.removeClass('hide');
        $hmbrgr_icon_black.removeClass('hide');
    }

})

