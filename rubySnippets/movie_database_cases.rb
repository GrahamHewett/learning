movies ={TheMatrix: 10}
puts "Input"
choice = gets.chomp
case choice
    when "add" then puts "Enter the movie name"
    title = gets.chomp.to_sym
    if movies[title.to_sym] = nil
      puts "Enter a rating out of ten"
      rating = gets.chomp.to_i
      movies[title] = rating
    else
		  puts "That movie already exists"
    end
    when "update" then puts "Enter the name of  the movie you want to update"
    title = gets.chomp.to_sym
    if movies[title] = nil
      puts "That movie is not in our database"
    else 
      puts "Please enter a new rating"
		  rating = gets.chomp.to_i
			movies[title] = rating
    end
  when "display" then  
    movies.each do |movie, rating|
    puts "#{movie}: #{rating}"
    end
  when "delete" then puts "Enter the name of the movie you want to delete"
    title = gets.chomp.to_sym
    if movies[title] = nil
      puts "That movie is not in our database"
    else 
			movies.delete(title)
			puts "movie deleted"
    end
  else puts "Error!"
end



