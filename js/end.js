$(document).ready(function(){

	var idClef = 'non';
	var idHache = 'non';
	$('#cafe_plein').click(function(){
		$(this).css('display', 'none');
	})
	$('#bureau').click(function(){
		var answer = prompt('Code du bureau');
		if(answer === '418'){
			alert('Félicitation, tu as trouvé une clef --sa--15');
			idClef = 'ok';
			document.cookie = "idClef=clefTrouver"; "expires=Tue, 19 Jan 2038 03:14:07 UTC";
		}else {
			alert('Mauvaise code chercher mieux');
		}
	})
	$('#joconde').click(function(){
		$(this).css('display', 'none');
	})
	$('#coffre_fort').click(function(){
		var answer = prompt('Code du bureau')
		if(answer === 'lisa1515'){
			alert('Félicitation, tu as trouvé une hache');
			idHache = 'ok';
			document.cookie = "idHache=hacheTrouver"; "expires=Tue, 19 Jan 2038 03:14:07 UTC";
		}else {
			alert('Mauvaise code chercher mieux');
		}
	})
	$('#biblio').click(function(){
		if(idHache === 'ok'){
			$(this).css('display', 'none');
		}else{
			alert('Tu dois d\'abord trouver une hache');
		}
	})
	$('#ascenceur').click(function(){
		if(idClef === 'ok'){
			$("<audio autoplay='1' src='Sound/End.wav' volume='0.3'></audio>").appendTo('body');
			alert('Félicitation, tu as réussi l\'escape game');
		}else{
			alert('Tu dois d\'abord trouver une hache');
		}
	})
});