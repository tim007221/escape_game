$(document).ready(function(){

var jeu = 'null';

$('#papiers').click(function(){
	/*alert('Lancement du mini-jeux');*/
	window.location.href = "../Escape_game/degre.php";

	jeu = 'ok';
})
$('#porte').click(function(){
	if(jeu === 'ok'){
		alert('Accès à la prochaine salle');
	}else{
		alert('Vous devez d\'abord réussir le mini-jeux');
	}
})

});