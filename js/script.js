$(window).on("load",function(){

	$(".loader .inner").fadeOut(500, function() {
		$(".loader").fadeOut(750);

	});


})





$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play:5000,
		pagination: false
	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 4,
	   	
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	});

	

    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;
    $(window).scroll(function(){

    	if(window.pageYOffset > skillsTopOffset - $(window).height() + 200){

	    	$('.chart').easyPieChart({
	        easing: 'easeInOut',
	        barColor: '#fff',
	        trackColor: false,
	        scaleColor: false,
	        lineWidth: 4,
	        size: 152,
	        onStep: function(from, to, percent){
	        	$(this.el).find('.percent').text(Math.round(percent));
	        }
    	});


    	}

    	if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200){
    		$(".counter").each(function() {
		    	var element = $(this);
		    	var endVal = parseInt(element.text());

		    	element.countup(endVal);

		    })

		    countUpFinished = true;

    	}
    });


    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll",stickyNavigation);

    function stickyNavigation(){

    	var body = $("body");

    	if($(window).scrollTop()>= navTop){
    		body.addclass("fixedNav");
    	}
    	else {
    		body.removeClass("fixedNav");
    	}



    }


});









