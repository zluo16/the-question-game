# Jeopardy API word game
###### A multiple choice word game built with React and Rails using Webpacker | [Demo](https://multiple-choice-trivia.herokuapp.com/#/)

### Clone & run application
```bash
git clone git@github.com:zluo16/the-question-game.git
bundle install && yarn install
rails s
```

A multiple choice word game where you answer as many questions as you can within a limited amount of time. You get a certain amount of points for every correct answer you select. At the end, your points are tallied and given to you.

There's a free Jeopardy API called jservice.io that has almost every Jeopardy question ever asked. I can pull data from this to get questions and answers.

## What's being used:
- jservice.io Jeopardy API
- React
- Rails
- Material UI
- Axios
- Webpacker

## Main Features:
- Multiple choice game
- Each question is worth a set amount of points
- A timer that counts down
- A leaderboard that you can add your name to when the game is done

## Stretch Features:
- Seconds are added to the timer for each correct answer
- Use the category feature to supply deceptively similar answers to choose from.
- Points are lost for every wrong answer

The data from the Jeopardy API is kind of dirty so I'll have to clean and format it before I can use it, but other than that the API's pretty fun to use and has a very verbose amount of information about each question. I think this will be fun!
