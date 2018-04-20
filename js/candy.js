$(document).ready(function(){


var jeu = 'null';
$('#tablette').click(function(){
	/*alert('Lancement mini-jeux');*/
	 window.location.href = "../game.html";
	jeu = 'ok';
})
$('#porte').click(function(){
	if(jeu === 'ok'){
		/*alert('Prochaine salle');*/
		window.location.href = "../grenier.html";
	}else{
		alert('Vous devez d\'abord finir le mini-jeux');
	}
})
});

