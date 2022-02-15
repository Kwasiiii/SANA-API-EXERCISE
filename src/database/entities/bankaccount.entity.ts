import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { tagEntity } from './tag.entity'

@Entity('bank account')
export class BankAccountEntity{
  @PrimaryGeneratedColumn()
  id:number

  @Column()
  accNo: number

  @Column()
  sortCode: number

  @OneToMany(() => tagEntity, tag => tag.id)
  tag: tagEntity[]
}