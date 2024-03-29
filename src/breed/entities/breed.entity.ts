import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Breed extends Document { 

    @Prop()
    name: string;

    @Prop()
    weight: number;

    @Prop()
    height: number;

    @Prop()
    life_span: number;

    @Prop()
    breed_for: string;

    @Prop()
    breed_group: string;


}

export const BreedSchema = SchemaFactory.createForClass(Breed);
