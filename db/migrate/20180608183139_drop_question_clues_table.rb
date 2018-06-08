class DropQuestionCluesTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :question_clues
  end
end
