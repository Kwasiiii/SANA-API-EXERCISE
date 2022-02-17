import { Entity, Column, PrimaryGeneratedColumn, Generated, OneToOne, OneToMany, ManyToOne, JoinColumn } from 'typeorm'
import { BankAccountEntity } from './bankaccount.entity' //import Bank Account entity
import { ContactEntity } from './contact.entity' //import Contact entity
import { TagEntity } from './tag.entity' //import Tag entity


@Entity('customer')
export class CustomerEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  phoneNo: string

  @OneToOne(() => BankAccountEntity, bankAccount => bankAccount.customer, {onDelete: 'CASCADE'})
  // @JoinColumn()
  bankAccount: BankAccountEntity

  @OneToMany(() => ContactEntity, contact => contact.customer,{
    cascade: true,
    onDelete:'CASCADE'
  })
  contact: ContactEntity[]

  @OneToMany(() => TagEntity, tag => tag.customer,{
    cascade: true
  })
  tag: TagEntity[]
}





