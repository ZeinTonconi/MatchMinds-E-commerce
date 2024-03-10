
const User = require('./User')
const Product = require('./Product')
const Cart = require('./Cart')

const database = {
    user: User,
    product: Product,
    cart: Cart,
}

module.exports = {
    User,
    Product,
    Cart,
    database
}