# arrays practise & crappy calculator

days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  print days_of_the_week

days_of_the_week.pop() # removes last item (Sunday)
  print days_of_the_week

days_of_the_week.unshift('Sunday') # insert item first position in array
  print days_of_the_week


days_of_the_week2 = [["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], ["Saturday", "Sunday"]]

days_of_the_week2.slice!(1) # slice off weekend days element
  print days_of_the_week2


days_of_the_week2[0].sort!   # sort self array
  print days_of_the_week2
