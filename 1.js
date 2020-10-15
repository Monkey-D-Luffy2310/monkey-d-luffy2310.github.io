 $(function(){
 	$(window).scroll(function(){
 		if($('html,body').scrollTop() > 200){
	 		$('.menu-left').addClass("maucam");
	 		$('.navbar').addClass("mautrang");
	 		$('.nav-link').addClass("black");
	 		$('.nutlen').addClass("len");
	 	}
	 	else{
	 		$('.menu-left').removeClass("maucam");
	 		$('.navbar').removeClass("mautrang");
	 		$('.nav-link').removeClass("black");
	 		$('.nutlen').removeClass("len");

	 	}
 	})
 	$('.nutlen').click(function() {
 		$('html,body').animate({'scrollTop':0})
 	});
 	var navs= document.querySelectorAll(".menu ul li a");
 	for(var i = 0; i< navs.length - 1; i++){
 		navs[i].onclick=function(){
	 		var link= document.querySelector(this.getAttribute('href'));
	 		window.scroll({
	 			top: link.offsetTop - 79,
	 			behavior: 'smooth'
	 		});
	 		event.preventDefault();
    	}
 	}
})  
 