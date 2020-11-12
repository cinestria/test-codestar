
import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { PokemonEntity } from '../pokemon/entity'
import { RealestateEntity } from '../realestate/entity'
import { UserEntity } from '../user/entity'

export const dataDbOption:TypeOrmModuleOptions = {
  database: 'data',
  entities: [PokemonEntity, UserEntity, RealestateEntity],
  synchronize: true,
}
  