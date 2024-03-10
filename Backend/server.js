// Variables de entorno
// require('dotenv').config()

const express = require('express')
const cors = require('cors')
const sequelize = require('./database/config.database')


require('./models/index.models')



class Server {

  constructor () {
    
    this.port = 8080;
    // this.port = process.env.APP_PORT
    this.app = express()

    this.productsPath = '/api/products';
    this.authPath = '/api/auth';
    //1er paso agregar path
    this.cartPath = '/api/cart';

    this.init()
  }

  async init () {
    // force: true => Borra toda la BD y crea las tablas todo de cero
    // force: false => Si no existe una table puuuum
    await sequelize.sync({ force: true })
    this.middlewares()
    this.routes()

  }

  middlewares () {
    this.app.use(cors())

    this.app.use(express.json())

    this.app.use(express.static('public'))
  }

//   getConnection = (req, res, next) => {
//     const { pool, connection } = this.connection
//     req.pool = pool
//     req.connection = connection
//     next()
//   }

  routes () {
    
    this.app.use(this.productsPath, require('./routes/products.routes'));
    this.app.use(this.authPath, require('./routes/auth.routes'));
    this.app.use(this.cartPath, require('./routes/cart.routes')); 
    // 2do paso declarar el route
    // this.app.use(this.cart, )

  }

  start () {
    this.app.listen(this.port, () => {
      console.log(`Server online on port ${this.port}`)
    })
  }
}

module.exports = Server