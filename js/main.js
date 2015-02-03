var theToggle = document.getElementById('toggle');
var menu = document.getElementById('menu');
var menuitem = document.getElementsByClassName('menuitem');

// based on Todd Motto functions
// http://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;  
}



$('#menu a').on('click', function () {
  removeClass(theToggle, 'on');
});


$(window).scroll(function(){
      if($(window).scrollTop()>700){
         $(".background").fadeIn();
      }else{
         $(".background").fadeOut();
      }

});


$(".lb-album li a:first-child") .on("click",function(){
    $("html").css("overflow","hidden")
    
})


$(".lb-close") .on("click",function(){
    $("html").css("overflow","auto")
    
})


$(document).ready(function(){

    //global variables
    var $timer = 0;
    var $counter;

    function expand(e) {
        $timer += 500;

        if ($timer == 1500){
            clearInterval($counter);
            $timer = 0;
            e.addClass('expand');
        }
    }

    $('#deepGallery ul li a').hover(function(){
        var $e = $(this);
        $counter = setInterval(function() {
            expand($e);
        }, 500);
    }, function() {
        clearInterval($counter);
        $timer = 0;
        $(this).removeClass('expand');
    });
});