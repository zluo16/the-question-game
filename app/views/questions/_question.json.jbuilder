json.extract! question, :id, :clue, :answer, :value, :created_at, :updated_at
json.url question_url(question, format: :json)
