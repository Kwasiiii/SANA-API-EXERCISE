import { Router, Response, Request } from 'express'
import { ContactEntity } from '../database/entities/contact.entity' //import Contact entity
import { ContactService } from '../services/contact.service' //import Contact service

export class ContactController {
  router: Router
  contactService: ContactService

  constructor(){
    this.contactService = new ContactService //create a new instance contact service
    this.router = Router()
    this.routes()
  }

  /**
   * Method to execute index in contact service and return contact in json format
   */
  index = async (req: Request, res: Response) => {
    const contact = await this.contactService.index()
    res.send(contact).json()
  }

  /**
   * Method to execute getOne method in contact service and return contact
   */
  getOne = async(req: Request, res: Response) => {
    const id = req['params']['id']
    const getContact = await this.contactService.getOne(Number(id))
    res.send(getContact)
  }

  /**
   * Method to execute create method in contact service and return newly created contact
   */
  create = async (req: Request, res: Response) => {
    const contact = req['body'] as ContactEntity
    const newContact = await this.contactService.create(contact)
    res.send(newContact)
  }

  /**
   * Method to execute update in contact service and return updated contact
   */
  update = async (req: Request, res: Response) => {
    const contact = req['body'] as ContactEntity
    const id = req['params']['id']
    res.send(this.contactService.update(contact, Number(id)))
  }

  /**
   * Method to execute delete in contact service and return {}
   */
  delete = async (req: Request, res: Response) => {
    const id = req['params']['id']
    res.send(this.contactService.delete(Number(id)))
  }

  /**
   * Configure the routes of controller
   */
  routes(){
    this.router.get('/', this.index)
    this.router.get('/:id', this.getOne)
    this.router.post('/', this.create)
    this.router.put('/:id', this.update)
    this.router.delete('/:id', this.delete)
  }
}