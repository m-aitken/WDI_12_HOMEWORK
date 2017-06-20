require 'pry'


# ROUND ONE

words = ["hello", "what", "is", "up", "dude"]

def length (array)
  a = []
  array.each do |n| 
    a << n.length
  end
  a
end

# ROUND TWO
# product of num1 * num2, raised to power of num3

def transmog (num1, num2, num3)
  a = num1 * num2
  b = a ** num3
end

# answers: 8000, 92389579776, 14466001271480793216

# ROUND THREE

def toonify (accent, sentence)
  if accent == "daffy"
    sentence.gsub!(/[s]/, "th")
    puts sentence
  elsif accent == "elmer"
    sentence.gsub!(/[r]/, "w")
    puts sentence
  elsif accent == "sylvester"
    sentence.gsub!(/s/, "sss")
    puts sentence  
  else 
    puts sentence
  end
end
  
# ROUND FOUR

def wordReverse (string)
  array = string.split(" ")  # split string removing spaces (returns array)
  array.reverse           # reverse the array order                                                                                                     
end

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
# ROUND FIVE

# split string into array
# iterate through array
# reverse each element
# return string

def letterReverse (string)
  array = string.split(" ")
  array.each { |word| print "#{word.reverse} " }
  
end





# ROUND SIX

# def longest (string_array)
# return the longest word in array
# .max returns longest

binding.pry