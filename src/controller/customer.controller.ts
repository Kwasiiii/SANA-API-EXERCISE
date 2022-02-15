import { Router, Request, Response } from 'express'
import { CustomerEntity } from '../database/entities/customer.entity'
import { CustomerServices } from '../services/customer.service'
// import { CustomerEntity } from '../database/entities/customer.entity'

export class  CustomerController {
  router: Router
  customerService: CustomerServices

  constructor(){
    this.router = Router()
    this.customerService = new CustomerServices()
    this.routes()
  }

  index = async (req: Request, res: Response) => {
    const customers = await this.customerService.index()
    res.send(customers).json()
  }

  create = async (req: Request, res: Response) => {
    const {bankAccount, ...body} = req.body
    const customer = req.body as CustomerEntity
    const newCustomer = await this.customerService.create(customer)
    res.send(newCustomer)
  }

  update = async (req: Request, res: Response) => {
    const {bankAccount, ...body} = req.body
    const customer = req.body as CustomerEntity
    const id = req['params']['id']
    res.send(this.customerService.update(customer, Number(id)))
  }

  delete = async (req: Request, res: Response) => {
    const id = req['params']['id']
    res.send(this.customerService.delete(Number(id)))
  }

  routes(){
    this.router.get('/', this.index)
    this.router.post('/',this.create)
    this.router.put('/:id', this.update)
    this.router.delete('/:id', this.delete)
  }
}