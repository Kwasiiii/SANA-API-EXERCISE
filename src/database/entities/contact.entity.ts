import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm'
import { CustomerEntity } from './customer.entity' //import Customer entity
import { TagEntity } from './tag.entity' //import Tag entity

@Entity('contact')
export class ContactEntity{
  @PrimaryGeneratedColumn()
  id:number

  @Column()
  contactName: string

  @Column()
  email: string

  @ManyToOne(() => CustomerEntity, customer => customer.contact,{
    onDelete: 'CASCADE'
  })
  @JoinColumn()
  customer: CustomerEntity
        
  @OneToMany(() => TagEntity, tag => tag.contact)
  tag: TagEntity[]
}