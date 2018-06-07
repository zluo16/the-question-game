# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'net/http'

action_controller_helpers = ActionController::Base.helpers

url = URI.parse('http://jservice.io/api/random?count=100')
req = Net::HTTP::Get.new(url.to_s)
res = Net::HTTP.start(url.host, url.port) { | http |
    http.request(req)
}

class Question
    attr_accessor :answer, :clue, :value
    def initialize(answer, clue, value)
        @answer = answer
        @clue = clue
        @value = value
    end
end

res_array = JSON.parse(res.body)
res_unfiltered = res_array.map{ | clue | Question.new(clue['answer'], clue['question'], clue['value']) }
res_stripped = res_unfiltered.map do | question |
    question.answer = action_controller_helpers.strip_tags(question.answer).gsub('\\', '').gsub('&amp;', '&')
    question.clue = action_controller_helpers.strip_tags(question.clue).gsub('\\', '').gsub('&amp;', '&')
    question
end

res_stripped.each do | question |
    Clue.create(phrase: question.clue, answer: question.answer, value: question.value)
end