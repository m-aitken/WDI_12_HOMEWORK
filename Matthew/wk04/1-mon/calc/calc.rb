# calc should display menu of operations
# user can choose from menu
# user enters numbers to perform operation
# displays result
# program continues until user selects a quit option from menu


require 'pry'
puts "'Basic Calculator'"


# menu should first ask for operation

# menu options
# 1 add
# 2 subtract
# 3 multiply
# 4 divide
# 5 exponent
# 6 square root

def menu
puts "Select calculation option:\n"
puts "Option 1 - add, Option 2 - subtract, Option 3 - multiply, Option 4 - divide, Option 5 - exponent"

  option = gets.to_i

  if option == 1
    return "add"
  elsif option == 2
    return "subtract"
  elsif option == 3
    return "multiply"
  elsif option == 4
    return "divide"
  elsif option == 5
    return "exponent"

  elsif option == 6
    return "square"
       
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

    elsif operator == "exponent"
      return num1 ** num2

    elsif operator == "square"
      return Math.sqrt(num1)
  end
end  
# binding.pry


calc_active = 1

while calc_active == 1
  
  current_action = menu()

  puts "Enter first number"
  firstNumber = gets.to_i

  puts "Enter second number"
  secondNumber = gets.to_i

  answer = calculation(current_action, firstNumber, secondNumber)
  puts "Answer is #{answer}"
  puts "Enter '1' to perform another calculation or enter '0' to exit"

  calc_active = gets.to_i

  if calc_active == 0
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