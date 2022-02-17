import { Router, Request, Response } from 'express'
import { CustomerEntity } from '../database/entities/customer.entity' //import Customer entity
import { CustomerServices } from '../services/customer.service' //import Customer service

export class  CustomerController {
  router: Router
  customerService: CustomerServices

  constructor(){
    this.router = Router()
    this.customerService = new CustomerServices() //create new customer service
    this.routes()
  }
  /**
   * Method to execute index in customer service and return customers in json format
   */
  index = async (req: Request, res: Response) => {
    const customers = await this.customerService.index()
    res.send(customers).json()
  }

  /**
   * Method to execute getOne method in customer service and return customer
   */
  getOne = async(req: Request, res: Response) => {
    const id = req['params']['id']
    const getCustomer = await this.customerService.getOne(Number(id))
    res.send(getCustomer)
  }

  /**
   * Method to execute create method in customer service and return newly created customer
   */
  create = async (req: Request, res: Response) => {
    const customer = req['body'] as CustomerEntity
    const newCustomer = await this.customerService.create(customer)
    res.send(newCustomer)
  }

  /**
   * Method to execute update in customer service and return updated customer
   */
  update = async (req: Request, res: Response) => {
    const customer = req['body'] as CustomerEntity
    const id = req['params']['id']
    res.send(this.customerService.update(customer, Number(id)))
  }

  /**
   * Method to execute delete in customer service and return {}
   */
  delete = async (req: Request, res: Response) => {
    const id = req['params']['id']
    res.send(this.customerService.delete(Number(id)))
  }

  /**
   * Configure the routes of controller
   */
  routes(){
    this.router.get('/', this.index)
    this.router.get('/:id', this.getOne)
    this.router.post('/',this.create)
    this.router.put('/:id', this.update)
    this.router.delete('/:id', this.delete)
  }
}