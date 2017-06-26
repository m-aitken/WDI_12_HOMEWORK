require 'pry'     
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
# OMDB API KEY = 2f6435d9
# HTTParty.get('http://omdbapi.com/?s=MOVEINAME&apikey=2f6435d9')


get '/' do
  erb :index
end


get '/result' do
  api = "http://omdbapi.com/?s=#{params[:search]}&apikey=2f6435d9"
  parsed = HTTParty.get(api).parsed_response
  @results = parsed['Search']
      
  # results array - loop thru, print results
  # @results[array]['Title'] returns Title
  binding.pry
  erb :result
end



