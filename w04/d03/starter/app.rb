require 'sinatra'
# require 'sinatra/reloader'

# Coin toss
get '/coin_toss' do

@rand = rand
rand = rand(1..2)
if rand === 1
    "Heads!"
else
    "Tails!"
end


end

# Dice roll
get '/dice_roll' do

roll = rand(1..6)
"#{roll}"

end

# Magic 8 ball
get '/magic8ball/:question' do

@question = params[:question]
"#{@question}"

answers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes", "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
]
i = rand(18)
"#{answers[i]}"



end



