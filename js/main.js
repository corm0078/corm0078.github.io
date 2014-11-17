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

menu.onclick = function() {
  removeClass(theToggle, 'on');
}


this.$el.on( 'mouseenter.hoverdir, mouseleave.hoverdir', function( event ) {
     
    var $el = $( this ),
        $hoverElem = $el.find( 'div' ),
        direction = self._getDir( $el, { x : event.pageX, y : event.pageY } ),
        styleCSS = self._getStyle( direction );
     
    if( event.type === 'mouseenter' ) {
         
        $hoverElem.hide().css( styleCSS.from );
        clearTimeout( self.tmhover );
 
        self.tmhover = setTimeout( function() {
             
            $hoverElem.show( 0, function() {
                 
                var $el = $( this );
                if( self.support ) {
                    $el.css( 'transition', self.transitionProp );
                }
                self._applyAnimation( $el, styleCSS.to, self.options.speed );
 
            } );
             
         
        }, self.options.hoverDelay );
         
    }
    else {
     
        if( self.support ) {
            $hoverElem.css( 'transition', self.transitionProp );
        }
        clearTimeout( self.tmhover );
        self._applyAnimation( $hoverElem, styleCSS.from, self.options.speed );
         
    }
         
} );

