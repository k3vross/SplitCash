# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


    User.destroy_all
    Friend.destroy_all
    Bill.destroy_all
    Comment.destroy_all

    demo = User.create(username: 'demoUser', email: 'demo@demo.com', password: '123456')
    joe = User.create(username: 'joe', email: 'joe@joe.com', password: '123456')
    mike = User.create(username: 'mike', email: 'mike@mike.com', password: '123456')
    walker = User.create(username: 'walker', email: 'walker@walker.com', password: '123456')
    michelle = User.create(username: 'michelle', email: 'michelle@michelle.com', password: '123456')
    vanessa = User.create(username: 'vanessa', email: 'vanessa@vanessa.com', password: '123456')
    jen = User.create(username: 'jen', email: 'jen@jen.com', password: '123456')


    Friend.create(requester_id: mike.id, recipient_id: walker.id)
    Friend.create(requester_id: michelle.id, recipient_id: vanessa.id)
    Friend.create(requester_id: vanessa.id, recipient_id: walker.id)
    Friend.create(requester_id: jen.id, recipient_id: joe.id)
    Friend.create(requester_id: michelle.id, recipient_id: mike.id)
    Friend.create(requester_id: demo.id, recipient_id: mike.id)
    Friend.create(requester_id: jen.id, recipient_id: demo.id)
    Friend.create(requester_id: walker.id, recipient_id: demo.id)
    Friend.create(requester_id: vanessa.id, recipient_id: demo.id)
    Friend.create(requester_id: demo.id, recipient_id: michelle.id)
    Friend.create(requester_id: demo.id, recipient_id: joe.id)


    bill1 = Bill.create(user_id: demo.id, friend_id: mike.id, description: 'food', amount: 1050, author_paid: "y")
    bill2 = Bill.create(user_id: demo.id, friend_id: joe.id, description: 'movie', amount: 1850, author_paid: "y")
    bill3 = Bill.create(user_id: walker.id, friend_id: demo.id, description: 'gas', amount: 5075, author_paid: "y")
    bill4 = Bill.create(user_id: mike.id, friend_id: demo.id, description: 'doordash', amount: 2500, author_paid: "y")
    bill5 = Bill.create(user_id: demo.id, friend_id: vanessa.id, description: 'Concert tickets', amount: 9537, author_paid: "n")
    bill6 = Bill.create(user_id: joe.id, friend_id: demo.id, description: 'Round of Golf', amount: 10000, author_paid: "n")
    bill7 = Bill.create(user_id: demo.id, friend_id: jen.id, description: 'pizza', amount: 3000, author_paid: "y")
    bill8 = Bill.create(user_id: mike.id, friend_id: demo.id, description: 'Trivia night entry fee', amount: 2100, author_paid: "y")
    bill9 = Bill.create(user_id: michelle.id, friend_id: demo.id, description: 'bowling', amount: 2219, author_paid: "y")
    bill10 = Bill.create(user_id: walker.id, friend_id: demo.id, description: 'Sushi', amount: 5532, author_paid: "n")
    bill11 = Bill.create(user_id: demo.id, friend_id: joe.id, description: 'Beers', amount: 1235, author_paid: "n")
    bill12 = Bill.create(user_id: demo.id, friend_id: mike.id, description: 'Code conference', amount: 5000, author_paid: "n")
    bill13 = Bill.create(user_id: vanessa.id, friend_id: demo.id, description: 'Parking', amount: 1200, author_paid: "n")
    bill14 = Bill.create(user_id: jen.id, friend_id: demo.id, description: 'smoothies', amount: 1050, author_paid: "n")
    bill15 = Bill.create(user_id: michelle.id, friend_id: demo.id, description: 'Burgers', amount: 1875, author_paid: "y")


    Comment.create(author_id: mike.id, bill_id: bill1.id, author_name: mike.username, message: "Man, that was good. I'll pay you later, though")
    Comment.create(author_id: joe.id, bill_id: bill2.id, author_name: joe.username, message: "Thanks for paying for the movie! I guess I owe you now.")
    Comment.create(author_id: walker.id, bill_id: bill3.id, author_name: walker.username, message: 'I paid for gas. You better pay me soon!')
    Comment.create(author_id: mike.id, bill_id: bill4.id, author_name: mike.username, message: "Can you pay me back for this, already?!")
    Comment.create(author_id: vanessa.id, bill_id: bill5.id, author_name: vanessa.username, message: "Thanks for adding this! These backstage passes were expensive!")
    Comment.create(author_id: demo.id, bill_id: bill6.id, author_name: demo.username, message: "Thanks for playing Joe! Now pay up!.")
    Comment.create(author_id: demo.id, bill_id: bill7.id, author_name: demo.username, message: "Can you pay me for this pizza by tomrrow?")
    Comment.create(author_id: mike.id, bill_id: bill8.id, author_name: mike.username, message: "Can't believe we won trivia. You still need to pay me back for the entry fee, though.")
    Comment.create(author_id: demo.id, bill_id: bill9.id, author_name: demo.username, message: "Thanks for paying for bowling! I'll pay you tomorrow.")
    Comment.create(author_id: demo.id, bill_id: bill10.id, author_name: demo.username, message: "Thanks for comming to sushi. I added the total on this app. Pay me whenever")
    Comment.create(author_id: joe.id, bill_id: bill11.id, author_name: joe.username, message: "Those beers were great! I liked the amber ale the best")
    Comment.create(author_id: demo.id, bill_id: bill12.id, author_name: demo.username, message: "Thanks for paying for the code conference. I learned a ton!")
    Comment.create(author_id: vanessa.id, bill_id: bill13.id, author_name: vanessa.username, message: "Glad we found parking. I thought we were gonna drive around forever!")
    Comment.create(author_id: demo.id, bill_id: bill14.id, author_name: demo.username, message: "mmmm I love smoothies. Don't forget to pay me back!")
    Comment.create(author_id: michelle.id, bill_id: bill15.id, author_name: michelle.username, message: "Can you pay me back for this? You still owe me for bowling, too!")

    