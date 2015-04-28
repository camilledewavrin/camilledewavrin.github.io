$(document).ready(function() {

			var changeClass = function (r,className1,className2) {
				var regex = new RegExp("(?:^|\\s+)" + className1 + "(?:\\s+|$)");
				if( regex.test(r.className) ) {
					r.className = r.className.replace(regex,' '+className2+' ');
			    }
			    else{
					r.className = r.className.replace(new RegExp("(?:^|\\s+)" + className2 + "(?:\\s+|$)"),' '+className1+' ');
			    }
			    return r.className;
			};	

			var menuElements = document.getElementById('menu');
			menuElements.insertAdjacentHTML('afterBegin','<button type="button" id="menutoggle" class="navtoogle" aria-hidden="true"><i aria-hidden="true" class="icon-menu"> </i> Menu</button>');

			document.onclick = function(e) {
				var mobileButton = document.getElementById('menutoggle'),
					buttonStyle =  mobileButton.currentStyle ? mobileButton.currentStyle.display : getComputedStyle(mobileButton, null).display;
			if(buttonStyle === 'block' && e.target !== mobileButton && new RegExp(' ' + 'active' + ' ').test(' ' + mobileButton.className + ' ')) {
					changeClass(mobileButton, 'navtoogle active', 'navtoogle');
				}
			}

			document.getElementById('menutoggle').onclick = function() {
				changeClass(this, 'navtoogle active', 'navtoogle');
			}

				/*			FONCTION DE SCROLL		*/
			var scrolling = function(){
            var speed    = 1050;
            jQuery('a[href^="#"]').bind('click',function(){
                 var name = jQuery(this).attr('href');
                 if(name == '#')
                     goTo('body');
                 else
                     goTo(name);
                 return(false);
                void(0);
            });
            function goTo(ancre){jQuery('html,body').animate({scrollTop:jQuery(ancre).offset().top},speed,'swing',function(){
                   if(ancre != 'body')
                         window.location.hash = ancre;
                   else
                       window.location.hash = '#';
                   jQuery(ancre).attr('tabindex','-1');
                   jQuery(ancre).focus();
                   jQuery(ancre).removeAttr('tabindex');
               });
             }
         };
         jQuery(function(){
            scrolling();
         });
	
});