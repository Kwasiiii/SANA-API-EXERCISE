import { EntityRepository, Repository } from 'typeorm'
import { ContactEntity } from '../database/entities/contact.entity'

@EntityRepository(ContactEntity)
export class ContactRepository extends Repository<ContactEntity>{
  
}