// Wow.js Function calling
new WOW().init();
//   styling nav bar on scrolling
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".navbar").css("background" , "rgba(20, 2, 0, 0.8)");
        }
        else{
            $(".navbar").css("background" , "rgba(0, 0, 0, 0)");  	
        }
    })
  })
  // owl 
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    animateIn: 'fadeInRightBig',
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1 
        },
        1000:{
            items:1
        }
    }
})
// Validator 
function validateForm(e) {
    e.preventDefault()
    var name = document.loginForm.name.value
    var password = document.loginForm.password.value
   if (name.length<=3){
    return alert(`Full name is required`)
   }
    else {
        return alert(`Your successfully subscribed`)
    }
   };
      