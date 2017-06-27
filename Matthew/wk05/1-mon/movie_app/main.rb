require 'pry'     
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
# OMDB API KEY = 2f6435d9
# HTTParty.get('http://omdbapi.com/?s=MOVEINAME&apikey=2f6435d9')


get '/' do
  erb :index
end


get '/search_result' do
  api = "http://omdbapi.com/?s=#{params[:search]}&apikey=2f6435d9"
  parsed = HTTParty.get(api).parsed_response
  @results = parsed['Search']
  erb :result 
end

# #{params[:search]}
get '/result_details' do
  api = "http://omdbapi.com/?t=#{params[:title]}&apikey=2f6435d9"
  @details = HTTParty.get(api).parsed_response
  erb :details
end
