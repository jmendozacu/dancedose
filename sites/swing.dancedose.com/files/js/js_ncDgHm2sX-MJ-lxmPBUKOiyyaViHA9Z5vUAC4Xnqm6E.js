(function($) {

  "use strict";

  $.fn.mobileMenu = function(options) {

    var settings = $.extend({
      targetWrapper: '.navbar-we-mega-menu',
      accordionMenu: 'true',
      toggledClass : 'toggled'
    }, options);

    if ($(window).width() <= 991) {
      $(settings.targetWrapper).addClass('mobile-main-menu');
    }

    var toggleButton = this;

    $(window).resize(function() {
      if ($(window).width() <= 991) {
        $(settings.targetWrapper).addClass('mobile-main-menu');
      } else {
        $(settings.targetWrapper).removeClass('mobile-main-menu');
        $('html, body').css('overflow', '');
        $('html, body').css('height', '');
        $('html, body').css('position', '');
        $(settings.pageSelector).removeClass(settings.toggledClass);
        $(settings.pageSelector).find('.overlay').remove();
        $(settings.pageSelector).css('position', '');
        item.removeClass('open');
        item.find('ul').css('display', '');
      }
    });

    this.off('click.mobileMenu');
    this.on('click.mobileMenu', function(e) {
      var wrapper = $(settings.pageSelector);
      if (!wrapper.hasClass(settings.toggledClass)) {
        wrapper.addClass(settings.toggledClass).css('position', 'relative');
        $(settings.targetWrapper).addClass('mobile-main-menu');
        if (wrapper.find('.overlay').length == 0) {
          var overlay = $('<div class="overlay"></div>');
          overlay.prependTo(wrapper);
          overlay.click(function() {
            toggleButton.trigger('click');
          });
          $('html, body').css('overflow', 'hidden');
          $('html, body').css('btn-close', 'hidden');
          $('html, body').css('height', '100%');
          $('html, body').css('position', 'relative');
        }
        if (wrapper.find('.btn-close').length == 0) {
          var btnClose = $('<span class="btn-close"></span>');
          btnClose.prependTo(wrapper);

          $('.btn-close').on('click', function(e) {
            toggleButton.trigger('click');
            e.preventDefault();
            return false;
          });
        }

      } else {
        var overlay = wrapper.find('.overlay');
        wrapper.css({
          'width': '',
          'position': ''
        });
        wrapper.removeClass(settings.toggledClass);

        if (overlay.length > 0) {
          wrapper.find('.btn-close').remove();
          overlay.remove();
          $('html, body').css('overflow', '');
          $('html, body').css('height', '');
          $('html, body').css('position', '');
        }
      }
      e.preventDefault();
      e.stopPropagation();
    });

    if (settings.accordionMenu == 'true') {
      var menu = $(settings.targetWrapper).find('ul.we-mega-menu-ul').first();
      var item = menu.find('> li[data-submenu=1]');
      var item_active = menu.find('> li[data-submenu=1].active');
      if ($(window).width() <= 991) {
        item_active.addClass('open');
        item_active.find('> ul').css('display', 'block');
      }
      item.click(function() {
        if ($(window).width() <= 991) {
          var $this = $(this);
          var $sub_menu_inner = $this.find('> .we-mega-menu-submenu');
          if (!$this.hasClass('open')) {
            $(item).not($this).removeClass('open');
            item.find('> .we-mega-menu-submenu').slideUp();
            $this.toggleClass('open');
            if ($this.hasClass('open')) {
              $sub_menu_inner.slideDown();
              setTimeout(function() {
                $(settings.targetWrapper).animate({
                  scrollTop: $this.offset().top
                }, 700);
              }, 500);

            } else {
              $sub_menu_inner.slideUp();
            }
            return false;
          }
        }
      });
    }
  }

}(jQuery));
;
Drupal.WeMegaMenuFrontEnd = Drupal.WeMegaMenuFrontEnd || {};
Drupal.WeMegaMenuFrontEnd.mobileThreadHold = 1024;
Drupal.WeMegaMenuFrontEnd.megamenuActivated = false;

(function ($, Drupal, drupalSettings) {
  "use strict";

  Drupal.behaviors.kMegaMenuFrontEndAction = {
    attach: function (context) {
      $(window).on('load', function() {
        Drupal.WeMegaMenuFrontEnd.init();
        Drupal.WeMegaMenuFrontEnd.mobileMenu();
      })
    }
  };

  Drupal.WeMegaMenuFrontEnd.init = function() {
    if(Drupal.WeMegaMenuFrontEnd.megamenuActivated) {
      return;
    }
    Drupal.WeMegaMenuFrontEnd.megamenuActivated = true;
  	var megamenu = $('nav.navbar-we-mega-menu');
  	if(megamenu.hasClass('click-action')) {
  	  megamenu.find('ul li.dropdown-menu > a').click(function() {
  	  	var li = $(this).closest("li");

  	  	if(li.hasClass("clicked")) {
          li.closest('ul').find('li').removeClass('clicked');
          li.closest('.we-mega-menu-row').find('li').removeClass('clicked');
  	  	  li.removeClass("clicked");
          megamenu.removeClass("has-clicked");
  	  	} else {
          li.closest('ul').find('li').removeClass('clicked');
          li.closest('.we-mega-menu-row').find('li').removeClass('clicked');
	  	    li.closest("ul").children("li.dropdown-menu").removeClass("clicked");
  		    li.addClass("clicked");
          megamenu.addClass("has-clicked");
  	  	}
        if($(window).outerWidth() > Drupal.WeMegaMenuFrontEnd.mobileThreadHold) {
          return false;
        }
  	  });
  	  megamenu.find('ul li.dropdown-menu > a').dblclick(function() {
        if($(window).outerWidth() > Drupal.WeMegaMenuFrontEnd.mobileThreadHold) {
    	  	window.location.href = $(this).attr("href");
        }
  	  });
      megamenu.click(function(event) {
        event.stopPropagation();
      })
      $("body").click(function() {
        megamenu.find("ul li.dropdown-menu.clicked").removeClass('clicked');
        megamenu.removeClass("has-clicked");
      });
  	}
  };

  Drupal.WeMegaMenuFrontEnd.mobileMenu = function() {
      $('#menu-toggle').mobileMenu({
          pageSelector: 'body',
          targetWrapper: '.navbar-we-mega-menu'

      });
  };
})(jQuery, Drupal, drupalSettings);;
