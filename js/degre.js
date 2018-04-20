$(document).ready(function(){

  var tab = [];
  var question = 0;
  var indice = 3;
  // Requête Ajax pour récupérer toutes les information en BDD//
  $('#playGameSearch').click(function(){
    $.ajax({
      type: "GET",
      url: "../jeux2.php",
      dataType : "json",  
      error:function(msg, string){
        alert( "Error !: " + string );
      },  
      success:function(data){
        tab = data;
        tab.sort();
        $("<div id='elementPage'><p>Indice restant: <span id='soldeClue'>"+indice+"<span></p><img src='/img/"+tab[question].image+"'><br/><p>Caractères: "+tab[question].caractere+"<p><input type='text' name='answer'><br/><br/><p id='resultError'></p></div>").appendTo('#gamesOfPlaces');
        $('input[name=answer]').keypress(function(e){
          if (e.which == 13){
            var result = $(this).val();
            checkAnswer(tab[question].nom, result)
          }
        })
      }
    });
    $(this).css("display", "none");
  })
  // vérification des réponses //
  function checkAnswer(solution, answer){
    if(solution === answer){
      $('#resultError').html('');
      diplayElement();
    }else{
      $('#resultError').html('Ce n\'est pas la bonne réponse');
    }
  }
  //Indice //
  $('input[name=clue]').click(function(){
    if(indice > 0){
      $('#clue').html(tab[question].indice);
      indice --;
      $('#soldeClue').html(indice);
      if(indice === 0){
        $('input[name=clue]').css("display", "none");
      }
    }else{
      $('#resultError').html('Vous n\'avez plus d\'indices');
    }
  })
  // Affichage des éléments à trouver //
  function diplayElement(){
    question++;
    if(question < 10){
      $('div').remove('#elementPage');
      $("<div id='elementPage'><p>Indice restant: "+indice+"</p><img src='/img/"+tab[question].image+"'><br/><p>Caractères: "+tab[question].caractere+"<p><input type='text' name='answer'><br/><br/><p id='resultError'></p></div>").appendTo('#gamesOfPlaces');
      $('input[name=answer]').keypress(function(e){
        if (e.which == 13){
          var result = $(this).val();
          checkAnswer(tab[question].nom, result)
        }
      })
    }
  }

});