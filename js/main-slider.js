var StartMainSlider = function() {
    // Settings
    var timeBetweenSlides = 5000;
    var slideSpeed = 2000;

    // Slide parent container
    var slides = $(".slides");
    var screenWidth = $(".slide").width();

    var amountOfClasses = $(".slide").length;
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
    $(".slides").mouseover(function() {
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