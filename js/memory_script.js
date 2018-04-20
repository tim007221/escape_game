$("#closeCross").hide(0);

$(document).ready(function(){


var tab = [];
var carteUne;
var idCarteUne;
var nameCarteUne;
var carteDeux;
var idCarteDeux;
var nameCarteDeux;
var tour =0;
var coup =0;
var reussite=0;

  for(var i=1; i <= 26; i++){
    $('#carte'+i).click(function(){
      tour++;
      coup++;
      var infosCarte = $(this).attr('data-carte');
      var idCarte= $(this).attr('id');
      var nameCarte = $(this).attr('class');
      $(this).css('zIndex', 2)
      if(coup === 1){
        carteUne = infosCarte;
        idCarteUne = idCarte;
        nameCarteUne = nameCarte;
      }
      if(coup === 2){
        carteDeux = infosCarte;
        idCarteDeux = idCarte
        nameCarteDeux = nameCarte;
        setTimeout(function(){
          if(carteUne === carteDeux){
            $('.'+nameCarteUne).css('display', 'none');
            $('.'+nameCarteDeux).css('display', 'none');
            reussite++;
            coup = 0;
            if(reussite === 6){
              $("#closeCross").show(0);
              alert('tu as gagné')
            }
          }else{
            $('#'+idCarteUne).css('zIndex', 5);
            $('#'+idCarteDeux).css('zIndex', 5);
            coup = 0;
          }
        }, 330);
      }
    }) 
  }

$("#closeCross").click(function() {
 alert('Félicitation, ----15--');
window.location.href = "../Escape_game/candy.html";
});

  
});