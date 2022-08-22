import { Module } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CitiesController } from './cities.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { City } from './schemas/cities.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: City.name, schema: City }])],
  controllers: [CitiesController],
  providers: [CitiesService],
})
export class CitiesModule {}
