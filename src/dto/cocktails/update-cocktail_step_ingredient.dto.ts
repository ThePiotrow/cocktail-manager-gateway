import { PartialType } from '@nestjs/mapped-types';
import { CreateCocktailStepIngredientDto } from './create-cocktail_step_ingredient.dto';
import { IsUUID } from 'class-validator';

export class UpdateCocktailStepIngredientDto extends PartialType(CreateCocktailStepIngredientDto) {
  @IsUUID()
  id: string;
}
