$(document).ready(function(){

	var messageAudio = 'null';
	$('#telephone').click(function(){
		alert('Message audio');
		messageAudio = 'ok';
	})
	$('#tapis').click(function(){
		if(messageAudio === 'null'){
			alert('Le téléphone sonne répondez!')
		}else{
			$(this).css('display', 'none');
		}
	})
	$('#trappe').click(function(){
		/*page avec le jeux*/
		window.location.href = "../Escape_game/card_slide.html";

	})

});