# eggs(1)
# peanuts(2)
# shellfish(4)
# strawberries(8)
# tomatoes(16)
# chocolate(32)
# pollen(64)
# cats(128)

# allergies = Allergies.new(34)
# allergies.allergic_to?('chocolate')
#   false

# allergies.allergic_to?('cats')
#   false
# allergies.list
#   ['peanuts', 'chocolate']

class Allergies
  Values = {
    'eggs' => 1,
    'peanuts' => 2,
    'shellfish' => 4,
    'strawberries' => 8,
    'tomatoes' => 16,
    'chocolate' => 32,
    'pollen' => 64,
    'cats' => 128
  }

  def initialize num
    @score = num
  end

# test object name against Values hash values
  def allergic_to? object     
    Values[object] & @score != 0
  end

# return array using select enumerable, using all keys from Values 
# and return objects that pass allergic_to method 
  def list
    Values.keys.select { |object| allergic_to? object }
  end
end