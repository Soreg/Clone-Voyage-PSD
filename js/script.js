$(document).ready(function(){

    var totalSlidesToLoad = ($(".main-slider-img").length);
    
    var totalSlidesLoaded = 0;
    

    $(function() {
        $('.lazy').lazy({
            afterLoad: function(element) {
                
                if(element.hasClass("main-slider-img")) {
                    totalSlidesLoaded++;

                    // check if all is loaded
                    if(totalSlidesLoaded == totalSlidesToLoad) {
                        StartMainSlider();
                    }
                }
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

    // Scroll to top when clicking on bottom arrow
    $(".arrow-up").click(function() {
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 1000);
    });

    StartReviewSlider();
    


// Burger menu on-click
$(".burger-menu").click(function() {
    var burgerMenu = $(this);
    var navbar = $(".navbar nav");
    

    if(burgerMenu.hasClass("expanded")) {
        burgerMenu.removeClass("expanded");
        navbar.removeClass("expanded");
        $("body").css("overflow-y", "scroll");
    } else {
        burgerMenu.addClass("expanded");
        navbar.addClass("expanded")
        $("body").css("overflow-y", "hidden");
    }
});

$("nav ul li a").click(function() {
    $("nav").removeClass("expanded");
    $(".burger-menu").removeClass("expanded");
})

});