import { Entity, Column, PrimaryGeneratedColumn, Generated, OneToOne, OneToMany, ManyToOne, JoinColumn } from 'typeorm'
import { CustomerEntity } from './customer.entity'
import { BankAccountEntity } from './bankaccount.entity'
import { ContactEntity } from './contact.entity'

@Entity('tag')
export class TagEntity{
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  tagName: string

  @Column()
  @Generated("uuid")
  tagCode: number

  @ManyToOne(() => CustomerEntity, customer => customer.tag,{
    onDelete: 'CASCADE'
  })
  // @JoinColumn()
  customer: CustomerEntity

  @ManyToOne(() => ContactEntity, contact => contact.tag)
  // @JoinColumn()
  contact: ContactEntity

  @ManyToOne(() => BankAccountEntity, bankAccount => bankAccount)
  // @JoinColumn()
  bankAccount: BankAccountEntity
}