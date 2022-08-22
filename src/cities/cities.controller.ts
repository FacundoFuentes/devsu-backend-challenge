import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CreateCityDto } from './dto/create-city.dto';
import { CityDocument } from './schemas/cities.schema';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Post('/create')
  async createCity(
    @Res() response,
    @Body() city: CreateCityDto,
  ): Promise<CityDocument> {
    const newCity = await this.citiesService.createCity(city);
    return response.status(200).json(newCity);
  }

  @Get('/bulk-create-cities')
  async bulkCreate(@Res() response) {
    try {
      const citiesDidCreate = await this.citiesService.bulkCreate();
      return response.status(200).json(citiesDidCreate);
    } catch (error) {
      return error;
    }
  }
}
