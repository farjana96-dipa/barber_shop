
// sticky navbar
$(document).ready(function(){
  
    $(window).scroll(function(){
      if($(window).scrollTop() > 150 ){
      $('nav').addClass('navbar-scroll');
      }
      else{
            $('nav').removeClass('navbar-scroll');
      }
     });

});
// owl carousel 2
$('.owl-2.owl-carousel').owlCarousel({
      
      items:2,
      loop:true,
      autoplay: false,
      dots:false,
      nav:true,
      margin:30,
      responsive:{
      	0:{
      		items:1
      	},
      	576:{
      		items:1
      	},
      	768:{
      		items:2
      	},
      	992:{
      		items:2
      	},
      }
    });
// owl carousel
$('.owl-1.owl-carousel').owlCarousel({
      
      items:3,
      loop:true,
      autoplay: false,
      dots:false,
      nav:true,
      margin:30,
      responsive:{
      	0:{
      		items:1
      	},
      	576:{
      		items:1
      	},
      	768:{
      		items:2
      	},
      	992:{
      		items:3
      	},
      }
    });


// owl carousel 2
// PRELOADER
/*
$(document).ready(function(){
function loadingDone(){
	element = document.getElementById('loadingArea');
	element.classList.add('done');
}
window.onload=loadingDone;
});
*/

    

// SCROLLUP BUTTON 

const scrollUp = document.querySelector('.scrollUp');
window.addEventListener('scroll', () => {
  if(window.pageYOffset > 300){
    scrollUp.classList.add('active');
  }
  else{
    scrollUp.classList.remove('active');
  }
});