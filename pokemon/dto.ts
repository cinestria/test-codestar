import { ObjectType, Field } from '@nestjs/graphql'

@ObjectType()
export class CreatePokemonDto {
  @Field() readonly _id?: string

  @Field() readonly name: string

  @Field() readonly type: string

  @Field() readonly pokedex: number

  @Field() readonly createdAt?: Date
}