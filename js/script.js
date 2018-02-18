StartMainSlider();

// Calculate if image if tall or wide
$(document).ready(function(){
    $('.packages').find('img').each(function(){
     var imgClass = (this.width/this.height > 1) ? 'wide' : 'tall';
     $(this).addClass(imgClass);
    })
})