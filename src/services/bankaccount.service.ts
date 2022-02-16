import { getConnection } from 'typeorm'
import { BankAccountEntity } from '../database/entities/bankaccount.entity'
import { BankAccountRepository } from '../repository/bankaccount.repository'

export class BankAccountService {
  bankAccountRepository: BankAccountRepository

  constructor(){
    this.bankAccountRepository = getConnection('user').getCustomRepository(BankAccountRepository)
  }

  index = async () => {
    const bankAccounts = await this.bankAccountRepository.find({
      relations: ['tag']
    })
    return bankAccounts
  }
  
  create = async (bankAccount: BankAccountEntity) => {
    const newBankAccount = await this.bankAccountRepository.save(bankAccount)
    return newBankAccount
  }
  
  update =  async(bankAccount: BankAccountEntity, id: number) => {
    const updatedBankAccount = await this.bankAccountRepository.update(id, bankAccount);
    return updatedBankAccount
  } 

  delete = async (id: number) => {
    const deletedPost = await this.bankAccountRepository.delete(id)
    return deletedPost
  }

} 