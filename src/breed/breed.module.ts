import { Module } from '@nestjs/common';
import { BreedService } from './breed.service';
import { BreedController } from './breed.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Breed, BreedSchema } from './entities/breed.entity';

@Module({
  controllers: [BreedController],
  providers: [BreedService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Breed.name,
        schema: BreedSchema
      }
    ])
  ]
})
export class BreedModule {}
