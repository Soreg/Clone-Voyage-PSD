var StartReviewSlider = function() {
    var reviews = $("#reviews .review");
    var currentIndex;
    var currentElement;
    var slider = $("#reviews .reviews");

    var sliderAnimationTime = 1500;
    var sliderAnimationTimeSeconds = sliderAnimationTime / 1000;
    var sliderTimeBetweenSlides = 7000;

    // set css transition time
    $("#reviews .review").css("transition", "all ease " + sliderAnimationTimeSeconds + "s");

    
    // Find currently active review, and set to start index
    $.each(reviews, function(i) { 
        if($(this).hasClass("selected")) {
            currentIndex = i;
        }
    });

    currentElement = $(reviews[currentIndex]);  
    var nextElement = currentElement.next();

    function ReviewSliderLogic() { // Slide logic (Inspiration from main-slider logic)
        slider.css("margin-left", "0"); // center slide
        var firstElement = $("#reviews .review").first();

        // copy / paste first element to end, and delete first element
        firstElement.clone().appendTo(slider);
        firstElement.remove();

        // Logic needed for next slide
        currentElement = currentElement.next();
        nextElement = currentElement.next();

        
    }

    var slideTimer = setInterval(function() {
            currentElement.removeClass("selected");
            nextElement.addClass("selected");

            var scrollAmount = currentElement.outerWidth(true) * 2; // calculate scroll amount

        slider.animate({"margin-left": "-=" + scrollAmount}, sliderAnimationTime, function() {
            ReviewSliderLogic();
        });

    }, 7000);
    
}