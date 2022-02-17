import { getConnection } from 'typeorm'
import { ContactEntity } from '../database/entities/contact.entity'
import { ContactRepository } from '../repository/contact.repository'

export class ContactService {
  contactRepository: ContactRepository

  constructor(){
    this.contactRepository = getConnection('user').getCustomRepository(ContactRepository)
  }

  index = async () => {
    const contact = await this.contactRepository.find({
      relations: ['tag']
    })
    return contact
  }

  getOne = async( id: number) => {
    const findContact = await this.contactRepository.findOne(id,{
      relations: ['tag']
    })
    return findContact
  }

  create = async (contact: ContactEntity ) => {
    const newContact = await this.contactRepository.save(contact)
    return newContact
  }

  update = async (contact: ContactEntity, id: number) => {
    const updatedContact = await this.contactRepository.update(id, contact)
    return updatedContact
  }

  delete = async (id: number) => {
    const deletedContact = await this.contactRepository.delete(id)
    return deletedContact
  }
}