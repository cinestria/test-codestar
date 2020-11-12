import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { RealestateResolver } from './resolver'
import { RealestateService } from './service'
import { RealestateEntity } from './entity'

@Module({
  imports: [ TypeOrmModule.forFeature([ RealestateEntity ]) ],
  providers: [ RealestateResolver, RealestateService ],
})
export class RealestateModule {}