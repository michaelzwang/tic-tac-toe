$(document).ready(function() {

  var game = null;

  $('#start-button').click(function(event){
    event.preventDefault();
    $(this).hide("slow");
    $('.cell').addClass('unclicked');
    $('.cell').text("");
    $('#winner-container').find('h2').html("");
    $('#winner-container').hide("slow");
    $('#players-container').removeClass('hidden');
    game = new Game(new Player("michael"), new Player("jack"));
    $('#playerX-name').html(game.players.X.username);
    $('#playerO-name').html(game.players.O.username);
    game.next_turn();
    $('#current-player').html(game.current_player.username);
    $('#turn').show();
  });

  $('.cells').on('click', '.unclicked', function(event){
    event.preventDefault();
    $(this).text(game.current_player.letter);
    $(this).removeClass('unclicked');
    var row = $(this).closest('div.row').attr('id');
    var col = parseInt($(this).attr('id')) % 3
    game.board[row][col] = game.current_player.letter;
    if (game.is_tied()) {
      $('#winner-container').find('h2').text("Game is tied!");
      $('#turn').hide();
      $('#winner-container').show("slow");
      $('#start-button').show("fast");
    } else if (game.is_winner()){
      console.log("Winning letter: " + game.is_winner());
      $('.cell').removeClass('unclicked');
      $('#turn').hide();
      $('#winner-container').find('h2').text(game.winner.username + " has won!");
      $('#winner-container').show("fast");
      $('#start-button').show("fast");
    }
    game.next_turn();
    $('#current-player').html(game.current_player.username);
  });

});


