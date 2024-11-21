import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { RoleEnum } from '../enums/role';

@Schema({
  timestamps: true,
})
export class User {
  @Prop({ unique: [true, 'Duplicate username'] })
  username: string;

  @Prop()
  password: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  role: RoleEnum;
}
export const UserSchema = SchemaFactory.createForClass(User);
