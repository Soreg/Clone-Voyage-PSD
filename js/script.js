StartMainSlider();
StartReviewSlider();

// Calculate if image if tall or wide
$(document).ready(function(){
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

});