import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql'
import { PokemonEntity } from './entity'
import { CreatePokemonDto } from './dto'
import { PokemonService } from './service'
import { InputPokemon } from './input'

@Resolver((of) => PokemonEntity)
export class PokemonResolver {
  constructor(private readonly pokemonService: PokemonService) {}

  @Query(() => [ CreatePokemonDto ])
  async pokemon(@Info() info) {
    return this.pokemonService.getPokemons(info)
  }

  @Mutation(() => CreatePokemonDto)
  async createPokemon(@Args('data') data: InputPokemon) {
    return this.pokemonService.createPokemon(data)
  }
}