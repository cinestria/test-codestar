import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class InputFacebookUser {
  @Field()
  readonly token!: string

  @Field()
  readonly name!: string

  @Field()
  readonly image!: string
}