$(document).ready(function(){


var jeu = 'null';
$('#tablette').click(function(){
	alert('Lancement mini-jeux')
	jeu = 'ok';
})
$('#porte').click(function(){
	if(jeu === 'ok'){
		alert('Prochaine salle');
	}else{
		alert('Vous devez d\'abord finir le mini-jeux');
	}
})
});