<?php
include_once($_SERVER['DOCUMENT_ROOT'] . "/resources/include/head.php");
?>

<div class="sub_wrap exam_form">
    <div class="sub_header">
        <div class="black-box"></div>
        <span class="sub-title">입학 안내</span>
        <img src="../resources/images/sub-page-img.jpg" alt="">
    </div>
    <div class="sub_content sub_content-1">
        <div class="sub_title">
            <span>입력사항</span>
        </div>
        <div class="sub_box flex">
            <form class="form-list form-1">
                <p class="part part1">
                    <strong>학생명</strong>
                    <input type="text" name="name" value="">
                </p>
                <p class="part part2">
                    <strong>성별</strong>
                    <select>
                        <option value="sex">선택</option>
                        <option value="sex">남학생</option>
                        <option value="sex">여학생</option>
                    </select>
                </p>
                <p class="part part3">
                    <strong>연락처</strong>
                    <input type="text" name="name" value="">
                </p>
            </form>
            <form class="form-list form-2">
                <p class="part part4">
                    <strong>거주 지역</strong>
                    <input type="text" name="name" value="">
                </p>
                <p class="part part5">
                    <strong>학년</strong>
                    <select>
                        <option value="year">선택</option>
                        <option value="year">중학생 1학년</option>
                        <option value="year">중학생 2학년</option>
                        <option value="year">중학생 3학년</option>
                        <option value="year">고등학생 1학년</option>
                        <option value="year">고등학생 2학년</option>
                        <option value="year">고등학생 3학년</option>
                    </select>
                </p>
                <p class="part part6">
                    <strong>상담 구분</strong>
                    <select>
                        <option value="ktx">선택</option>
                        <option value="itx">입학 문의</option>
                        <option value="itx">학습관련 문의</option>
                        <option value="itx">교습비 문의</option>
                    </select>
                </p>
            </form>
        </div>
    </div>
    <div class="sub_content sub_content-2">       
        <textarea readonly="readonly" name="" id="" cols="154" rows="10">
비쿨학원은 고객상담과 입학고사 및 설명회 신청시 다음과 같이 개인정보를 수집하고 있습니다. 수집한 개인정보는 “개인정보보호법”에 따라 보호하며, 개인정보
수집·이용목적 외로 처리하거나 정보주체의 동의 없이 외부에 제공 및 공유하지 않습니다. 또한, 개인정보가 분실·도난·유출·변조·훼손되지 않도록 안정성 확보에 필요한 조치를 취합니다.

1. 수집하는 개인정보 항목

(필수) 학생명, 연락처(자택 또는 휴대폰)

2. 개인정보의 수집 및 이용목적

가. 고객 문의 응대 및 상담    
나. 설명회 신청 참석 대상자 확인                    
다. 입학고사 신청 및 접수

3. 개인정보의 보유 및 이용기간
원칙적으로 개인정보의 수집 및 이용 목적이 달성된 후에는 이용자의 개인정보를 지체 없이 파기 합니다.
단, 회사 업무 및 통신비밀보호법, 전자상거래법 등 관련 법령에 의한 정보보호 및 보유 필요시*
명시 기간** 동안 다음과 같은 목적을 위해  보존합니다.
                
- 상담 및 설명회,입학고사 업무처리, 분쟁 조정을 위한 기록보존, 불만 처리 등 민원처리, 고지사항 전달, 교육정보 제공
                
- 서비스 별 이용 및 보유 기간
• 입학상담 : 업무 종료후 6개월
• 입학고사 : 업무 종료후 6개월
• 설명회 : 행사 종료후 10일

4. 개인정보 수집 · 이용에 대한 동의를 거부하실 수 있습니다.
단, 필수 항목에 동의하지 않으시면 상담,설명회,입학고사 안내에 일부 제한이 있습니다.
        </textarea>
        <div class="btn_wrap">
            <button type="submit" class="submit">신청하기</button>
        </div>
        <p class="part part7">
            
        </p>
    </div>
</div>

<?php
include_once($_SERVER['DOCUMENT_ROOT'] . "/resources/include/foot.php");
?>