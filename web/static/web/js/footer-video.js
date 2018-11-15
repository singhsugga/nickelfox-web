$(document).on('click', 'a.fox-btn', function () {
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://www.youtube.com/embed/GY24ZRL-_fE");
    // ifrm.setAttribute("src", "https://www.youtube.com/embed/GY24ZRL-_fE?autoplay=1&controls=0&rel=0&showinfo=0");
    $('#footerVideo .footer-video-container div').html(ifrm);
    $('#footerVideo .footer-video-container').show();
    setTimeout(function () {
        $('#footerVideo .footer-video-container').addClass('active');
        $('body').addClass('scroll-disabled');
    }, 100);
});
$(document).on("click", '#footerVideo .footer-video-container', function (e) {
    var videoContainer = $("#footerVideoContainer");
    if (!videoContainer.is(e.target) && videoContainer.has(e.target).length === 0) {
        $(this).removeClass('active');
        setTimeout(function () {
            $('#footerVideo .footer-video-container').hide();
            $('#footerVideo .footer-video-container div').html('');
            $('body').removeClass('scroll-disabled');
        }, 300);

    }
});