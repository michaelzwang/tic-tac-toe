class UserGame < ActiveRecord::Base
  # Remember to create a migration!

  validates :user, presence: true
  validates :game, presence: true

  validates :user, uniqueness: { scope: :game }

  belongs_to :user
  belongs_to :game

end
