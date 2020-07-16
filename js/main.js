//====== my slide

$("#myslide").carousel({
  interval: 100000,
});
$("#Testimonials").carousel({
  interval: 3000,
});
$("body").css("paddingTop", $(".navbar-inverse").innerHeight());
$(window).resize(function () {
  $("body").css("paddingTop", $(".navbar-inverse").innerHeight());
});
// ====== Tooltip

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});


function mdlg() {

  
if ($(window).innerWidth() > 992) {
  
   // ====== Show Our Skils
  
  var statisticeseoff = ($('.main-statistices').offset().top) ;
  $(window).scroll(()=>{
      console.log($(window).scrollTop());
      console.log(statisticeseoff);
      console.log($(window).scrollTop());
      if ($(window).scrollTop() > statisticeseoff ) {
          window.setTimeout(()=>{
            $('.html .progress-bar').css('width','95%');
            $('.css .progress-bar').css('width','97%');
            $('.javascript .progress-bar').css('width','90%');
          },500);
      }
  });
  
  
}

};

/* Start Small and mobile media */
function sm() {
  
  if ($(window).innerWidth() > 769  &&  $(window).innerWidth() < 992) {
    
     // ====== Show Our Skils
    
    var statisticeseoffsm = ($('.main-statistices').offset().top) + $('.main-statistices').innerHeight() ;
    $(window).scroll(()=>{
        if ($(window).scrollTop() > statisticeseoffsm - 500 ) {
            window.setTimeout(()=>{
              $('.html .progress-bar').css('width','95%');
              $('.css .progress-bar').css('width','97%');
              $('.javascript .progress-bar').css('width','90%');
            },500);
        }
    });
    
    
  }
    

}
/* End Small and mobile media */


/* Start Small and mobile media */
function xs() {
  
  if ($(window).innerWidth() < 769 ) {
  

    
     // ====== Show Our Skils
    
    var statisticeseoffxs = ($('.main-statistices').offset().top) + $('.main-statistices').innerHeight() ;
    $(window).scroll(()=>{
        if ($(window).scrollTop() > statisticeseoffxs - 600 ) {
            window.setTimeout(()=>{
              $('.html .progress-bar').css('width','95%');
              $('.css .progress-bar').css('width','97%');
              $('.javascript .progress-bar').css('width','90%');
            },500);
        }
    });
    
    
  }
    

}
/* End Small and mobile media */

$(document).ready(()=>{
  xs();
  sm();
  mdlg();
  $("html").niceScroll({
    cursorcolor:"var(--color)",
    cursorwidth:"10px",
    background:"#000",
    cursorborder:"none",
    cursorborderradius:0
  });
});

$(window).resize(()=>{
  xs();
  sm();
  mdlg();
});

//colors box
let colorssp = document.querySelectorAll(".box-colors span");
  colorssp.forEach((span) => {
    $(span).click((e) => {
      document.documentElement.style.setProperty(
        "--color",
        e.target.dataset.color
      );
      $(".c-active").removeClass("c-active");
      $(span).addClass("c-active");
    });
  });

$('.close-b').click(()=>{
    $('.close-b i').toggleClass('close-active');
    $('.setting-box').toggleClass('setting-o');
});
$('a').click((e)=>{
  e.preventDefault();
});

$(window).load(function(){
  
  window.setTimeout(()=>{
    $('.load-screen .spinner p').fadeOut('slow',()=>{
      $('.load-screen').fadeOut('slow');
    });
  },2000);

});







