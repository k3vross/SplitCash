# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


    User.destroy_all
    Friend.destroy_all

    demo = User.create(username: 'demoUser', email: 'demo@demo.com', password: '123456')
    joe = User.create(username: 'joe', email: 'joe@joe.com', password: '123456')
    mike = User.create(username: 'mike', email: 'mike@mike.com', password: '123456')
    walker = User.create(username: 'walker', email: 'walker@walker.com', password: '123456')
    michelle = User.create(username: 'michelle', email: 'michelle@michelle.com', password: '123456')
    vanessa = User.create(username: 'vanessa', email: 'vanessa@vanessa.com', password: '123456')
    jen = User.create(username: 'jen', email: 'jen@jen.com', password: '123456')


    Friend.create(requester_id: mike.id, recipient_id: walker.id, confirmed: true)
    Friend.create(requester_id: michelle.id, recipient_id: vanessa.id, confirmed: true)
    Friend.create(requester_id: vanessa.id, recipient_id: walker.id, confirmed: false)
    Friend.create(requester_id: jen.id, recipient_id: joe.id, confirmed: true)
    Friend.create(requester_id: michelle.id, recipient_id: mike.id, confirmed: true)