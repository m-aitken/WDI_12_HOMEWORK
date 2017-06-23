require 'pry'
# Pokemon Ruby


alfed = {
  'cards' => []
}

peter = {
  'cards' => []
}


#pack
cards = {
  "Pikachu" => {
    :attack => 40
  },
  "Rattata" => {
    :attack => 20
  },
  "Pidgeot" => {
    :attack => 60
  },
  "Alakazam" => {
    :attack => 80
  },
  "Butterfree" => {
    :attack => 30
  },
  "Gengar" => {
    :attack => 70
  },
  "Moltres" => {
    :attack => 100
  },
  "Vulpix" => {
    :attack => 40
  },
  "Blastoise" => {
    :attack => 80
  },
  "Hitmonchan" => {
    :attack => 50
  }
}

# arr = cards.reverse_each.to_h
arr = cards.reverse_each.to_a

arr.each_slice(3) { |a| p a }


binding.pry