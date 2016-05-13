class CreateUserGamesTable < ActiveRecord::Migration
  def change
  	create_table :user_games do |t|
  		t.string	:result, null: true
  		t.integer	:user_id, null: false
  		t.integer	:game_id, null: false

  		t.timestamps	null: false
  	end
  	add_index :user_games, [:user_id, :game_id], unique: true
  end
end
