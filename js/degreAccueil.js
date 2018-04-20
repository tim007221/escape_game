$(document).ready(function(){

var jeu = 'null';

$('#papiers').click(function(){
	alert('Lancement du mini-jeux');
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