orders = {}
i = 1
done = "no"
puts "What is your name?"
name = gets.chomp
orders["customer"] = name
puts orders
puts "What would you like to eat " + name + "?"
item = gets.chomp
orders[i] = item
puts orders
while done == "no" do
   puts "Add another item to your order " + name + "? (y/n)"
   addon = gets.chomp
   if addon == "n"
       done = "yes"
       puts name + " you ordered a " + orders[1]
   else
       puts "What would you like to add " + name + "?"

   end

end
