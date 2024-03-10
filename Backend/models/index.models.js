
const User = require('./User', './Product', './Cart')

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