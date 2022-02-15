import { EntityRepository, Repository } from 'typeorm'
import { BankAccountEntity } from '../database/entities/bankaccount.entity'

@EntityRepository(BankAccountEntity)
export class BankAccountRepository extends Repository<BankAccountEntity>{
  
}