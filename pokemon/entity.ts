import { Entity, ObjectIdColumn, Column } from 'typeorm'

import { ObjectId } from 'mongodb'

@Entity('pokemon')
export class PokemonEntity {

  @ObjectIdColumn()
  _id:ObjectId

  @Column({ unique: true })
  name: string

  @Column()
  type: string

  @Column()
  pokedex: number

  @Column()
  createdAt: Date
}