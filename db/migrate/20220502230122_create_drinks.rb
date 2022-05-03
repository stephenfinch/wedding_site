class CreateDrinks < ActiveRecord::Migration[6.1]
  def change
    create_table :drinks do |t|
      t.string :owner, null: false
      t.integer :oz, null: false

      t.timestamps
    end
  end
end
