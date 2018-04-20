$(document).ready(function(){
	alert('VTT, Allumettes, Tente, Carte Michelin, Lampe Torche')

var elementFind = 0;
for(var i=1; i <= 5; i++){
  $('#elementHidden'+i).click(function(){
    elementFind++;
    $(this).css('display', 'none');
    if(elementFind === 5){
      alert('Félicitations, vous avez trouvé tous les éléments');
       window.location.href = "../Escape_game/end.html";
    }
  })
} 
});