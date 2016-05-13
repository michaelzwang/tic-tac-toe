function Game(playerX, playerO){
  this.players = { X: playerX, O: playerO }
  playerX.letter = "X";
  playerO.letter = "O";
  this.current_player = null;
  this.winner = null;
  this.board = [[null, null, null],
                [null, null, null],
                [null, null, null]]
};


Game.prototype.next_turn = function(){
  if(!this.current_player){
    this.current_player = ((Math.floor(Math.random() * 2 + 1)) % 2) ? this.players.X : this.players.O;
  } else if(this.current_player === this.players.X){
    this.current_player = this.players.O;
  } else {
    this.current_player = this.players.X;
  };

};

Game.prototype.is_tied = function() {
  row0_full = this.is_row_complete(this.board[0]);
  row1_full = this.is_row_complete(this.board[1]);
  row2_full = this.is_row_complete(this.board[2]);
  return row0_full && row1_full && row2_full && !this.is_winner();
};

Game.prototype.is_row_complete = function(row) {
  return !row.includes(null);
};

Game.prototype.is_winner = function(){
  row_winner = this.check_rows();
  col_winner = this.check_cols();
  diag_winner = this.check_diags();
  if (row_winner) {
    this.winner = this.players[row_winner];
    return row_winner;
  } else if (col_winner) {
    this.winner = this.players[col_winner];
    return col_winner;
  } else if (diag_winner){
    this.winner = this.players[diag_winner];
    return diag_winner;
  } else {
    return;
  }
};

Game.prototype.check_diags = function(){
  var diag0_winner = this.row_winner([this.board[0][0],this.board[1][1],this.board[2][2]]);
  var diag1_winner = this.row_winner([this.board[2][0],this.board[1][1],this.board[0][2]]);
  if(diag0_winner){
    return diag0_winner;
  } else {
    return diag1_winner;
  };
};

Game.prototype.check_rows = function(){
  var row0_winner = this.row_winner(this.board[0]);
  var row1_winner = this.row_winner(this.board[1]);
  var row2_winner = this.row_winner(this.board[2]);
  if(row0_winner){
    return row0_winner;
  } else if(row1_winner){
    return row1_winner;
  } else if(row2_winner){
    return row2_winner;
  } else {
    return;
  };
}

Game.prototype.check_cols = function(){
  var col0_winner = this.row_winner([this.board[0][0],this.board[1][0],this.board[2][0]]);
  var col1_winner = this.row_winner([this.board[0][1],this.board[1][1],this.board[2][1]]);
  var col2_winner = this.row_winner([this.board[0][2],this.board[1][2],this.board[2][2]]);
  if(col0_winner){
    return col0_winner;
  } else if(col1_winner){
    return col1_winner;
  } else if(col2_winner){
    return col2_winner;
  } else {
    return;
  };
}


Game.prototype.row_winner = function(row){
  if (row[0] === row[1] && row[1] === row[2]){
    return row[0]
  }
  else {
    return
  }
}

