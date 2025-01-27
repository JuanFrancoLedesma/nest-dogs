import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class User extends Document {

    @Prop({
        unique: true,
        index: true
    })
    username: string;

    @Prop({
        unique: true,
        index: true
    })
    email: string;

    @Prop()
    password: string;

    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    birthDay: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);