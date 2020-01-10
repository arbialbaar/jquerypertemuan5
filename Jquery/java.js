$(document).ready(function(){
    $("#hide").click(function(){
        $(".halo1").animate({
            left: '500px',
            top: '200px',
            height: '400px',
            width: '400px'
        }, 5000);
        $("center").animate({
            opacity: '100%',
            fontSize: '60px'
        }, 5000);
    });
    $("#left").click(function(){
        $(".halo2").animate({
            left: '590px'
        }, 1500);
    });
    $("#data3").click(function(){
        $(".halo3").animate({
            left: '+=50px',
            top: '+=50px'
        });
    });
    
});