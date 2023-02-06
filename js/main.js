var slideNow = 1;
var translateWidth = 0;
var slideCount = $('.comment__slider-inner').children().length;
function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('.comment__slider-inner').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('.viewport').width() * (slideNow);
        $('.comment__slider-inner').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}
var slideInterval = 5000;
$(document).ready(function () {
    setInterval(nextSlide, slideInterval);
});