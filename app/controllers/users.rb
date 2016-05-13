get '/home' do
  erb :home
end

get '/register' do
  erb :'/users/register'
end

get '/login' do
  erb :'/users/login'
end

post '/login' do
  user = User.find_by(username: params[:user][:username])
  if !user.nil? && User.authenticate(params[:user][:username], params[:user][:password])
    session[:user_id] = user.id
    redirect "/users/#{user.id}"
  else
    status 422
    erb :'/users/login'
  end
end

get '/logout' do
  session[:user_id] = nil
  redirect '/'
end

post '/users/new' do
  user = User.new(params[:user])
  if user.save
    session[:user_id] = user.id
    redirect "/users/#{user.id}"
  else
    status 422
    erb :'/users/register'
  end
end

get '/users/:id' do
  @user = User.find(params[:id])
  erb :'/users/profile'
end


