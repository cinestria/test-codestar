import {
  Resolver,
} from '@nestjs/graphql'
import { RealestateService } from './service'
  
@Resolver('User')
export class RealestateResolver {
  constructor(
    private realestateService: RealestateService,
  ) {}
  
}