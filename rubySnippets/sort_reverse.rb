def alphabetize(arr, rev=false)
  arr.sort!
if rev
  arr.reverse!
else
  return arr
end
end

numbers = [3,45,67.2,87.6,1,-6,-98.7]

puts alphabetize(numbers, rev=true)