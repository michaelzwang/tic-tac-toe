class User < ActiveRecord::Base
  # Remember to create a migration!
  include BCrypt

  validates :username, {  presence: true, uniqueness: true }
  validates :password_hash, presence: true

  has_many	:games, through: :user_games

  def self.authenticate(username, entered_password)
    user = self.find_by(username: username)
    user.password == entered_password
  end

  def password
    @password ||= Password.new(password_hash)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end

end