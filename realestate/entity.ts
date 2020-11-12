import { Entity, ObjectIdColumn, Column } from 'typeorm'

import { ObjectId } from 'mongodb'

import { Point } from 'geojson'

export enum RealestateType   {

}

@Entity('realestate')
export class RealestateEntity {

  @ObjectIdColumn()
  _id:ObjectId

  @Column()
  type:RealestateType

  @Column()
  location: Point
}