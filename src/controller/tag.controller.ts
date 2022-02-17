import { Router, Response, Request } from 'express'
import { TagEntity } from '../database/entities/tag.entity' //import Tag entity
import { TagService } from '../services/tag.service' //import Tag service

export class TagController {
  router: Router
  tagService: TagService

  constructor(){
    this.tagService = new TagService() //create new instance of service
    this.router = Router()
    this.routes()
  }

  /**
   * Method to execute index in tag service and return tag in json format
   */
  index = async (req: Request, res: Response) => {
    const tags = await this.tagService.index()
    res.send(tags).json()
  }
  
  /**
   * Method to execute getOne method in tag service and return tag
   */
  getOne = async(req: Request, res: Response) => {
    const id = req['params']['id']
    const getTag = await this.tagService.getOne(Number(id))
    res.send(getTag)
  }

  /**
   * Method to execute create method in tag service and return newly created tag
   */
  create = async (req: Request, res: Response) => {
    const tag = req['body'] as TagEntity;
    const newTag = await this.tagService.create(tag);
    res.send(newTag);
  }

  /**
   * Method to execute update in tag service and return updated tag
   */
  update = async (req: Request, res: Response) => {
    const tag = req['body'] as TagEntity
    const id =  req['params']['id']
    res.send(this.tagService.update(tag, Number(id)))
  }

  /**
   * Method to execute delete in tag service and return {}
   */
  delete = async (req: Request, res: Response) => {
    const id =  req['params']['id'];
    res.send(this.tagService.delete(Number(id)));
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