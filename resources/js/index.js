//fullpage
function fullPage_init() {
    new fullpage('#fullpage', {
        sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
      });    
}

$(function () {
    fullPage_init();
})


//section-2에 슬라이드
function slide_init() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}

$(function () {
    slide_init();
})