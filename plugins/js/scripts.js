/*---------------------------------------------
Template name:  BizBlog
Version:        1.0
Author:         ThemeLooks
Author url:     http://themelooks.com

NOTE:
------
Please DO NOT EDIT THIS JS, you may need to use "custom.js" file for writing your custom js.
We may release future updates so it will overwrite this file. it's better and safer to use "custom.js".

[Table of Content]

01: Background Image
02: Image To SVG
03: Searh Box
04: Navbar
05: Banner
06: Post Video Thumbnail
07: Owl Carousel Defaults
08: Preloader
09: Back To Top
10: Ajex Contact Form
----------------------------------------------*/

(function ($) {
  "use strict";

  /* 01: Background Image
  ==============================================*/
  var $bgImg = $('[data-bg-img]');
  $bgImg.css('background-image', function () {
    return 'url("' + $(this).data('bg-img') + '")';
  }).removeAttr('data-bg-img').addClass('bg-img');


  /* 02: Image To SVG
  ==============================================*/

  jQuery('img.svg').each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    jQuery.get(imgURL, function (data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg'); // Add replaced image's ID to the new SVG

      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      } // Add replaced image's classes to the new SVG


      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      } // Remove any invalid XML tags as per http://validator.w3.org


      $svg = $svg.removeAttr('xmlns:a'); // Check if the viewport is set, if the viewport is not set the SVG wont't scale.

      if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
      } // Replace image with new SVG


      $img.replaceWith($svg);
    }, 'xml');
  });


  /* 03: Searh Box
  ==============================================*/
  var searchOpen = $('.mobile-nav-menu .search-toggle-open');
  var searchClose = $('.mobile-nav-menu .search-toggle-close');
  var searchBox = $('.nav-search-box');

  searchOpen.on('click', function () {
    searchBox.addClass('show');
    $(this).addClass('hide');
    searchClose.removeClass('hide');
  });
  searchClose.on('click', function () {
    searchBox.removeClass('show');
    $(this).addClass('hide');
    searchOpen.removeClass('hide');
  });

  /* 04: Navbar
  ==============================================*/
  $(window).on('scroll', function () {
    navOnScroll();
  });

  function navOnScroll() {
    if ($(window).scrollTop() > 0) {
      $('.header-fixed').addClass('is-sticky fadeInDown animated');
    } else {
      $('.header-fixed').removeClass('is-sticky fadeInDown animated');
    }
  }

  navOnScroll();
  $('.mobile-nav-menu .nav-menu-toggle').on('click', function () {
    $('.nav-menu').toggleClass('show');
  });
  $('.nav-menu .menu-item-has-children a').on('click', function (e) {
    if ($(window).width() <= 991) {
      $(this).siblings('.sub-menu').addClass('show');
    }
  });

  var subToggle = function subToggle() {
    $('.nav-menu .menu-item-has-children a').each(function () {
      $(this).siblings('.sub-menu').prepend('<li class="sub-menu-close"> <i class="fa fa-long-arrow-left"></i> ' + $(this).siblings('.sub-menu').parent().children('a').text() + '</li>');
    });
  };

  subToggle();
  $('.nav-menu .menu-item-has-children .sub-menu .sub-menu-close').on('click', function () {
    $(this).parent('.sub-menu').removeClass('show');
  });

  function subMenu() {
    $('.nav-menu .menu-item-has-children .sub-menu').each(function () {
      if ($(window).width() > 991) {
        if ($(this).offset().left + $(this).width() > $(window).width()) {
          $(this).css({
            'left': 'auto',
            'right': '100%'
          });
        }
      }
    });
  }

  subMenu();
  $(window).resize(subMenu);


  /* 08: Preloader
  ==============================================*/
  $(window).on('load', function () {
    $('.preloader').fadeOut(2000);
  });

  /* 09: Back to Top
  ==============================================*/
  var $backToTopBtn = $('.back-to-top');

  if ($backToTopBtn.length) {
    var scrollTrigger = 400,
      // px
      backToTop = function backToTop() {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > scrollTrigger) {
          $backToTopBtn.addClass('show');
        } else {
          $backToTopBtn.removeClass('show');
        }
      };

    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
    $backToTopBtn.on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    });
  }

  /* 10: Ajax Contact Form
    ==============================================*/
  $('.my-contact-form-cover').on('submit', 'form', function (e) {
    e.preventDefault();

    var $el = $(this);

    $.post($el.attr('action'), $el.serialize(), function (res) {
      res = $.parseJSON(res);
      $el.parent('.my-contact-form-cover').find('.form-response').html('<span>' + res[1] + '</span>');
    });
  });
})(jQuery);
