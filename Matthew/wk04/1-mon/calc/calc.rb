# calc should display menu of operations
# user can choose from menu
# user enters numbers to perform operation
# displays result
# program continues until user selects a quit option from menu


require 'pry'
puts "'Basic Calulator'"


# menu should first ask for operation

# menu options
# 1 add
# 2 subtract
# 3 multiply
# 4 divide
# 5 square root - to add

def menu

  option = gets.to_i

  if option == 1
    return "add"
  elsif option == 2
    return "subtract"
  elsif option == 3
    return "multiply"
  elsif option == 4
    return "divide"
  end

end

# if operation 1 - request numbers & return addition result
# if operation 2 - request numbers & return subtract result
# etc ...

def calculation(operator, num1, num2)

  if operator == "add"
      return num1 + num2
    elsif operator == "subtract"
      return num1 - num2
    elsif operator == "multiply"
      return num1 * num2
    elsif operator == "divide"
      return num1 / num2
  end
end  


active = 1

while active == 1
  current_action = menu
  puts "Enter first number"
  firstNumber = gets.to_i
  puts "Enter second number"
  secondNumber = gets.to_i

  answer = calculation(current_action, firstNumber, secondNumber)
  puts "Answer is #{answer}"

  active = gets.to_i
  if active != 1
    puts "Program end"
  end
end





# # store numbers
# puts "enter first number"
# num1 = gets.to_i
# puts "enter second number"
# num2 = gets.to_i

# operations

# add = num1 + num2
# subtract = num1 - num2
# multiply = num1 * num2
# divide = num1 / num2 
# square1 = Math.sqrt(num1)
# square2 = Math.sqrt(num2)

# puts "#{num1} + #{num2} = #{add}"
# puts "#{num1} - #{num2} = #{subtract}"
# puts "#{num1} * #{num2} = #{multiply}"
# puts "#{num1} / #{num2} = #{divide}"
# puts "#{num1} square = #{square1}"
# puts "#{num2} square = #{square2}"

