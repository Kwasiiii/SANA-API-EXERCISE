import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm'
import { CustomerEntity } from './customer.entity'
import { TagEntity } from './tag.entity'

@Entity('contact')
export class ContactEntity{
  @PrimaryGeneratedColumn()
  id:number

  @Column()
  contactName: string

  @Column()
  email: string

  @OneToMany(() => CustomerEntity, customer => customer.contact)
  customer: CustomerEntity

  @OneToMany(() => TagEntity, tag => tag.id)
  tag: TagEntity[]
}