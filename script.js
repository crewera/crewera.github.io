/* script.js */

let slideIndex = 0;
showSlides(slideIndex);

// 좌우 화살표 클릭 시 실행되는 함수
function moveSlide(n) {
    showSlides(slideIndex += n);
}

// 하단 점(dot) 클릭 시 실행되는 함수
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// 슬라이드를 보여주는 핵심 로직
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    // 슬라이드가 없으면 에러 방지를 위해 중단
    if (slides.length === 0) return;

    // 인덱스가 이미지 개수보다 많으면 처음으로
    if (n >= slides.length) {slideIndex = 0}
    // 인덱스가 0보다 작으면 마지막으로
    if (n < 0) {slideIndex = slides.length - 1}

    // 모든 슬라이드 숨김
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("active");
    }
    
    // 모든 점 비활성화
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // 현재 슬라이드만 보임
    slides[slideIndex].style.display = "block";
    slides[slideIndex].classList.add("active");
    
    // 현재 점 활성화 (점이 있을 때만)
    if (dots.length > 0) {
        dots[slideIndex].className += " active";
    }
}

// 5초마다 자동 슬라이드 (원치 않으시면 이 부분은 지우세요)
setInterval(function() {
    moveSlide(1);
}, 5000);