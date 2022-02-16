import { Router, Response, Request } from 'express'
import { TagEntity } from '../database/entities/tag.entity'
import { TagService } from '../services/tag.service'

export class TagController {
  router: Router
  tagService: TagService

  constructor(){
    this.tagService = new TagService()
    this.router = Router()
    this.routes()
  }

  index = async (req: Request, res: Response) => {
    const tags = await this.tagService.index()
    res.send(tags).json()
  } 

  create = async (req: Request, res: Response) => {
    const tag = req['body'] as TagEntity;
    const newTag = await this.tagService.create(tag);
    res.send(newTag);
  }

  update = async (req: Request, res: Response) => {
    const tag = req['body'] as TagEntity
    const id =  req['params']['id']
    res.send(this.tagService.update(tag, Number(id)))
  }

  delete = async (req: Request, res: Response) => {
    const id =  req['params']['id'];
    res.send(this.tagService.delete(Number(id)));
  } 

  routes(){
    this.router.get('/', this.index);
    this.router.post('/', this.create);
    this.router.put('/:id', this.update);
    this.router.delete('/:id', this.delete);
  }

}