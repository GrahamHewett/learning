6 < 5 ? state = "That doesn't make sense" : state = "I agree that is false"
puts state

//rint only even numbers from an array

my_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
my_array.each {|num| puts num%2==0 ? num : nil}