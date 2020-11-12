import { ObjectType, Field } from '@nestjs/graphql'

@ObjectType()
export class FacebookAuthDto {
  @Field()
  readonly token:string

  @Field()
  readonly name:string

  @Field()
  readonly image:string
}

@ObjectType()
export class UserDto {
  @Field()
  readonly _id?: string

  @Field(type => [FacebookAuthDto])
  readonly facebook?: FacebookAuthDto

  @Field()
  readonly createdAt!: Date
}