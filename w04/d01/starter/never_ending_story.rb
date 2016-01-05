story = [
  'Fry is born without a delta brainwave',
  'As a result, Fry is cryogenically frozen until 2999',
  'In the future, Fry works on a spaceship',
  'The spaceship hits a wormhole and crashes in 1941 Roswell, NM',
  'Fry encounters his grandmother, then inadvertently sires his father'
]


i = 0

while i < 6

if i === 5
    puts "Thanks for listening"
    i = 0

elsif i === 0
puts "Would you like to hear about Fry y/n?"
answer = gets.chomp
if answer === "y"
    puts story[i]
    i += 1
else
    puts "I didn't want to tell you anyway."
    i  = 0
end

elsif i < 5
puts "Would you like to hear more?"
answer = gets.chomp
if answer === "y"
    puts story[i]
    i += 1
else
    puts "Sorry to hear that..."
    i = 0
end

end

end
