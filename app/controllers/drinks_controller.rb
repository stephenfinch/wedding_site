class DrinksController < ApplicationController
  def index
    @stephen_drinks = Drink.where(owner: 'stephen')
    @mary_drinks = Drink.where(owner: 'mary')
    @drink = Drink.new
  end

  def create
    @drink = Drink.create(drink_params)

    if @drink.save
      flash[:notice] = 'Drink saved'
      redirect_to request.referer
    else
      flash.now[:alert] = 'Could not save drink'
      render :index
    end
  end

  private

  def drink_params
    params.require(:drink).permit(:owner, :oz)
  end
end
