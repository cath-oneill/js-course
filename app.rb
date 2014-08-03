# required gem includes
require 'sinatra'

set :bind, '0.0.0.0' # Vagrant fix

# partial
# layouts

get '/' do
  erb :index
end

get '/about' do
  erb :about
end

get "/signup" do
  erb :signup_box, layout: :signup_layout
end