Rails.application.routes.draw do
  root 'pages#home'
  get '/home', to: 'pages#home'
  get '/silly', to: 'pages#silly'
  get '/water', to: 'pages#water'
  post '/water', to: 'pages#water'
  get '/history', to: 'pages#history'
  post '/history', to: 'pages#history'
end
