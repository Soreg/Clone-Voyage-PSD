var StartReviewSlider = function() {
    var reviews = $("#reviews .review");
    var currentIndex;
    var currentElement;
    var slider = $("#reviews .reviews");

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
            var scrollAmount = currentElement.outerWidth(true) * 2;
        slider.animate({"margin-left": "-=" + scrollAmount}, 1500, function() {
            ReviewSliderLogic();
        });
    }, 7000);

    // Go into setinterval
    // Add Copy first element, and add it to end
    // remove selected class
    // add selected class to next element
    // go to next element
    // remove last element

    
    
}