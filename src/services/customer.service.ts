import { getConnection } from 'typeorm'
import { CustomerEntity } from '../database/entities/customer.entity'
import { CustomerRepository } from '../repository/customer.repository'

export class CustomerServices {
  customerRepository: CustomerRepository

  constructor(){
    this.customerRepository = getConnection('user').getCustomRepository(CustomerRepository)
  }

  index = async() => {
    const customers = await this.customerRepository.find({
      relations: ['bankAccount']
    })
    return customers
  } 

  create = async(customer: CustomerEntity) => {
    const newCustomer = await this.customerRepository.save(customer)
    return newCustomer
  }

  update = async(customer: CustomerEntity, id: number) => {
    const updatedCustomer = await this.customerRepository.update(id, customer)
    return updatedCustomer
  }

  delete = async(id: number) => {
    const deletedCustomer = await this.customerRepository.delete(id)
    return deletedCustomer
  }
}