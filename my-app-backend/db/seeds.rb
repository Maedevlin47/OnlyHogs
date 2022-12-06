puts "🌱 Seeding spices..."

puts "Deleting Seed Data on Reseed"
User.destroy_all
Post.destroy_all
Comment.destroy_all
puts "Data Gonzo"

# Seed your database here

# Create Users
puts "Creating Users"
10.times do
    User.create(
        username: Faker::DcComics.hero,
        profile_picture: Faker::Avatar.image
    )
end
puts "Users created successfully!"

# Create Posts 
puts "Creating Posts"
25.times do
    Post.create(
        image: Faker::Avatar.image,
        caption: Faker::Quote.most_interesting_man_in_the_world,
        username: User.all.sample.username
    )
end
puts "Posts created successfully!"

# Create Comments
puts "Creating Comments"

puts "Commoents created successfully!"

puts "✅ Done seeding!"
