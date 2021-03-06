<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>zoe-room</title>

    <link rel="stylesheet" href="/resources/css/index.css">
    <link rel="stylesheet" href="/resources/css/common.css">
    <link rel="stylesheet" href="/resources/css/sub01.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


    <!-- 제이쿼리 불러오기 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <!-- swiper 불러오기 -->
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

    <!--aos 불러오기-->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

    <!-- 아울 캐러셀 불러오기, 제이쿼리 보다 밑에 있어야 합니다. -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/owl.carousel.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/assets/owl.carousel.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/assets/owl.theme.default.min.css">

    <!--네이버 api-->
    <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=tb45ot3bcw"></script>

    <!--풀 페이지-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.css">

    <script src="/resources/js/index.js"></script>
</head>

<body>
    <!--메인 메뉴바-->

    <div class="main-menu-logo visible-md-up">
        <div class="img-box">
            <img src="resources/images/main-logo-1.png" alt="">
        </div>
    </div>

    <section class="main-menu-box visible-md-up">
        <div class="logo">
            <div class="img-box">
                <img src="resources/images/main-logo-2.png" alt="">
            </div>
        </div>
        <ul class="main-manu-list">
            <li data-menuanchor="section-1" class="active" id="btn1">
                <a class="active" href="#section-1">HOME</a>
            </li>
            <li data-menuanchor="section-2" id="btn2">
                <a href="#section-2">ABOUT</a>
            </li>
            <li data-menuanchor="section-3" id="btn3">
                <a href="#section-3">DESIGNER</a>
            </li>
            <li data-menuanchor="section-4" id="btn4">
                <a href="#section-4">CONTACT</a>
            </li>
        </ul>
        <div class="side-footer">
            <div class="sf-adress">
                서울특별시 강남구 청담동 63-14 JUNO & BEAUTY 5층
                <br>
                Copyright ⓒ 2017 JUNOHAIR.COM. All rights Reserved.
            </div>
        </div>
    </section>

    <div class="mobile-top-bar visible-sm-down clearfix">
        <div class="mobile-logo clearfix">
            <div class="img-box">
                <img src="resources/images/main-logo-2.png" alt="">
            </div>
        </div>
        <div class="mobile-menu-img clearfix">
            <div class="img-box">
                <img src="resources/images/main-logo-1.png" alt="">
            </div>
        </div>
    </div>
    <section class="mobile-menu-bar">
        <ul class="mobile-menu-list">
            <li data-menuanchor="section-1" class="active" id="btn1">
                <a class="active" href="#section-1">HOME</a>
            </li>
            <li data-menuanchor="section-2" id="btn2">
                <a href="#section-2">ABOUT</a>
            </li>
            <li data-menuanchor="section-3" id="btn3">
                <a href="#section-3">DESIGNER</a>
            </li>
            <li data-menuanchor="section-4" id="btn4">
                <a href="#section-4">CONTACT</a>
            </li>
        </ul>
    </section>