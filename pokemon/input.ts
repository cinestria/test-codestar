import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class InputPokemon {
  @Field() readonly name: string

  @Field() readonly type: string

  @Field() readonly pokedex: number
}