# required gem includes
require 'sinatra'

set :bind, '0.0.0.0' # Vagrant fix

# partial
# layouts

get '/' do
  erb :index
end
