import { PartialType } from '@nestjs/mapped-types';
import { CreateCocktailPriceDto } from './create-cocktail_price.dto';
import { IsUUID } from 'class-validator';

export class UpdateCocktailPriceDto extends PartialType(CreateCocktailPriceDto) {
  @IsUUID()
  id: string;
}
