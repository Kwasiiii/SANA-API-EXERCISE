import { EntityRepository, Repository } from 'typeorm'
import { BankAccountEntity } from '../database/entities/bankaccount.entity' //import Bank account entity

@EntityRepository(BankAccountEntity)
export class BankAccountRepository extends Repository<BankAccountEntity>{
  
}