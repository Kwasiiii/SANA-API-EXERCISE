import { getConnection } from 'typeorm'
import { CustomerEntity } from '../database/entities/customer.entity' //import Customer entity
import { CustomerRepository } from '../repository/customer.repository' //import Customer repository

export class CustomerServices {
  customerRepository: CustomerRepository

  constructor(){
    this.customerRepository = getConnection('user').getCustomRepository(CustomerRepository)
  }

  /**
   * Find method to find all customers in the database
   * @returns all customers
   */
  index = async() => {
    const customers = await this.customerRepository.find({
      relations: ['bankAccount', 'contact', 'tag']
    })
    return customers
  } 

  /**
   * FindOne method to retrieve a specific customer
   * @param id of customer
   * @returns customer
   */
  getOne = async( id: number) => {
    const findCustomer = await this.customerRepository.findOne(id,{
      relations: ['bankAccount', 'contact', 'tag']
    })
    return findCustomer
  }

  /**
   * Save method to create/add a new customer to the database
   * @returns the new tag
   */
  create = async(customer: CustomerEntity) => {
    const newCustomer = await this.customerRepository.save(customer)
    return newCustomer
  }

  /**
   * Update method to update a specific customer on the database
   * @param id of customer
   * @returns updated customer
   */
  update = async(customer: CustomerEntity, id: number) => {
    const updatedCustomer = await this.customerRepository.update(id, customer)
    return updatedCustomer
  }

  /**
   * Delete method to delete specific customer from database 
   * @param id of customer
   * @returns deleted customer
   */
  delete = async(id: number) => {
    const deletedCustomer = await this.customerRepository.delete(id)
    return deletedCustomer
  }
}