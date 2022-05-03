//fullpage
function fullPage_init() {
    new fullpage('#fullpage', {
        sectionsColor: ['yellow', 'white', '#C0C0C0', '#ADD8E6'],
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

//메인 로고 클릭 시 엑티브
function MenuBoxLogo__toggle() {
  
  var $btn = $('.main-menu-logo');

  if ($btn.hasClass('active')) {
    $btn.removeClass('active');
    $('.main-menu-box').removeClass('active');
  }
  else {
    $btn.addClass('active');
    $('.main-menu-box').addClass('active');
  }
}

$(function () {
  $('.main-menu-logo').click
  (MenuBoxLogo__toggle);
})
  

//네이버 지도
function NaverMap__init() {
  var mapOptions = {
    center: new naver.maps.LatLng(36.3293207, 127.4188361),
    zoom: 10
  };
  
  var map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(36.3293207, 127.4188361), // 지도를 열 좌표
    zoom: 19
  });

  // 지도에 해당 좌표 마커(아이콘 설정)
  var markerOptions = {
    position: new naver.maps.LatLng(36.3293207, 127.4188361), //마커찍을 좌표
    map: map,
    icon: {
        url: 'resources/img/marker.png', //아이콘 경로
        size: new naver.maps.Size(22, 36), //아이콘 크기
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(11, 35)
    }
  };

  // 마커 생성
  var marker = new naver.maps.Marker(markerOptions);

}

$(function () {
  NaverMap__init();
})