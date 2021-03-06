'use strict'

const db = require('../server/db')
const {User, Game, Order, OrderItem} = require('../server/db/models')

const users = [
  {
    firstName: 'Jessica',
    lastName: 'Bracht',
    email: 'jess@fullstack.com',
    password: 'test1',
    shippingAddress: '5 Hanover Square New York NY 10004 ',
    imageUrl: 'https://ca.slack-edge.com/T024FPYBQ-UB2BFQPK9-f5f4f74880b1-48'
  },
  {
    firstName: 'Orlando',
    lastName: 'Caraballo',
    email: 'orlando@fullstack.com',
    password: 'test2',
    shippingAddress: '90 Broad Street New York NY 10004',
    imageUrl: 'https://ca.slack-edge.com/T024FPYBQ-UJFJTU70D-e57338b1f90e-48'
  }
]

const games = [
  {
    name: 'Star Wars: X-Wing Miniatures Game',
    quantity: 1,
    price: 2499,
    description:
      'quip ex ea commodo eu fugiat nulla pariatur. Excepteur sint a qui officia deserunt mollit anim id est laborum.',
    imageUrl:
      'https://cf.geekdo-images.com/itemrep/img/pc5aIxQ9UFK5-ShY2CrZUDk_qAA=/fit-in/246x300/pic1603292.jpg'
  },
  {
    name: 'Alhambra',
    quantity: 6,
    price: 3999,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageUrl:
      'https://cf.geekdo-images.com/itemrep/img/RhxrVlZj3mmqA1NgLv5ApD3uNAc=/fit-in/246x300/pic4893652.jpg'
  },
  {
    name: 'Star Wars: Imperial Assault',
    quantity: 6,
    price: 6499,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageUrl:
      'https://cf.geekdo-images.com/itemrep/img/nEOFuVi_AQWvpoXc_-lnp0F1vNM=/fit-in/246x300/pic2247647.jpg'
  },
  {
    name: 'Star Wars: Rebellion',
    quantity: 6,
    price: 7949,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageUrl:
      'https://cf.geekdo-images.com/itemrep/img/JuNSftznTMMebnS3IOqM-B_reDA=/fit-in/246x300/pic4325841.jpg'
  },
  {
    name: 'Star Realms',
    quantity: 1,
    price: 1295,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageUrl:
      'https://cf.geekdo-images.com/itemrep/img/OvrUBlZ7dKZSPy5vYTJKgSmhGMU=/fit-in/246x300/pic1903816.jpg'
  },
  {
    name: 'Star Trek: Attack Wing',
    quantity: 6,
    price: 2789,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageUrl:
      'https://cf.geekdo-images.com/itemrep/img/14IgoACMyi5k55RUqyhuu2l0jEQ=/fit-in/246x300/pic1731799.jpg'
  },
  {
    name: 'Star Wars: Armada',
    quantity: 6,
    price: 7995,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageUrl:
      'https://cf.geekdo-images.com/itemrep/img/C_72qE74Qqc8tkTUZyTGrnQ_Two=/fit-in/246x300/pic2355171.jpg'
  },
  {
    name: 'Cthulhu Wars',
    quantity: 1,
    price: 3999,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageUrl:
      'https://cf.geekdo-images.com/itemrep/img/Q5jn_9sxJzHb9KTKKGq44t_k-3U=/fit-in/246x300/pic3527761.jpg'
  },
  {
    name: 'Mage Wars Arena',
    quantity: 1,
    price: 4599,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageUrl:
      'https://cf.geekdo-images.com/itemrep/img/O2TJ--piIBCyeBW5bwBsku2gAdU=/fit-in/246x300/pic2386027.jpg'
  },
  {
    name: 'Summoner Wars',
    quantity: 1,
    price: 1279,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageUrl:
      'https://cf.geekdo-images.com/itemrep/img/RsvZqD5PyUOBs7xgNYtUxtOv9Is=/fit-in/246x300/pic923048.jpg'
  },
  {
    name: 'Black Rose Wars',
    quantity: 6,
    price: 6095,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageUrl:
      'https://cf.geekdo-images.com/itemrep/img/OJTuPhPLkVxEZGBMh89hP49mnK4=/fit-in/246x300/pic3973771.jpg'
  },
  {
    name: 'Titan',
    quantity: 6,
    price: 8585,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageUrl:
      'https://cf.geekdo-images.com/itemrep/img/Hqn7db5Z7v3ZE7ZO1jI2gGoF6oI=/fit-in/246x300/pic4854191.png'
  }
]

// This is a quick way to add a lot of games at once.
// for (let i = 0; i < 10; i++) {
//   games.push({
//     name: 'Memoir 44',
//     quantity: 1,
//     price: 4999,
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     imageUrl:
//       'https://cf.geekdo-images.com/itemrep/img/oU2Qqb-aX3qCzQWz0RDIwPUea5A=/fit-in/246x300/pic43663.jpg'
//   })
// }

const orders = [
  {
    status: 'INCOMPLETE',
    orderDate: null,
    userId: 1
  },
  {
    status: 'COMPLETE',
    orderDate: null,
    userId: 2
  }
]

const orderitems = [
  {
    orderId: 1,
    gameId: 1,
    quantity: 7
  },
  {
    // Captilized because these are columns that created from the model associations
    orderId: 1,
    gameId: 2,
    quantity: 6
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  // const users = await Promise.all([
  //   User.create({email: 'cody@email.com', password: '123'}),
  //   User.create({email: 'murphy@email.com', password: '123'})
  // ])

  await Promise.all(
    users.map(user => {
      return User.create(user)
    })
  )

  await Promise.all(
    games.map(game => {
      return Game.create(game)
    })
  )

  await Promise.all(
    orders.map(order => {
      return Order.create(order)
    })
  )

  await Promise.all(
    orderitems.map(orderitem => {
      return OrderItem.create(orderitem)
    })
  )

  // console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
