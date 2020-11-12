import {
  Resolver,
  Query,
  Mutation,
  Args,
  Context,
} from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
  
import { AuthGuard } from '../guard/auth'
import { UserService } from './service'
import { UserTokenData } from './tokendata'
import { InputFacebookUser } from './input'
import { UserDto } from './dto'
  
@Resolver('User')
export class UserResolver {
  constructor(
    private userService: UserService,
  ) {}
  
  @Query(() => [ UserDto ])
  @UseGuards(AuthGuard)
  me(@Context('user') user: UserTokenData) {
    return this.userService.getUserByFacebookToken(user.facebook.token)
  }
  
  @Mutation(() => [ String ])
  async login(@Args('data') data: InputFacebookUser) {
    let user = await this.userService.getUserByFacebookToken(data.token)
    if (!user) {
      user = await this.userService.createFacebookUser(data)
    }
    return this.userService.createToken(user)
  }
  
  /*
  @Mutation()
  @UseGuards(AuthGuard)
  async bookTrips(
  @Args('launchIds') ids: number[],
    @Context('user') user: UserModel,
  ) {
    return this.userService.addTrips(ids, user)
  }
  
  @Mutation()
  @UseGuards(AuthGuard)
  cancelTrip(@Args('launchId') id: number, @Context('user') user: UserModel) {
    return this.userService.removeTrip(id, user)
  } */
}