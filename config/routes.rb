Rails.application.routes.draw do
  root 'pages#home'
  get '/home', to: 'pages#home'
  get '/silly', to: 'pages#silly'
end
