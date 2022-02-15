import { Router, Response, Request } from 'express'
import { BankAccountEntity } from '../database/entities/bankaccount.entity'
import { BankAccountService } from '../services/bankaccount.service'

export class BankAccountController{
  router: Router
  bankAccountService: BankAccountService

  constructor(){
    this.bankAccountService = new BankAccountService()
    this.router = Router()
    this.routes()
  }

  index = async (req: Request, res: Response) => {
    const bankAccount = await this.bankAccountService.index()
    res.send(bankAccount).json()
  }

  create = async (req: Request, res: Response) => {
    const bankAccount = req['body'] as BankAccountEntity
    const newBankAccount = await this.bankAccountService.create(bankAccount)
    res.send(newBankAccount)
  }

  update = async (req: Request, res: Response) => {
    const post = req['body'] as BankAccountEntity;
    const id =  req['params']['id']
  }

  delete = async (req: Request, res: Response) => {
    const id =  req['params']['id'];
    res.send(this.bankAccountService.delete(Number(id)));
  }



  routes(){
    this.router.get('/', this.index);
    this.router.post('/', this.create);
    this.router.put('/:id', this.update);
    this.router.delete('/:id', this.delete);
  }
}