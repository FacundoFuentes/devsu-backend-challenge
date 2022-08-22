import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCityDto } from './dto/create-city.dto';
import { City, CityDocument } from './schemas/cities.schema';
import { csvToJson } from 'src/utils/csv-to-json';
import { formatAndScore } from 'src/utils/get-city-score';

@Injectable()
export class CitiesService {
  constructor(@InjectModel(City.name) private cityModel: Model<CityDocument>) {}

  async createCity(city: CreateCityDto): Promise<CityDocument> {
    const newCity = new this.cityModel(city);
    return newCity.save();
  }

  async bulkCreate() {
    const citiesJson = await csvToJson();
    this.cityModel.insertMany(citiesJson, (err, documents) => {
      if (err) throw err;
      else console.log(`Documents inserted correctly, ${documents.length}`);
    });
    return citiesJson;
  }

  async findSuggestions(city: string, latitude: string, longitude: string) {
    const citiesFound = await this.cityModel.find({
      name: { $regex: city },
    });

    const query = {
      name: city,
      latitude,
      longitude,
    };
    const result = formatAndScore(citiesFound, query);

    return result;
  }
}
