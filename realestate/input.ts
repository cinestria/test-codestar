import { InputType, Field } from '@nestjs/graphql'

import { Point } from 'geojson'

@InputType()
export class InputRealestate {
  @Field() readonly location: Point
}