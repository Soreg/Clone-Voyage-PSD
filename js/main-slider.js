var StartMainSlider = function() {
    // Settings
    var timeBetweenSlides = 5000;
    var slideSpeed = 2000;

    // Slide parent container
    var slides = $("#slider-section .slides");
    var screenWidth = $("#slider-section .slide").width();

    var amountOfClasses = $("#slider-section .slide").length;
    

    // When slider slides
    // Copy first slide to the end of the file
    // Remove first slide

    // Logic used when slide is done (append and remove slides)
    function slideLogic(direction) {

        var firstSlide = $("#slider-section .slide").first();
        var selectedSlide = $("#slider-section .slides").children().eq(1);
        var clone = selectedSlide.clone(); // Clone since replaceWith removes selected element (the clone)

        firstSlide.clone().appendTo(slides); // Copy and paste first slide to end of row

        firstSlide.replaceWith(clone); // Set first slide to current slide
        slides.css("margin-left", "0"); // Move slider to first slide

        selectedSlide.remove(); // Remove previous slide
    }

    function addPreviousSlider() {
        var lastSlide = $("#slider-section .slide").last();
        var clone = lastSlide.clone();
        clone.prependTo(slides);
        slides.css("margin-left", "-=" + screenWidth);
        lastSlide.remove();
    }
    
    // Slide
    var slideTimer = setInterval(function() {
        slides.animate({"margin-left": "-=" + screenWidth}, slideSpeed, function() {
            slideLogic("right");
        });
    }, timeBetweenSlides);

    // Pause on hover
    $("#slider-section .slides, #slider-section .slider-arrow").mouseover(function() {
        clearInterval(slideTimer);
    })
    .mouseout(function() {
        slideTimer = setInterval(function() {
            slides.animate({"margin-left": "-=" + screenWidth}, slideSpeed, function() {
                slideLogic("right");
            });
        }, timeBetweenSlides);
    });

    // when clicking the next-button
    $(".next-arrow").click(function() {
        slides.finish();
        slides.animate({"margin-left": "-=" + screenWidth}, slideSpeed, function() {
            slideLogic("right");
        });
    });

    // when clicking the prev-button
    $(".prev-arrow").click(function() {
        slides.finish();
        addPreviousSlider();
        slides.animate({"margin-left": "+=" + screenWidth}, slideSpeed, function() {
            // slideLogic("right");
        });
    });

}