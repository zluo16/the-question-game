class CreateClues < ActiveRecord::Migration[5.2]
  def change
    create_table :clues do |t|
      t.string :phrase
      t.string :answer
      t.integer :value

      t.timestamps
    end
  end
end
