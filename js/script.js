// Calculate if image if tall or wide
$(document).ready(function(){

    // Preload all images before loading
    var fadeTime = 1000;
    $("body").css("overflow-y", "hidden");
    var total_images = $("body img").length;
    var images_loaded = 0;
    $("body").find('img').each(function() {
        var fakeSrc = $(this).attr('src');
        $("<img/>").attr("src", fakeSrc).css('display', 'none').on('load', function() {
            images_loaded++;
            if (images_loaded >= total_images) {
                // When images are loaded
                $( ".preloader" ).fadeOut(fadeTime, function() {
                    $("body").css("overflow-y", "scroll");
                    $(".preloader").css("display", "none");
                });
            }
        });
    });

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
StartMainSlider();
StartReviewSlider();

});