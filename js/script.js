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



	$('#snow').click(function(){
		
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
  	
  	});

  	$('#ashes').click(function(){
		
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
  	
  	});

	$('#demoButtons button').click(function(){
		$('.parallaxBlock').hide();

		showCode(this);
	});


});

var showCode = function(e){
	var a = $(e).attr('id');
	var b = '' + a + 'Code';
	$('#code ul li').hide();
	$('#'+b+'').show();	
};