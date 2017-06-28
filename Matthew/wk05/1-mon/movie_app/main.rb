require 'pry'     
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pg'
# OMDB API KEY = 2f6435d9
# HTTParty.get('http://omdbapi.com/?s=MOVEINAME&apikey=2f6435d9')


get '/' do
  erb :index
end


get '/search_result' do
  api = "http://omdbapi.com/?s=#{params[:search]}&apikey=2f6435d9"
  parsed = HTTParty.get(api).parsed_response
  @results = parsed['Search']
  # when /search_result called, store @results['Search'] in dbase
  # if searched again, refer dbase, if found, return from dbase
  sql = "INSERT INTO searches(name, search_result) VALUES ('#{params[:search]}', @results)"
  run_sql(sql)
  erb :result 
end

get '/result_details' do
  api = "http://omdbapi.com/?t=#{params[:title]}&apikey=2f6435d9"
  @details = HTTParty.get(api).parsed_response
  erb :details
end


def run_sql(sql)
  conn = PG.connect(dbname: 'search_history')
  result = conn.exec(sql)
  conn.close
  result
end