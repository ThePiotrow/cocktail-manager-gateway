import { PartialType } from '@nestjs/mapped-types';
import { CreateCocktailIngredientDto } from './create-cocktail_ingredient.dto';
import { IsUUID } from 'class-validator';

export class UpdateCocktailIngredientDto extends PartialType(CreateCocktailIngredientDto) {
    @IsUUID()
    id: string
}
