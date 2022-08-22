import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCityDto } from './dto/create-city.dto';
import { City, CityDocument } from './schemas/cities.schema';

@Injectable()
export class CitiesService {
  constructor(@InjectModel(City.name) private cityModel: Model<CityDocument>) {}

  async createCity(city: CreateCityDto): Promise<CityDocument> {
    const newCity = new this.cityModel(city);
    return newCity.save();
  }
}
