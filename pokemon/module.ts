import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PokemonResolver } from './resolver'
import { PokemonService } from './service'
import { PokemonEntity } from './entity'

@Module({
  imports: [ TypeOrmModule.forFeature([ PokemonEntity ]) ],
  providers: [ PokemonResolver, PokemonService ],
})
export class PokemonModule {}