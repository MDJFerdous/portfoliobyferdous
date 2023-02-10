// MIXITUP

var mixer = mixitup('.mixitup-container');

//SCROLLIFY
$(function() {
    $.scrollify({
      section : ".our-scrollify",
      setHeights: false,
      updateHash: false,
    });
  });

  // HAMBARGER NAVIGATION

  function openMenu(){
    document.getElementById('menu-container').style.height="100vh";
  }
  function closeMenu(){
    document.getElementById('menu-container').style.height="0%";
  }

  // SMOOTH SCROLL
  $(function(){
    $('.menu-item a, .scroll-down a').on('click', function(){
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 1000);
      return false;
    })
  });