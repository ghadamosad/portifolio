$(document).ready(function(){
    
    var typed = new Typed(".animate", {
            strings: [
                " designer." ,
                " developer." ,
                " freelancer."
            ] ,
                typeSpeed:100,
                backSpeed:100,
                loop:true
            });
    /* active im menu*/
   $('nav .menu li a').click(function(){
     $(this).parent().addClass('active').siblings().removeClass('active');
        
       $('body,html').animate({
          
           scrollTop :$($(this).attr('href')).offset().top -80 
        });
       
   });
    /* plaugin countto*/
    
    $(window).scroll(function(){
       
        var sc = $(this).scrollTop();
        
        // count to plungin
        if(sc > 1020){
            $('.timer').countTo();
            $(window).off('scroll');
        }
        if(sc > 1000 ){
            $('.pro-bar .bar').each(function(){
                $(this).css("width" , $(this).attr('data-progress') + '%'); 
            });
        }
    });
    /*progress-bar*/
     
    /* owl carousel*/
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
}); 

    $('.Portfolio ul li').click(function(){
       
        $(this).addClass('port-active').siblings().removeClass('port-active');
        
        var Filter=$(this).attr('id');
        
        if(Filter === "all"){
            $('.port > div').fadeIn();
        } else{
            $('.port > div').fadeOut();
            $('.port').contents().filter('.' + Filter).fadeIn();
        }
        
    });
    
    
  /*  $('.btn1').click(function(){
       
        $(this).fadeOut(500);
        $(this).parent().find('nav').animate({left:0},500);
        $(this).next().animate({display:'block'},500);
    }); */
    
    
    
    
    
   /* new WOW().init();*/
    
    
    
   
    
    
    
    
    
    
});