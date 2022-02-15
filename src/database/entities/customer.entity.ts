import { Entity, Column, PrimaryGeneratedColumn, Generated, OneToOne, OneToMany, ManyToOne, JoinColumn } from 'typeorm'
import { BankAccountEntity } from './bankaccount.entity'
import { ContactEntity } from './contact.entity'
import { tagEntity } from './tag.entity'


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

  @OneToOne(() => BankAccountEntity)
  @JoinColumn()
  bankAccount: BankAccountEntity

  @OneToMany(() => ContactEntity, contact => contact.id)
  contact: ContactEntity[]

  @OneToMany(() => tagEntity, tag => tag.id)
  tag: tagEntity[]
}





