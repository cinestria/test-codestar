import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { MongoRepository } from 'typeorm'
import { RealestateEntity } from './entity'
import { InputRealestate } from './input'

@Injectable()
export class RealestateService {
  constructor(@InjectRepository(RealestateEntity) private readonly realestateRepository: MongoRepository<RealestateEntity>) {
    this.realestateRepository.createCollectionIndex({ location: '2dsphere' })
  }

  async createRealestate(data: InputRealestate): Promise<RealestateEntity> {
    const realestate = new RealestateEntity()
    realestate.location = data.location

    await this.realestateRepository.save(realestate)

    return realestate
  }

  async getRealestates(info) {
    const queryAstFields = info.fieldNodes[0].selectionSet.selections as any[]
    const selectFields = queryAstFields.map((obj)=>obj.name.value)

    return this.realestateRepository.find({select:selectFields})
  }
}