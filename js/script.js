// Calculate if image if tall or wide
$(document).ready(function(){

    // Preload all images before loading
var preloadImages = function() {
    $("body").css("overflow-y", "hidden");
    var fadeTime = 1000;
    var percentComplete = 0;
    var total_images = $("body img").length;
    var images_loaded = 0;
    var percentPerImage = 100 / total_images;
    
    $("body").find('img').each(function() {
        var fakeSrc = $(this).attr('src');
        $("<img/>").attr("src", fakeSrc).css('display', 'none').on('load', function() {
            images_loaded++;
            percentComplete += percentPerImage;
            $(".preloader .percentage").html(Math.round(percentComplete) + " % complete ...");
            
            if (images_loaded >= total_images) {
                // When images are loaded
                $(".preloader h2:first-child").html("Preload complete");
                $(".preloader .percentage").html("100%");
                
                $( ".preloader" ).fadeOut(fadeTime, function() {
                    // After fade is done
                    $("body").css("overflow-y", "scroll");
                    $(".preloader").css("display", "none");
                });
            }
        });
    });
}

    // Assign classes to images
    $('#specials .packages').find('img').each(function(){
     var imgClass = (this.width/this.height > 1) ? 'wide' : 'tall';
     $(this).addClass(imgClass);
    })


    // When clicking on holidays package (change class)
    $("#holiday-type .package").click(function() {
        var package = $(this).closest(".package");

        $("#holiday-type .package").removeClass("selected");
        package.addClass("selected");
    });

// start sliders
preloadImages();
StartMainSlider();
StartReviewSlider();

});