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
    bill3 = Bill.create(user_id: walker.id, friend_id: demo.id, description: 'gas', amount: 30000, author_paid: "y")
    bill4 = Bill.create(user_id: mike.id, friend_id: demo.id, description: 'doordash', amount: 2500, author_paid: "y")
    bill5 = Bill.create(user_id: demo.id, friend_id: vanessa.id, description: 'Concert tickets', amount: 50000, author_paid: "n")


    Comment.create(author_id: walker.id, bill_id: bill3.id, author_name: walker.username, message: 'I paid for gas. You better pay me soon!')
    Comment.create(author_id: mike.id, bill_id: bill1.id, author_name: mike.username, message: "Man, that was good. I'll pay you later, though")
    Comment.create(author_id: joe.id, bill_id: bill2.id, author_name: joe.username, message: "Thanks for paying for the movie! I guess I owe you now.")
    Comment.create(author_id: mike.id, bill_id: bill4.id, author_name: mike.username, message: "Can you pay me back for this, already?!")
    Comment.create(author_id: mike.id, bill_id: bill5.id, author_name: mike.username, message: "Thanks for adding this! These backstage passes were expensive!")
    