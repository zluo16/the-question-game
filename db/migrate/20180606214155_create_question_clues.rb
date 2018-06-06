class CreateQuestionClues < ActiveRecord::Migration[5.2]
  def change
    create_table :question_clues do |t|
      t.references :question, foreign_key: true
      t.references :clue, foreign_key: true

      t.timestamps
    end
  end
end
