puts ":seedling: Seeding spices..."
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
post_image = [
    "https://images.pexels.com/photos/1300361/pexels-photo-1300361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5097073/pexels-photo-5097073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/63285/pig-alp-rona-furna-sow-63285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5092816/pexels-photo-5092816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7516783/pexels-photo-7516783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/14422520/pexels-photo-14422520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/66258/staniel-cay-swimming-pig-seagull-fish-66258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4636980/pexels-photo-4636980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7811891/pexels-photo-7811891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7177110/pexels-photo-7177110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5610061/pexels-photo-5610061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8128339/pexels-photo-8128339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8151084/pexels-photo-8151084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-78722394.jpg?resize=2048,1323",
    "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-769707819-e1614977682258.jpg?w=2048",
    "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-654512248.jpg?resize=2048,1365",
    "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-988240540-e1614978384672.jpg?w=1545",
    "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-658787292-scaled-e1614980627142.jpg?resize=2048,1366",
    "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-71919568.jpg?resize=2048,1356",
    "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-989386996-e1614982532849.jpg?w=1414",
    "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1150300620.jpg?resize=2048,1365",
    "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-77746623.jpg?resize=2048,1365",
    "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-465857056-scaled.jpg?resize=2048,2048",
    "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1091844798.jpg?w=2048",
    "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-86079146.jpg?resize=2048,1360",
    "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1273972629.jpg?resize=2048,1367",
    "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-130871377.jpg?resize=2048,1365",
    "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-974941486-scaled.jpg?resize=2048,1365",
    "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-578260696-scaled.jpg?resize=2048,1363",
    "https://images.pexels.com/photos/3751036/pexels-photo-3751036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3178266/pexels-photo-3178266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
]
25.times do
    Post.create(
        image: post_image.sample,
        caption: Faker::Quote.most_interesting_man_in_the_world,
        username: User.all.sample.username,
        likes: rand(1..500)
    )
end
puts "Posts created successfully!"

# Create Comments
puts "Creating Comments"
Comment.create(
    likes: rand(1..100)
)
puts "Comments created successfully!"
puts ":white_check_mark: Done seeding!"
