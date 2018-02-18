var StartMainSlider = function() {
    // Settings
    var timeBetweenSlides = 5000;
    var slideSpeed = 2000;

    // Slide parent container
    var slides = $("#slider-section .slides");
    var screenWidth = $("#slider-section .slide").width();

    var amountOfClasses = $("#slider-section .slide").length;
    var currentSlide = 0;
    
    var animateDirection = "-=";
    
    // Slide
    var slideTimer = setInterval(function() {
        slides.animate({"margin-left": animateDirection + screenWidth}, slideSpeed);
        if(animateDirection == "-=") {
            currentSlide++;
        }
        else {
            currentSlide--;
        }

        if(currentSlide == amountOfClasses-1) {
            animateDirection = "+=";
        }
        else if(currentSlide == 0) {
            animateDirection = "-=";
        }
    }, timeBetweenSlides);

    // Pause on hover
    $("#slider-section .slides").mouseover(function() {
        clearInterval(slideTimer);
    }).mouseout(function() {
        slideTimer = setInterval(function() {
            slides.animate({"margin-left": animateDirection + screenWidth}, slideSpeed);
            if(animateDirection == "-=") {
                currentSlide++;
            }
            else {
                currentSlide--;
            }
    
            if(currentSlide == amountOfClasses-1) {
                animateDirection = "+=";
            }
            else if(currentSlide == 0) {
                animateDirection = "-=";
            }
        }, timeBetweenSlides);
    });
}