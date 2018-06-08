class DropQuestionsTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :questions
  end
end
