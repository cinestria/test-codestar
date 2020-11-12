import { Module } from '@nestjs/common'

import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'
import { PokemonModule } from './pokemon/module'
import { RealestateModule } from './realestate/module'
import { UserModule } from './user/module'
import { config } from './config'

console.log(JSON.stringify(config.DB_OPTIONS))

@Module({
  imports: [
    TypeOrmModule.forRoot(config.DB_OPTIONS),
    GraphQLModule.forRoot(config.GQL_OPTIONS),
    PokemonModule,
    UserModule,
    RealestateModule,
  ],
  controllers: [
  ],
  providers: [],
})
export class AppModule {}
