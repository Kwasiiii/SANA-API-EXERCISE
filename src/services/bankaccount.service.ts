import { getConnection } from 'typeorm'
import { BankAccountEntity } from '../database/entities/bankaccount.entity' //import Back Account entity
import { BankAccountRepository } from '../repository/bankaccount.repository' //import Back Account repository

export class BankAccountService {
  bankAccountRepository: BankAccountRepository

  constructor(){
    this.bankAccountRepository = getConnection('user').getCustomRepository(BankAccountRepository)
  }

  /**
   * Find method to find all bank accounts in the database
   * @returns all bank accounts
   */
  index = async () => {
    const bankAccounts = await this.bankAccountRepository.find({
      relations: ['customer','tag']
    })
    return bankAccounts
  }

  /**
   * FindOne method to retrieve a specific bank account
   * @param id of bank account
   * @returns back account
   */
  getOne = async( id: number) => {
    const findBankAccount = await this.bankAccountRepository.findOne(id,{
      relations: ['tag']
    })
    return findBankAccount
  }
  
  /**
   * Save method to create/add a new bank account to the database
   * @returns the new bank account
   */
  create = async (bankAccount: BankAccountEntity) => {
    const newBankAccount = await this.bankAccountRepository.save(bankAccount)
    return newBankAccount
  }

  /**
   * Update method to update a specific bank account on the database
   * @param id of bank account
   * @returns updated bank account
   */
  update =  async(bankAccount: BankAccountEntity, id: number) => {
    const updatedBankAccount = await this.bankAccountRepository.update(id, bankAccount);
    return updatedBankAccount
  } 

  /**
   * Delete method to delete specific bank account from database 
   * @param id of bank account
   * @returns deleted bank account
   */
  delete = async (id: number) => {
    const deletedPost = await this.bankAccountRepository.delete(id)
    return deletedPost
  }

} 