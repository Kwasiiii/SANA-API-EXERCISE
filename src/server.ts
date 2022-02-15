import express from 'express'
import { CustomerController } from './controller/customer.controller'
import { createConnection } from 'typeorm'
import { BankAccountController } from './controller/bankaccount.controller';


// createConnection({
//   type: 'postgres',
//   host: 'localhost',
//   port: 5433,
//   username: 'user',
//   password: 'user',
//   entities: ['build/database/entities/**/*.js'],
//   synchronize: true,
//   name: 'user'
// }).then( () => {

//   const app = express()

//   const userController = new CustomerController()
  
//   app.set('port', process.env.Port || 3000)

//   app.use('/api/users/', userController.router)

//   app.listen(app.get('port'), () => {
// console.log(`🚀 Server is up and running on port: ${process.env.PORT || 3000}`)
//   })
// })

class Server {
  customerController: CustomerController
  bankAccountController: BankAccountController
  app: express.Application;

  constructor(){
    this.app = express() // init the application
    this.configuration()
    this.routes()
  }

  /**
   * Method to configure the server,
   * If we didn't configure the port into the environment 
   * variables it takes the default port 3000
   */
  configuration() {
    this.app.set('port', process.env.PORT || 3000)
    this.app.use(express.json())
  }

  /**
   * Method to configure the routes
   */
  async routes(){
    await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'user',
      password: 'user',
      entities: ['build/database/entities/**/*.js'],
      synchronize: true,
      name: 'user'
    })

    this.customerController = new CustomerController()
    this.bankAccountController = new BankAccountController()

    this.app.use('/api/users/',this.customerController.router) // Configure the new routes of the controller post
    this.app.use('/api/bankaccounts/', this.bankAccountController.router)
  }

  /**
   * Used to start the server
   */
  start(){
    this.app.listen(this.app.get('port'), () => {
      console.log(`🚀 Server is up and running on port: ${process.env.PORT || 3000}`)
    })
  }
}

const server = new Server() // Create server instance
server.start() // Execute the server