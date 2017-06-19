# calc should display menu of operations
# user can choose from menu
# user enters numbers to perform operation
# displays result
# program continues until user selects a quit option from menu


require 'pry'

# menu options
# 1 add
# 2 subtract
# 3 multiply
# 4 divide
# 5 square root

# menu should first ask for operator

# if option 1 - request numbers & return addition result
# if option 2 - request numbers & return subtract result
# etc ...


# store numbers
puts "enter first number"
num1 = gets.to_i
puts "enter second number"
num2 = gets.to_i

# operations

add = num1 + num2
subtract = num1 - num2
multiply = num1 * num2
divide = num1 / num2 
square1 = Math.sqrt(num1)
square2 = Math.sqrt(num2)

puts "#{num1} + #{num2} = #{add}"
puts "#{num1} - #{num2} = #{subtract}"
puts "#{num1} * #{num2} = #{multiply}"
puts "#{num1} / #{num2} = #{divide}"
puts "#{num1} square = #{square1}"
puts "#{num2} square = #{square2}"

