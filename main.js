window.onload = function (){
    init();
}

function openNav() {
    document.getElementById("side-menu").style.left = "0px";
}

function closeNav() {
    document.getElementById("side-menu").style.left = "-200px";
}

//presentation code
function init() { 
    getCurrentSlideNo();
    hideNavButtons();
    document.querySelector("span#totalSlides").innerHTML = document.querySelectorAll('.slide').length;
}

function moveToLeftSlide() {
    var currentSlide = document.querySelector('.slide.show');
    var tempSlide = currentSlide;
    currentSlide = currentSlide.previousElementSibling;
    tempSlide.classList.remove('show');
    currentSlide.classList.add('show');
    init();
}

function moveToRightSlide() {
    var currentSlide = document.querySelector('.slide.show');
    var tempSlide = currentSlide;
    currentSlide = currentSlide.nextElementSibling;
    tempSlide.classList.remove('show');
    currentSlide.classList.add('show');
    init();
}

function fullScreenMode() {
    var presentation = document.querySelector('.presentation');
    presentation.classList.add('full-screen');
    var fullScrBtn = document.querySelector('#full-screen');
    var smallScrBtn = document.querySelector('#small-screen');
    fullScrBtn.classList.remove('show');
    smallScrBtn.classList.add('show');
}

function smallScreenMode() {
    var presentation = document.querySelector('.presentation');
    presentation.classList.remove('full-screen');
    var fullScrBtn = document.querySelector('#full-screen');
    var smallScrBtn = document.querySelector('#small-screen');
    fullScrBtn.classList.add('show');
    smallScrBtn.classList.remove('show');
}

function getCurrentSlideNo() {
    let counter = 0;
    var totalSlides = document.querySelectorAll('.slide');
    totalSlides.forEach((slide, i) => {
        counter++;

        if(slide.classList.contains('show')){
            currentSlideNo = counter;
        }
    });
    document.querySelector("span#currSlide").innerHTML = currentSlideNo;
}

function hideNavButtons () {
    var currentSlideNo = document.getElementById('currSlide').innerHTML;
    var totalSlides = document.querySelectorAll('.slide').length;
    if(currentSlideNo == 1){
        document.getElementById('left-slide').classList.remove('show');
    }else{
        document.getElementById('left-slide').classList.add('show');
    }
    if(currentSlideNo == totalSlides){
        document.getElementById('right-slide').classList.remove('show');
    }else{
        document.getElementById('right-slide').classList.add('show');
    }
}

function enlargeImg(img) {
    var bigImg = document.getElementById("bigImg");
    bigImg.src = img.src;
    bigImg.style.visibility = 'visible';
}



