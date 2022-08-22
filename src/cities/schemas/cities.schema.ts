import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CityDocument = City & Document;

@Schema()
export class City {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  lat: string;

  @Prop()
  long: string;

  @Prop()
  country: string;

  @Prop()
  admin1: string;
}

export const CitySchema = SchemaFactory.createForClass(City);
