import { getConnection } from 'typeorm'
import { ContactEntity } from '../database/entities/contact.entity' //import Contact entity
import { ContactRepository } from '../repository/contact.repository' //import Contact repository

export class ContactService {
  contactRepository: ContactRepository

  constructor(){
    this.contactRepository = getConnection('user').getCustomRepository(ContactRepository)
  }

  /**
   * Find method to find all contact in the database
   * @returns all contact
   */
  index = async () => {
    const contact = await this.contactRepository.find({
      relations: ['tag']
    })
    return contact
  }

  /**
   * FindOne method to retrieve a specific contact
   * @param id of contact
   * @returns contact
   */
  getOne = async( id: number) => {
    const findContact = await this.contactRepository.findOne(id,{
      relations: ['tag']
    })
    return findContact
  }

  /**
   * Save method to create/add a new contact to the database
   * @returns the new contact
   */
  create = async (contact: ContactEntity ) => {
    const newContact = await this.contactRepository.save(contact)
    return newContact
  }

  /**
   * Update method to update a specific contact on the database
   * @param id of contact
   * @returns updated contact
   */
  update = async (contact: ContactEntity, id: number) => {
    const updatedContact = await this.contactRepository.update(id, contact)
    return updatedContact
  }

  /**
   * Delete method to delete specific contact from database 
   * @param id of contact
   * @returns deleted contact
   */
  delete = async (id: number) => {
    const deletedContact = await this.contactRepository.delete(id)
    return deletedContact
  }
}