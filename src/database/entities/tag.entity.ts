import { Entity, Column, PrimaryGeneratedColumn, Generated, OneToOne, OneToMany, ManyToOne } from 'typeorm'
import { CustomerEntity } from './customer.entity'
import { BankAccountEntity } from './bankaccount.entity'

@Entity('tag')
export class tagEntity{
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  tagName: string

  @Column()
  @Generated("uuid")
  tagCode: number

  @ManyToOne(() => CustomerEntity, customer => customer.tag)
  customer: CustomerEntity

  @ManyToOne(() => BankAccountEntity, bankAccount => bankAccount)
  bankAccount: BankAccountEntity
}