import { Router, Response, Request } from 'express'
import { ContactEntity } from '../database/entities/contact.entity'
import { ContactService } from '../services/contact.service'

export class ContactController {
  router: Router
  contactService: ContactService

  constructor(){
    this.contactService = new ContactService
    this.router = Router()
    this.routes()
  }

  index = async (req: Request, res: Response) => {
    const contact = await this.contactService.index()
    res.send(contact).json()
  }

  getOne = async(req: Request, res: Response) => {
    const id = req['params']['id']
    const getContact = await this.contactService.getOne(Number(id))
    res.send(getContact)
  }


  create = async (req: Request, res: Response) => {
    const contact = req['body'] as ContactEntity
    const newContact = await this.contactService.create(contact)
    res.send(newContact)
  }

  update = async (req: Request, res: Response) => {
    const contact = req['body'] as ContactEntity
    const id = req['params']['id']
    res.send(this.contactService.update(contact, Number(id)))
  }

  delete = async (req: Request, res: Response) => {
    const id = req['params']['id']
    res.send(this.contactService.delete(Number(id)))
  }

  routes(){
    this.router.get('/', this.index)
    this.router.get('/:id', this.getOne)
    this.router.post('/', this.create)
    this.router.put('/:id', this.update)
    this.router.delete('/:id', this.delete)
  }
}