$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 700) {
            $(".pa1").addClass("active");
        } else {
           $(".pa1").removeClass("active");
        }
        if($(window).scrollTop() > 1500) {
            $(".pa2").addClass("active");
        } else {
           $(".pa2").removeClass("active");
        }
        if($(window).scrollTop() > 2000) {
            $(".pa3").addClass("active");
        } else {
           $(".pa3").removeClass("active");
        }
        if($(window).scrollTop() > 3000) {
            $(".pa4").addClass("active");
        } else {
           $(".pa4").removeClass("active");
        }
        if($(window).scrollTop() > 3800) {
            $(".pa5").addClass("active");
        } else {
           $(".pa5").removeClass("active");
        }
        if($(window).scrollTop() > 4200) {
            $(".pa6").addClass("active");
        } else {
           $(".pa6").removeClass("active");
        }
        if($(window).scrollTop() > 4900) {
            $(".pa7").addClass("active");
        } else {
           $(".pa7").removeClass("active");
        }
        if($(window).scrollTop() > 5400) {
            $(".pa8").addClass("active");
        } else {
           $(".pa8").removeClass("active");
        }
        if($(window).scrollTop() > 6000) {
            $(".pa9").addClass("active");
        } else {
           $(".pa9").removeClass("active");
        }
        if($(window).scrollTop() > 6500) {
            $(".pa10").addClass("active");
        } else {
           $(".pa10").removeClass("active");
        }
        if($(window).scrollTop() > 7400) {
            $(".pa11").addClass("active");
        } else {
           $(".pa11").removeClass("active");
        }
        if($(window).scrollTop() > 7900) {
            $(".pa12").addClass("active");
        } else {
           $(".pa12").removeClass("active");
        }
        

    });



    var f = document.getElementById('foo');
document.addEventListener('mousemove', function(ev){
    f.style.transform = 'translateY('+(ev.clientY-25)+'px)';
    f.style.transform += 'translateX('+(ev.clientX-25)+'px)';
},false);
});