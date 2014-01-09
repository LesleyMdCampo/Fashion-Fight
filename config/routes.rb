FashionFight::Application.routes.draw do



  resources :contests, :only => [:index, :show]
  root 'contests#index'

  scope :api do
    post 'contests/:id/comments' => 'contests#comment', :as => :contest_comment_api
  end
  
end
