class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.references :game
      t.integer :points

      t.timestamps
    end
  end
end
