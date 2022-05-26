//fullpage
function fullPage_init() {
    new fullpage('#fullpage', {
        sectionsColor: ['yellow', '#171514', '#e1ddd1', ''],
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
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: { //반응형 조건 속성
          640: { //640 이상일 경우
            slidesPerView: 1, //레이아웃 2열
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
          1460: {
            slidesPerView: 3,
          },
        }
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

//메뉴 리스트 아이템 누를 때 배경 색 그대로
function MenuListItem__toggle() {
  
  var $btn = $('.main-menu-box > ul > li');

  if ($btn.hasClass('active')) {
    $btn.removeClass('active');
    $('.main-menu-box > ul > li > a').removeClass('active');
  }
  else {
    $btn.addClass('active');
    $('.main-menu-box > ul > li > a').addClass('active');
  }
}

$(function () {
  $('.main-menu-box > ul > li > a').click
  (MenuListItem__toggle);
})

//모바일 메뉴 로고 클릭 시 엑티브
function MobileTopBar__toggle() {
  
  var $btn = $('.mobile-menu-img');

  if ($btn.hasClass('active')) {
    $btn.removeClass('active');
    $('.mobile-menu-bar').removeClass('active');
  }
  else {
    $btn.addClass('active');
    $('.mobile-menu-bar').addClass('active');
  }
}

$(function () {
  $('.mobile-menu-img').click
  (MobileTopBar__toggle);
})
  

//네이버 지도
// function NaverMap__init() {
//   var mapOptions = {
//     center: new naver.maps.LatLng(36.3293207, 127.4188361),
//     zoom: 10
//   };
  
//   var map = new naver.maps.Map('map', {
//     center: new naver.maps.LatLng(36.3293207, 127.4188361), // 지도를 열 좌표
//     zoom: 19
//   });

//   // 지도에 해당 좌표 마커(아이콘 설정)
//   var markerOptions = {
//     position: new naver.maps.LatLng(36.3293207, 127.4188361),//마커찍을 좌표
//     map: map,
//     icon: {
//       url: 'resources/images/map-name-img.png',
//       size: new naver.maps.Size(200, 200),
//       origin: new naver.maps.Point(0, 0),
//       anchor: new naver.maps.Point(80, 120)
//     }
//   };

//   // 마커 생성
//   var marker = new naver.maps.Marker(markerOptions);
  

// }

// $(function () {
//   NaverMap__init();
// })


//다중마커 표시하는 자바
function initMap() { 
	
	var areaArr = new Array();  // 지역을 담는 배열 ( 지역명/위도경도 )
	areaArr.push(
			/*지역구 이름*/			/*위도*/					/*경도*/				
		 {location : '주차장 입구' , lat : '36.32810553' , lng : '127.41850078'},
     {location : 'ZOE-ROOM' , lat : '36.3293207' , lng : '127.4188361'} 
	);
	
	
	
	let markers = new Array(); // 마커 정보를 담는 배열
	let infoWindows = new Array(); // 정보창을 담는 배열
	
	var map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(36.3293207, 127.4188361), //지도 시작 지점
        zoom: 19
    });

    var polylinePath = [
      new naver.maps.LatLng(36.3293207, 127.4188361),
      new naver.maps.LatLng(36.32919798,127.41888241),
      new naver.maps.LatLng(36.32909598,127.41860103),
      new naver.maps.LatLng(36.32907563,127.41854651), // 꺾이는 곳
      new naver.maps.LatLng(36.3290301,127.41840524),
      new naver.maps.LatLng(36.32891011,127.41845472),
      new naver.maps.LatLng(36.32833702,127.41874625),
      new naver.maps.LatLng(36.32815423,127.41874844),
      new naver.maps.LatLng(36.32810553, 127.41850078)
    ];
    var polyline = new naver.maps.Polyline({
      path: polylinePath,      //선 위치 변수배열
      strokeColor: '#bda885', //선 색 빨강 #빨강,초록,파랑
      strokeOpacity: 0.8, //선 투명도 0 ~ 1
      strokeWeight: 6,   //선 두께
      map: map           //오버레이할 지도
  });
	
	
	
	for (var i = 0; i < areaArr.length; i++) {
		// 지역을 담은 배열의 길이만큼 for문으로 마커와 정보창을 채워주자 !

	    var marker = new naver.maps.Marker({
	        map: map,
	        title: areaArr[i].location, // 지역구 이름 
	        position: new naver.maps.LatLng(areaArr[i].lat , areaArr[i].lng) // 지역구의 위도 경도 넣기

	    });
      // 지도에 해당 좌표 마커(아이콘 설정)
      var markerOptions = {
        position: new naver.maps.LatLng(36.3293207, 127.4188361),//마커찍을 좌표
        icon: {
          url: 'resources/images/map-name-img.png',
          size: new naver.maps.Size(200, 200),
          origin: new naver.maps.Point(0, 0),
          anchor: new naver.maps.Point(80, 120)
        }
      };
	    
	    /* 정보창 */
		 var infoWindow = new naver.maps.InfoWindow({
		     content: '<div style="width:200px;text-align:center;padding:10px;"><b>' + areaArr[i].location + '</b><br> - 네이버 지도 - </div>'
		 }); // 클릭했을 때 띄워줄 정보 HTML 작성
	    
		 markers.push(marker); // 생성한 마커를 배열에 담는다.
		 infoWindows.push(infoWindow); // 생성한 정보창을 배열에 담는다.
	}
    
	 
    function getClickHandler(seq) {
		
            return function(e) {  // 마커를 클릭하는 부분
                var marker = markers[seq], // 클릭한 마커의 시퀀스로 찾는다.
                    infoWindow = infoWindows[seq]; // 클릭한 마커의 시퀀스로 찾는다

                if (infoWindow.getMap()) {
                    infoWindow.close();
                } else {
                    infoWindow.open(map, marker); // 표출
                }
    		}
    	}
    
    for (var i=0, ii=markers.length; i<ii; i++) {
    	console.log(markers[i] , getClickHandler(i));
        naver.maps.Event.addListener(markers[i], 'click', getClickHandler(i)); // 클릭한 마커 핸들러
    }
}




$(function() {
	
	initMap();
	
});