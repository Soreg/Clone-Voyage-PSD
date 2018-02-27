// Calculate if image if tall or wide
$(document).ready(function(){

    // Preload all images before loading
    $("body").hide();
    var total_images = $("body img").length;
    var images_loaded = 0;
    $("body").find('img').each(function() {
        var fakeSrc = $(this).attr('src');
        $("<img/>").attr("src", fakeSrc).css('display', 'none').on('load', function() {
            images_loaded++;
            if (images_loaded >= total_images) {
                // now all images are loaded.
                $("body").show();
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
    var imgToDisplay = $(this).attr("data-image");
    
    $("#holiday-type .package").removeClass("selected");
    $(this).addClass("selected");
    
    $("#holiday-type").css("background-image", "url(" + imgToDisplay + ")");
});

// start sliders
StartMainSlider();
StartReviewSlider();

});