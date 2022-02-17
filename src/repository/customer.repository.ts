import { EntityRepository, Repository } from 'typeorm'
import { CustomerEntity } from '../database/entities/customer.entity' //import Customer entity

@EntityRepository(CustomerEntity)
export class CustomerRepository extends Repository<CustomerEntity> {
  
}