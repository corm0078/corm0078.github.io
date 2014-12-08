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
      if($(window).scrollTop()>900){
         $(".background").fadeIn();
      }else{
         $(".background").fadeOut();
      }

});


(function() {
	var triggerBttn = document.getElementById( 'trigger-overlay' ),
		overlay = document.querySelector( 'div.overlay' ),
		closeBttn = overlay.querySelector( 'button.overlay-close' );
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };

	function toggleOverlay() {
		if( classie.has( overlay, 'open' ) ) {
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay, 'close' );
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add( overlay, 'open' );
		}
	}

	triggerBttn.addEventListener( 'click', toggleOverlay );
	closeBttn.addEventListener( 'click', toggleOverlay );
})();


( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );

(function(c,b,e){var d=b.Modernizr;c.CBPFWSlider=function(f,g){this.$el=c(g);this._init(f)};c.CBPFWSlider.defaults={speed:500,easing:"ease"};c.CBPFWSlider.prototype={_init:function(f){this.options=c.extend(true,{},c.CBPFWSlider.defaults,f);this._config();this._initEvents()},_config:function(){this.$list=this.$el.children("ul");this.$items=this.$list.children("li");this.itemsCount=this.$items.length;this.support=d.csstransitions&&d.csstransforms;this.support3d=d.csstransforms3d;var h={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},k={WebkitTransform:"-webkit-transform",MozTransform:"-moz-transform",OTransform:"-o-transform",msTransform:"-ms-transform",transform:"transform"};if(this.support){this.transEndEventName=h[d.prefixed("transition")]+".cbpFWSlider";this.transformName=k[d.prefixed("transform")]}this.current=0;this.old=0;this.isAnimating=false;this.$list.css("width",100*this.itemsCount+"%");if(this.support){this.$list.css("transition",this.transformName+" "+this.options.speed+"ms "+this.options.easing)}this.$items.css("width",100/this.itemsCount+"%");if(this.itemsCount>1){this.$navPrev=c('<span class="cbp-fwprev">&lt;</span>').hide();this.$navNext=c('<span class="cbp-fwnext">&gt;</span>');c("<nav/>").append(this.$navPrev,this.$navNext).appendTo(this.$el);var l="";for(var g=0;g<this.itemsCount;++g){var f=g===this.current?'<span class="cbp-fwcurrent"></span>':"<span></span>";l+=f}var j=c('<div class="cbp-fwdots"/>').append(l).appendTo(this.$el);this.$navDots=j.children("span")}},_initEvents:function(){var f=this;if(this.itemsCount>1){this.$navPrev.on("click.cbpFWSlider",c.proxy(this._navigate,this,"previous"));this.$navNext.on("click.cbpFWSlider",c.proxy(this._navigate,this,"next"));this.$navDots.on("click.cbpFWSlider",function(){f._jump(c(this).index())})}},_navigate:function(f){if(this.isAnimating){return false}this.isAnimating=true;this.old=this.current;if(f==="next"&&this.current<this.itemsCount-1){++this.current}else{if(f==="previous"&&this.current>0){--this.current}}this._slide()},_slide:function(){this._toggleNavControls();var g=-1*this.current*100/this.itemsCount;if(this.support){this.$list.css("transform",this.support3d?"translate3d("+g+"%,0,0)":"translate("+g+"%)")}else{this.$list.css("margin-left",-1*this.current*100+"%")}var f=c.proxy(function(){this.isAnimating=false},this);if(this.support){this.$list.on(this.transEndEventName,c.proxy(f,this))}else{f.call()}},_toggleNavControls:function(){switch(this.current){case 0:this.$navNext.show();this.$navPrev.hide();break;case this.itemsCount-1:this.$navNext.hide();this.$navPrev.show();break;default:this.$navNext.show();this.$navPrev.show();break}this.$navDots.eq(this.old).removeClass("cbp-fwcurrent").end().eq(this.current).addClass("cbp-fwcurrent")},_jump:function(f){if(f===this.current||this.isAnimating){return false}this.isAnimating=true;this.old=this.current;this.current=f;this._slide()},destroy:function(){if(this.itemsCount>1){this.$navPrev.parent().remove();this.$navDots.parent().remove()}this.$list.css("width","auto");if(this.support){this.$list.css("transition","none")}this.$items.css("width","auto")}};var a=function(f){if(b.console){b.console.error(f)}};c.fn.cbpFWSlider=function(g){if(typeof g==="string"){var f=Array.prototype.slice.call(arguments,1);this.each(function(){var h=c.data(this,"cbpFWSlider");if(!h){a("cannot call methods on cbpFWSlider prior to initialization; attempted to call method '"+g+"'");return}if(!c.isFunction(h[g])||g.charAt(0)==="_"){a("no such method '"+g+"' for cbpFWSlider instance");return}h[g].apply(h,f)})}else{this.each(function(){var h=c.data(this,"cbpFWSlider");if(h){h._init()}else{h=c.data(this,"cbpFWSlider",new c.CBPFWSlider(g,this))}})}return this}})(jQuery,window);


