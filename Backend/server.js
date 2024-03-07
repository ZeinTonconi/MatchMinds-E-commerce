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

    this.init()
  }

  async init () {
    await sequelize.sync({ force: false })
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

  }

  start () {
    this.app.listen(this.port, () => {
      console.log(`Server online on port ${this.port}`)
    })
  }
}

module.exports = Server