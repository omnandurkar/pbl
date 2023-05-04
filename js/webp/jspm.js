window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 320 || document.documentElement.scrollTop > 320) {
    document.getElementById("navbar-magic").style.top = "0";
  } else {
    document.getElementById("navbar-magic").style.top = "-160px";
  }
}



$(document).ready(function () {

    // click to scroll top
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();


});