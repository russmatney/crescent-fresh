$(document).ready(function(){

	
	$("#para").click(function(){
		$('#block').hide();
		$('.parallax').show();	

		$('#parallax .parallax-layer')
			.parallax({
			  mouseport: $('#parallax')
			});


	});

});


