import { EntityRepository, Repository } from 'typeorm'
import { TagEntity } from '../database/entities/tag.entity'//import Tag entity

@EntityRepository(TagEntity)
export class TagRepository extends Repository<TagEntity>{
  
}