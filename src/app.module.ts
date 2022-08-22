import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitiesModule } from './cities/cities.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://facufuentes:BKd6VeT5jtosZCMr@cluster0.eorhy.mongodb.net/backend-challenge?retryWrites=true&w=majority',
    ),
    CitiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
