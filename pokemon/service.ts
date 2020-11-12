import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { PokemonEntity } from './entity'
import { CreatePokemonDto } from './dto'

@Injectable()
export class PokemonService {
  constructor(@InjectRepository(PokemonEntity) private readonly PokemonRepository: Repository<PokemonEntity>) {}

  async createPokemon(data: CreatePokemonDto): Promise<PokemonEntity> {
    const pokemon = new PokemonEntity()
    pokemon.name = data.name
    pokemon.pokedex = data.pokedex
    pokemon.type = data.type
    pokemon.createdAt = new Date()

    await this.PokemonRepository.save(pokemon)

    return pokemon
  }

  async getPokemons(info) {
    const queryAstFields = info.fieldNodes[0].selectionSet.selections as any[]
    const selectFields = queryAstFields.map((obj)=>obj.name.value)

    return this.PokemonRepository.find({select:selectFields})
  }
}