import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from 'typeorm'
import { TagEntity } from './tag.entity' //import Tag entity

@Entity('bank account')
export class BankAccountEntity{
  @PrimaryGeneratedColumn()
  id:number

  @Column()
  accNo: number

  @Column()
  sortCode: number

  @OneToMany(() => TagEntity, tag => tag.bankAccount)
  tag: TagEntity[]
}