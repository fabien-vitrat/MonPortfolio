var navBar = $("#topNav");
var hdrHeight = $("#section_presentation").height();


$(window).scroll(function() {
  if( $(this).scrollTop() > hdrHeight + 50) {
    navBar.addClass("navScrolled");
  } else {
    navBar.removeClass("navScrolled");
  }
});

// Quelques liens :
// - https://codepen.io/desirecode/pen/PpooJw
// - https://codepen.io/jrrio/details/GWmMKN
// - https://codepen.io/aaronguernsey/pen/NrvdGx (le meilleur)