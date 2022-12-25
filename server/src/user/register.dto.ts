import { IsEmail, IsNotEmpty } from 'class-validator';
import { Field, InputType, ObjectType, Int } from '@nestjs/graphql';

@InputType('registerInput')
export class RegisterRequest {
  @Field()
  @IsEmail()
  @IsNotEmpty()
  email?: string;

  @Field()
  @IsNotEmpty()
  password?: string;
}

@ObjectType()
export class RegisterResponse {
  @Field(() => Int)
  id?: number;

  @Field()
  @IsEmail()
  @IsNotEmpty()
  email?: string;
}
