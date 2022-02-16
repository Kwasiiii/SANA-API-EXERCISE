import { getConnection } from 'typeorm'
import { TagEntity } from '../database/entities/tag.entity'
import { TagRepository } from '../repository/tag.repository'

export class TagService {

  tagRepository: TagRepository

  constructor(){
    this.tagRepository = getConnection('user').getCustomRepository(TagRepository)
  }

  index = async () => {
    const tag = await this.tagRepository.find({
      // relations: ['customer', 'bankAccount', 'contact' ]
    })
    return tag
  } 

  create = async (tag: TagEntity) => {
    const newTag = await this.tagRepository.save(tag)
    return newTag
  }

  update =  async(tag: TagEntity, id: number) => {
    const updatedTag = await this.tagRepository.update(id, tag)
    return updatedTag
  } 

  delete = async (id: number) => {
    const deletedTag = await this.tagRepository.delete(id)
    return deletedTag
  }

}