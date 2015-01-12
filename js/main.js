$(document).ready(function(){
	var $this = $(this);
	
	$('.contact-info a').click(function(e){
		e.preventDefault();
	});

	$('#go-top a').click(function(e){
		e.preventDefault();
	});

	
	$this.find('.contact-info').on('click', function(){
		$('html, body').animate({scrollTop:$('#contact').position().top}, 'slow');
	})

	$this.find('#go-top a').on('click', function(){
		$('html, body').animate({scrollTop:$('header').position().top}, 'slow');
		$(this).hide();
	});

	
		

})