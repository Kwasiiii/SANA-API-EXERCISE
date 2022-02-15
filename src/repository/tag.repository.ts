import { EntityRepository, Repository } from 'typeorm'
import { tagEntity } from '../database/entities/tag.entity'

@EntityRepository(tagEntity)
export class TagRepository extends Repository<tagEntity>{
  
}