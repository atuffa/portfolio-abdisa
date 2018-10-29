$(document).ready(function(){
   

    // Profile btn

    $('.profile-btn').on("click", function(){
        $(".profile-btn").css("background", "none")
    });
    
    // Fixed navbar at scroll

    $(window).scroll(function(){
        if($(window).scrollTop()>1000 && $(window).width() > 670){
            console.log($(window).width())
            $('nav').addClass('sticky-nav');
        }else if($(window).scrollTop()>500 && $(window).width() < 670){
            console.log($(window).width())
            $('nav').addClass('sticky-nav');
        }
        else{
            $('nav').removeClass('sticky-nav');
        }
    });

   
    // Materalize intializations

    $(".sidenav").sidenav();
    $('.collapsible').collapsible();
    $('.tabs').tabs();
    $('.tooltipped').tooltip();
    $('.scrollspy').scrollSpy({
        scrollOffset:0,
        activeClass:'activeNav'
    });

});