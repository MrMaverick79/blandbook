
# User create

User.destroy_all

u1 = User.create!(

    email: 'brendan@gmail.com',
    screen_name: 'Brendan',
    password: 'chicken',
    avatar: 'https://ca.slack-edge.com/T0351JZQ0-U03P01S843S-01985e04bd02-512',
    location: '176 London Cct, Canberra ACT 2601',
    is_admin: true

)

u2 = User.create!(

    email: 'daniel@gmail.com',
    screen_name: 'Daniel',
    password: 'chicken',
    avatar: 'https://ca.slack-edge.com/T0351JZQ0-U03MJ8J6HDM-5f097b22b732-512',
    location: 'North Terrace, Adelaide SA 5000',
    is_admin: false

)

u3 = User.create!(

    email: 'lei@gmail.com',
    screen_name: 'Lei',
    password: 'chicken',
    avatar: 'https://ca.slack-edge.com/T0351JZQ0-U03NNDB9R0Q-6c09b92ee7f1-512',
    location: '180 St Kilda Rd, Melbourne VIC 3006',
    is_admin: false

)

u4 = User.create!(

    email: 'luke@gmail.com',
    screen_name: 'Luke',
    password: 'chicken',
    avatar: 'https://ca.slack-edge.com/T0351JZQ0-U0MSE1HD0-8dc3c966c5ce-512',
    location: '1 Market St, Sydney NSW 2000',
    is_admin: false

)

u5 = User.create!(

    email: 'shay@gmail.com',
    screen_name: 'Shay',
    password: 'chicken',
    avatar: 'https://ca.slack-edge.com/T0351JZQ0-U03P75YV48L-f0033bff348a-512',
    location: 'Clem Jones Promenade, South Brisbane QLD 4101',
    is_admin: false

)

puts("Created #{User.count} users")

##### Following ########


Follow.create follower_id:  u1.id, followed_id: u2.id
Follow.create follower_id:  u1.id, followed_id: u3.id
Follow.create follower_id:  u1.id, followed_id: u4.id
Follow.create follower_id:  u1.id, followed_id: u5.id
Follow.create follower_id:  u2.id, followed_id: u1.id
Follow.create follower_id:  u3.id, followed_id: u1.id
Follow.create follower_id:  u4.id, followed_id: u1.id
Follow.create follower_id:  u5.id, followed_id: u1.id

puts("I have created some followers for #{u1.screen_name}. They are following #{u1.following.pluck(:screen_name)}")

# Post ##############################################################

Post.destroy_all

p1 = Post.create!(

    title: 'What is the place where there is Christmas before Thanksgiving?',
    like: 2,
    dislike: 1

)

p2 = Post.create!(

    title: 'Answer - The dictionary is the only place where you can find Christmas before Thanksgiving.',
    like: 4,
    dislike: 1

)

p3 = Post.create!(

    title: 'What do you get when you cross an apple and a Christmas tree?',
    like: 3,
    dislike: 2

)

p4 = Post.create!(

    title: 'Which one is better? The white one or the pink one?',
    like: 4,
    dislike: 1

)

p5 = Post.create!(

    title: 'I love coding. But I love my guitar more!',
    like: 5,
    dislike: 0

)

p6 = Post.create!(

    title: 'My cat is soooo cute!',
    like: 5,
    dislike: 0

)

puts("Created #{Post.count} posts")

u1.posts << [p1, p2]
u2.posts << p3
u3.posts << p4
u4.posts << p5
u5.posts << p6

puts "user -< posts one to many associations:"
puts "• user #{User.first.screen_name} has posts: #{User.first.posts.pluck(:id).join(', ')}"


# Url ##############################################################

Url.destroy_all

url1 = Url.create!(

    url: 'https://rumia.com.au/image/cache/catalog/products/362//RM220612P-1-550x550h.jpg',
    public: true

)

url2 = Url.create!(

    url: 'https://rumia.com.au/image/cache/catalog/products/361//RM220612W-1-550x550h.jpg',
    public: true

)

url3 = Url.create!(

    url: 'https://pocketmags.com/us/total-guitar-magazine/february-2021/articles/905648/06-sweet-child-o-mine-guns-n-roses',
    public: false

)

url4 = Url.create!(

    url: 'https://ca.slack-edge.com/T0351JZQ0-U03P75YV48L-f0033bff348a-512',
    public: true

)


puts("Created #{Url.count} Urls")

p4.urls << [url1, url2]
p5.urls << url3
p6.urls << url4

puts "post -< urls one to many associations:"
puts "• post #{Post.fourth.title} has urls: #{Post.fourth.urls.pluck(:id).join(', ')}"


# Comment ##############################################################

Comment.destroy_all

c1 = Comment.create!(

    content: 'Maybe pear?',
    like: 0,
    dislike: 1

)

c2 = Comment.create!(

    content: "Maybe orange?",
    like: 0,
    dislike: 2

)

c3 = Comment.create!(

    content: "Don't know this one! Tell me the anwser plz!!!",
    like: 0,
    dislike: 0

)

c4 = Comment.create!(

    content: 'You will get a pineapple.',
    like: 1,
    dislike: 4

)

c5 = Comment.create!(

    content: 'I will choose the pink one!',
    like: 3,
    dislike: 1

)

puts("Created #{Comment.count} Comments")

p3.comments << [c1, c2, c3, c4]
p4.comments << c5

puts "post -< comments one to many associations:"
puts "• post #{Post.third.title} has comments: #{Post.third.comments.pluck(:id).join(', ')}"

u4.comments << c1
u5.comments << [c2, c3]
u2.comments << c4
u1.comments << c5

puts "user -< comments one to many associations:"
puts "• user #{User.fifth.screen_name} has comments: #{User.fifth.comments.pluck(:id).join(', ')}"


# Chatroom ##############################################################

Chatroom.destroy_all

cr1 = Chatroom.create!(

    title: 'BlandBook Group',
    image: 'https://i.ytimg.com/vi/jXv8KZXB_Ng/maxresdefault.jpg'

)

cr2 = Chatroom.create!(

    title: 'Burning Airlines Group',
    image: 'https://arcticrodeorecordings.com/store/393-home_default/burning-airlines-deluxe-3-lp-package-mp3-.jpg'

)

cr3 = Chatroom.create!(

    title: 'GA SEI Group',
    image: 'https://seeklogo.com/images/G/general-assembly-logo-D5C634F07A-seeklogo.com.png'

)


cr1.users << [u1, u2, u3 ,u5]
cr2.users << [u1, u3, u5]
cr3.users << [u1, u2, u3, u4, u5]

puts("Created #{Chatroom.count} Chatrooms")

puts "users >-< comments many to many associations:"
puts "• user #{User.third.screen_name} has chatrooms: #{User.third.chatrooms.pluck(:title).join(', ')}"


# Message ##############################################################

Message.destroy_all

m1 = Message.create!(

    content: "Hi members, could we back after 20:30 ? Or what time are you preferred?",
    like: 2,
    dislike: 0,
    is_image: false

)

m2 = Message.create!(

    content: "I can do 830.",
    like: 0,
    dislike: 0,
    is_image: false

)

m3 = Message.create!(

    content: "Yeah me too",
    like: 0,
    dislike: 0,
    is_image: false

)

m4 = Message.create!(

    content: "Hey Lei....I'm in room 4, but no rush",
    like: 1,
    dislike: 0,
    is_image: false

)
 
m5 = Message.create!(

    content: "Cool. I'll be there in 5 mins",
    like: 0,
    dislike: 0,
    is_image: false

)

m6 = Message.create!(

    content: "https://files.slack.com/files-pri/T0351JZQ0-F042MV4RL74/ku1neu504sh01.webp",
    like: 4,
    dislike: 0,
    is_image: true

)

m7 = Message.create!(

    content: "Truth",
    like: 0,
    dislike: 0,
    is_image: false

)

m8 = Message.create!(

    content: "https://gist.github.com/textchimp/f99a004cbe9383fa48445634c29e8ea2. This is PROJECT 2 BRIEF",
    like: 0,
    dislike: 4,
    is_image: false

)

puts("Created #{Message.count} Messages")

cr1.messages << [m1, m2, m3]
cr2.messages << [m4, m5]
cr3.messages << [m6, m7, m8]

puts "chatroom -< messages one to many associations:"
puts "• chatroom #{Chatroom.first.title} has messages: #{Chatroom.first.messages.pluck(:id).join(', ')}"


u1.messages << m2 << m4 << m7
u2.messages << m1
u3.messages << m3 << m5
u4.messages << m8
u5.messages << m6

puts "user -< messages one to many associations:"
puts "• user #{User.first.screen_name} has messages: #{User.first.messages.pluck(:id).join(', ')}"

