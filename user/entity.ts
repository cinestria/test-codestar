import { Entity, BaseEntity, ObjectIdColumn, Column, CreateDateColumn } from 'typeorm'

import { ObjectId } from 'mongodb'

export interface FacebookAuth {
  token:string
  name:string
  image:string
}

@Entity('user')
export class UserEntity extends BaseEntity {

  @ObjectIdColumn()
  _id:ObjectId

  @Column()
  facebook?: FacebookAuth
  
  @CreateDateColumn()
  createdAt: Date
}