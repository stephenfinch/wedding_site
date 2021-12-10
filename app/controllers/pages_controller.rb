class PagesController < ApplicationController
  def home
  end

  def silly
    @index = rand(15)
  end
end
