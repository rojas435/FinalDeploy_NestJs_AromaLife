import { IsString, IsOptional, IsNumber, IsUUID, IsInt, IsIn, IsUrl, Min, Matches } from 'class-validator';

export class CreateCustomCandleDto {
  @IsUUID()
  @IsOptional()
  userId?: string;

  @IsUUID()
  containerId: string;

  @IsUUID()
  fragranceId: string;

  // @IsUUID()
  // emotionalStateId: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  price: number;

  @IsOptional()
  @IsUrl()
  customImageUrl?: string;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsIn(['pending', 'completed', 'cancelled'])
  status?: string;

  @IsOptional()
  @IsUrl()
  qrUrl?: string;
}