const Sequelize = require('sequelize')
const db = require('../db')

const OrderItem = db.define('orderItem', {
  quantity: {
    type: Sequelize.INTEGER
  }
})

module.exports = OrderItem
