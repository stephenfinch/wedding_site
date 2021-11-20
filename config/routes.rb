Rails.application.routes.draw do
  root 'pages#home'
  get '/home', to: 'pages#home'
  get '/gallery', to: 'pages#gallery'
end
