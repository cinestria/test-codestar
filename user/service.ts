
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import * as jwt from 'jsonwebtoken'

import { FacebookAuth, UserEntity } from './entity'
import { UserTokenData } from './tokendata'
import { config } from '../config'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepo: Repository<UserEntity>,
  ) {}

  createToken(user: UserEntity) {
    const tokenData: UserTokenData = { ...user, _id:user._id.toHexString() }
    return jwt.sign(tokenData, config.JWT_SECRET)
  }

  createFacebookUser(facebook: FacebookAuth) {
    return this.userRepo.create({ facebook }).save()
  }

  getUserByFacebookToken(token: string) {
    return this.userRepo.findOne({ where:{'facebook.token':token} })
  }

  /*
  private createTripUpdateError(
    message: string,
    launches: number[],
  ): TripUpdateResponseModel {
    return { success: false, message, launches }
  }

  async addTrips(
    ids: number[],
    { email }: UserModel,
  ): Promise<TripUpdateResponseModel> {
    try {
      const user = await this.getUserByEmail(email)
      user.trips = Array.from(new Set(user.trips.concat(ids)))
      await user.save()
      return {
        success: true,
        message: `Sucessfully added trips with ids: ${ids.join(', ')}`,
        launches: ids,
      }
    } catch (err) {
      return this.createTripUpdateError(`Error: ${err}`, ids)
    }
  }

  async removeTrip(
    id: number,
    { email }: UserModel,
  ): Promise<TripUpdateResponseModel> {
    try {
      const user = await this.getUserByEmail(email)
      if (!user.trips.includes(Number(id))) {
        return this.createTripUpdateError(
          'Cannot cancel trip that is not booked',
          [id],
        )
      }
      user.trips = user.trips.filter(t => t !== Number(id))
      await user.save()
      return {
        success: true,
        message: `Sucessfully removed trip with id: ${id}`,
        launches: [id],
      }
    } catch (err) {
      return this.createTripUpdateError(`Error: ${err}`, [id])
    }
  } */
}
