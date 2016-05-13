get '/games' do
  erb :index
end

post '/games/new' do
  game = Game.new()
  # game.players = params from ajax post request

  if game.save
    redirect '/'
  end
end
