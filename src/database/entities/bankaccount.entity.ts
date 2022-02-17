import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm'
import { CustomerEntity } from './customer.entity'
import { TagEntity } from './tag.entity' //import Tag entity

@Entity('bank account')
export class BankAccountEntity{
  @PrimaryGeneratedColumn()
  id:number

  @Column()
  accNo: number

  @Column()
  sortCode: number

  @OneToOne(()=> CustomerEntity, customer => customer.bankAccount, {onDelete: 'CASCADE'})
  @JoinColumn()
  customer: CustomerEntity

  @OneToMany(() => TagEntity, tag => tag.bankAccount)
  tag: TagEntity[]
}