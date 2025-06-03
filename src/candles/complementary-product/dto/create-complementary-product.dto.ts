import { IsString, IsOptional, IsNumber, IsUrl, IsInt, Min } from 'class-validator';

export class CreateComplementaryProductDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  image_url?: string;

  @IsOptional()
  @IsNumber()
  price?: number;

}