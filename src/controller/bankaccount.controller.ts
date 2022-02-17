import { Router, Response, Request } from 'express'
import { BankAccountEntity } from '../database/entities/bankaccount.entity' //import Back Account entity
import { BankAccountService } from '../services/bankaccount.service' //import Bank Account service

export class BankAccountController{
  router: Router
  bankAccountService: BankAccountService

  constructor(){
    this.bankAccountService = new BankAccountService() // create new instance of service
    this.router = Router()
    this.routes()
  }

  /**
   * Method to execute index in bank account service and return bank account in json format
   */
  index = async (req: Request, res: Response) => {
    const bankAccount = await this.bankAccountService.index()
    res.send(bankAccount).json()
  }

  /**
   * Method to execute getOne method in bank account service and return bank account
   */
  getOne = async(req: Request, res: Response) => {
    const id = req['params']['id']
    const getBankAccount = await this.bankAccountService.getOne(Number(id))
    res.send(getBankAccount)
  }

  /**
   * Method to execute create method in bank account service and return newly created bank account
   */
  create = async (req: Request, res: Response) => {
    const bankAccount = req['body'] as BankAccountEntity
    const newBankAccount = await this.bankAccountService.create(bankAccount)
    res.send(newBankAccount)
  }

  /**
   * Method to execute update in bank account service and return updated bank account
   */
  update = async (req: Request, res: Response) => {
    const bankAccount = req['body'] as BankAccountEntity;
    const id =  req['params']['id']
    res.send(this.bankAccountService.update(bankAccount, Number(id)))
  }

  /**
   * Method to execute delete in bank account service and return {}
   */
  delete = async (req: Request, res: Response) => {
    const id =  req['params']['id'];
    res.send(this.bankAccountService.delete(Number(id)));
  }

  /**
   * Configure the routes of controller
   */
  routes(){
    this.router.get('/', this.index)
    this.router.get('/:id', this.getOne)
    this.router.post('/', this.create)
    this.router.put('/:id', this.update)
    this.router.delete('/:id', this.delete)
  }
}