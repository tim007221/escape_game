$(document).ready(function(){

var jeu = 'null';
var etoile = 'null';
$('#cartes').click(function(){
	window.location.href = "../Escape_game/memory.html";
	jeu = 'ok';
})
$('#coffre').click(function(){
	if(jeu === 'ok'){
		alert('Vous trouvez une étoile dans le coffre ainsi qu\'un morceau de papier ou on peut lire l et 5');
		etoile = 'ok';
	}else{
		alert('Vous devez reussir le mini-jeux pour ouvrir le coffre');
	}
})
$('#porte').click(function(){
	if(etoile === 'ok'){
		/*alert('Vous passez dans la prochaine salle');*/
		window.location.href = "../Escape_game/degre.html";


	}else{
		alert('Il vous faut une étoile pour ouvrir la porte');
	}
})

});