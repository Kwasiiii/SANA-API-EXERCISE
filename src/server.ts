import express from 'express'
import { createConnection } from 'typeorm'
import { CustomerController } from './controller/customer.controller' //import customer controller
import { BankAccountController } from './controller/bankaccount.controller' //import bank account controller
import { ContactController } from './controller/contact.controller' //import contact controller
import { TagController } from './controller/tag.controller' //import tag controller

class Server {
  customerController: CustomerController
  bankAccountController: BankAccountController
  contactController: ContactController
  tagController: TagController
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

    /**
     * Create new instance of controllers
     */
    this.customerController = new CustomerController()
    this.bankAccountController = new BankAccountController()
    this.contactController = new ContactController()
    this.tagController = new TagController()

    /**
     * Configure the new routes of the controllers
     */
    this.app.use('/api/users/',this.customerController.router)
    this.app.use('/api/bankaccounts/', this.bankAccountController.router)
    this.app.use('/api/contacts/', this.contactController.router)
    this.app.use('/api/tags/', this.tagController.router)
  }

  /**
   * Used to start the server
   */
  start(){
    this.app.listen(this.app.get('port'), () => {
      console.log(`???? Server is up and running on port: ${process.env.PORT || 3000}`)
    })
  }
}

const server = new Server() // Create server instance
server.start() // Execute the server