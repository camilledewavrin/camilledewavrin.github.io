$(document).ready(function(){
    $(window).scroll(function(){
        var heightpixel = $(window).scrollTop();
 
        if( heightpixel > 680 )
        {
            $("#navbar").fadeIn("slow");
            $("#navbar").css({'display':'initial'});
            //$(".navbar-default .navbar-nav > li > a").css({'color':'#FFF'});
            //$('#navbar').animate({ 'height': '60'}, {duration : 200, queue : false});
        } else {
            $("#navbar").fadeOut("slow");
            //$("#navbar").css({'display':'none'});
        }
    });
});
