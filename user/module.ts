import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserResolver } from './resolver'
import { UserService } from './service'
import { UserEntity } from './entity'

@Module({
  imports: [ TypeOrmModule.forFeature([ UserEntity ]) ],
  providers: [ UserResolver, UserService ],
})
export class UserModule {}