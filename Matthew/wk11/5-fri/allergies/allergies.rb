# eggs(1)
# peanuts(2)
# shellfish(4)
# strawberries(8)
# tomatoes(16)
# chocolate(32)
# pollen(64)
# cats(128)

# allergies = Allergies.new(num)
# allergies.allergic_to?('object')
#  => true/false

# allergies.list
#  => ['object', 'object']

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

  def allergic_to? object     
    Values[object] & @score != 0
  end

  def list
    Values.keys.select { |object| allergic_to? object }
  end
end