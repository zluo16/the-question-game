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

res_array = JSON.parse(res.body)
res_unfiltered = res_array.map{ |clue| clue['answer'] }
puts res_unfiltered
res_unfiltered.map{ | clue | puts action_controller_helpers.strip_tags(clue) }