class Game < ActiveRecord::Base
  # Remember to create a migration!

  has_many :user_games
  has_many :users, through: :user_games

end
