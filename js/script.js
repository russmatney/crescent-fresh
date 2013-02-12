$(document).ready(function(){

	$('#code ul li').hide();

	$('#hide500').click(function(){
		$('#block').show();
		$('#block').hide(500);

	});

	$('#show500').click(function(){
		$('#block').show(500);
	});

	// $('#RevFromBot').click(function(){
	// 	$('#block').hide();
	// 	$('#block').css({'height':'0','float':'left'});
	// 	$('#block').show();
	// 	$('#block').animate({'height':'80px'}, 500);
	// });

	$('#RevFromTop').click(function(){
		$('#block').hide();
		$('#block').css({'height':'0','float':'left'});
		$('#block').show();
		$('#block').animate({'height':'80px'}, 500);

	});

	$('#RevFromLeft').click(function(){
		$('#block').hide();
		$('#block').css({'width':'0','float':'left'});
		$('#block').show();
		$('#block').animate({'width':'300px'}, 500);
	});

	$('#RevFromRight').click(function(){

		$('#block').hide();
		$('#block').css({'width':'0','float':'right'});
		$('#block').show();
		$('#block').animate({'width':'300px'}, 500);

	});


	var snowOn = false;

	$('#snow').click(function(){
		if(snowOn === false) {
			snowPlease(true);
        	snowOn = true;
		} else {
			snowOn = false;
		} 
  	});

	$('#demoButtons button').click(function(){
		$('.parallax').hide();

		$.snow({
    		flake_number: 0
    	});

    	snowPlease(false);



		showCode(this);
	});


});

var showCode = function(e){
	var a = $(e).attr('id');
	var b = '' + a + 'Code';
	$('#code ul li').hide();
	$('#'+b+'').show();	
};

var snowPlease = function(snowNow){
	if(snowNow === true) {
		$.snow({
    		flake_number: 100,
            flake_folder: 'js/big-24/',
            flake_imgs: 5,
            linked_flakes: 0,
            link: '',
            melt: 450,
            wind: 70,
            rotation: 5,
            speed: 10
    	});
	} else {
		$.snow({
    		flake_number: 0
    	});
	}
};