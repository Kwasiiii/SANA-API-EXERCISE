import { getConnection } from 'typeorm'
import { TagEntity } from '../database/entities/tag.entity' //import Tag entity
import { TagRepository } from '../repository/tag.repository' // import Tag repository

export class TagService {

  tagRepository: TagRepository

  constructor(){
    this.tagRepository = getConnection('user').getCustomRepository(TagRepository)
  }

  /**
   * Find method to find all tags in the database
   * @returns all tags
   */
  index = async () => {
    const tag = await this.tagRepository.find({
      // relations: ['customer', 'bankAccount', 'contact' ]
    })
    return tag
  } 

  /**
   * FindOne method to retrieve a specific tag
   * @param id of tag
   * @returns tag
   */
  getOne = async( id: number) => {
    const findtag = await this.tagRepository.findOne(id,{
      // relations: ['bankAccount', 'contact', 'tag']
    })
    return findtag
  }

  /**
   * Save method to create/add a new tag to the database
   * @returns the new tag
   */
  create = async (tag: TagEntity) => {
    const newTag = await this.tagRepository.save(tag)
    return newTag
  }

  /**
   * Update method to update a specific tag on the database
   * @param id of tag
   * @returns updated tag
   */
  update =  async(tag: TagEntity, id: number) => {
    const updatedTag = await this.tagRepository.update(id, tag)
    return updatedTag
  } 

  /**
   * Delete method to delete specific tag from database 
   * @param id of tag
   * @returns deleted tag
   */
  delete = async (id: number) => {
    const deletedTag = await this.tagRepository.delete(id)
    return deletedTag
  }

}