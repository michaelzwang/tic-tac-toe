class CreateGamesTable < ActiveRecord::Migration
  def change
  	create_table :games do |t|
  		t.decimal		:duration,	null: true
  		
  		t.timestamps		null: false
  	end
  end
end
